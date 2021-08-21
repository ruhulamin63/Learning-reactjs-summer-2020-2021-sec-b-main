<?php

namespace App\Http\Controllers;

use App\Http\Requests\TransactionRequest;
use App\Models\Agent;
use App\Models\Customer;
use App\Models\Customerstransaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Validator;

class CustomerTransactionController extends Controller
{
    
//**************************************************************************** */
    public function index($email)
    {
        //$email = 'joy@gmail.com';
        $customer = DB::table('customerstransactions')->where('email', '=', $email)->get();

         return response()->json($customer);
        // $customer= Customer::all(); //change Officer to (Customer)->tablename

        //$users = Officer::orderBy('id','DESC')->get(); //change Officer to (Agent)->tablename

        // return response()->json([
        //     'status' => 200,
        //     'list' => $customer
        // ]);
    }
    public function test(Request $req)
    {
        $a = $req->phone;
        return response()->json([
            'status' => 240,
            'message' => $a,
        ]);
    }
    //********************************Transaction******************************************** */
    public function makeTransaction(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'phone' => 'required',
            'amount' => 'required',
            'password' => 'required'
            

        ]);

        if ($validator->fails()) {
            return response()->json([
                'error'=> $validator->messages()
            ]);
        } else {

            
            $status = Customer::where('email',$req->email)
            ->where('password',$req->password)
            ->first();
            $transaction_type = $req->transaction_type;
            $email = $req->email;
            $phone = $req->phone;

            $balance = $status->balance;
            $amount = $req->amount;

            if ($status) {
                if ($transaction_type == "Add Money") {

                    $customer = Customer::where('email', $email)
                        ->first();
                    $newbalance = $balance + $req->amount;
                    $balance = $newbalance;

                    $customer->balance = $balance;
                    $customer->save();

                    $transaction = new Customerstransaction();
                    $transaction->phone = $phone;
                    $transaction->email = $email;
                    $transaction->transaction_type = $transaction_type;
                    $transaction->amount = $amount;
                    $transaction->balance = $balance;
                    $transaction->date = now();
                    $transaction->save();
                    if ($transaction) {
                        $customer = Customer::where('email', $email)
                            ->first();
                        return response()->json([
                            'status' => 200,
                            'user_status' => $customer,
                            'message' => "Transaction Successfull",

                        ]);

                    } else {

                        return response()->json([
                            'status' => 240,
                            "balance" => $balance,
                            'message' => "Transaction Unuccessfull",
                        ]);

                    }

                } elseif ($transaction_type == "Cash out" || $transaction_type == "Payment" || $transaction_type == "Donate" || $transaction_type == "Mobile Recharge" || $transaction_type == "Send Money" || $transaction_type == "Transfer money" ||$transaction_type == "Buy Tickets") {

                    $customer = Customer::where('email', $email)
                        ->first();
                    $newbalance = $balance - $req->amount;
                    $balance = $newbalance;

                    $customer->balance = $balance;
                    $customer->save();

                    $transaction = new Customerstransaction();
                    $transaction->phone = $phone;
                    $transaction->email = $email;
                    $transaction->transaction_type = $transaction_type;
                    $transaction->amount = $amount;
                    $transaction->balance = $balance;
                    $transaction->date = now();
                    $transaction->save();
                    if ($transaction) {
                        $customer = Customer::where('email', $email)
                            ->first();
                        return response()->json([
                            'status' => 200,
                            'user_status' => $customer,
                            'message' => "Transaction Successfull",

                        ]);

                    } else {

                        return response()->json([
                            'status' => 240,
                            "balance" => $balance,
                            'message' => "Transaction Unuccessfull",
                        ]);

                    }

                }else{
                    return response()->json([
                        'status' => 240,
                        'message' => "unknown error",
                    ]);

                }
            }else {

                return response()->json([
                    'status' => 240,
                    'message' => "password missmatch",
                ]);

            }

        }

        

    }
}
