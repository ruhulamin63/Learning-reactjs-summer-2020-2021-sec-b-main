<?php

namespace App\Http\Controllers;
use Validator;
use App\Http\Requests\TransactionRequest;
use Illuminate\Http\Request;
use App\Models\Agentstransaction;
use App\Models\Agent;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class AgentTransactionController extends Controller
{
    public function index()
    {
        $email='Borno@gmail.com';
        $agent= DB::table('agentstransactions')->where('email', '=', $email)->get();

        return response()->json($agent);
    }

    public function test(Request $req)
    {
        $a = $req->phone;
        return response()->json([
            'status' => 240,
            'message' => $a,
        ]);
    }


    public function agentTransaction(Request $req)
    {

        $validator = Validator::make($req->all(), [
            'phone' => 'required',
            'amount' => 'required',
            'password' => 'required'
            

        ]);

        if ($validator->fails()) {
            return response()->json([
                'error'=> $validator->errors()
            ]);
        } else {


        $status = Agent::where('email', $req->email)
            ->where('password', $req->password)
            ->first();
        $transaction_type = $req->transaction_type;
        $email = $req->email;
        $phone = $req->phone;

        $balance = $status->balance;
        $profit = $status->profit;
        $amount = $req->amount;

        if ($status) {
            if (
                $transaction_type == "Request Money" || 
                $transaction_type == "Add Money(Bkash)" || 
                $transaction_type == "Add Money(Nagad)" || 
                $transaction_type == "Add Money(Rocket)" || 
                $transaction_type == "Add Money(SureCash)" || 
                $transaction_type == "Add Money(Upay)" || 
                $transaction_type == "Add Money(Card)" ) 
                {

                $agent = Agent::where('email', $email)
                    ->first();
                $newbalance = $balance + $req->amount;
                $balance = $newbalance;
                $newprofit = $profit + $req->amount * '0.05';
                $profit = $newprofit;

                $agent->balance = $balance;
                
                $agent->profit = $profit;

                $agent->save();


                $transaction = new Agentstransaction();
                $transaction->phone = $phone;
                $transaction->email = $email;
                $transaction->transaction_type = $transaction_type;
                $transaction->amount = $amount;
                $transaction->balance = $balance;
                $transaction->profit = $profit;
                $transaction->date = now();
                $transaction->save();
                if ($transaction) {
                    $agent = Agent::where('email', $email)
                        ->first();
                    return response()->json([
                        'status' => 200,
                        'user_status' => $agent,
                        'message' => "Transaction Successful",

                    ]);

                } else {

                    return response()->json([
                        'status' => 240,
                        "balance" => $balance,
                        "profit" => $profit,
                        'message' => "Transaction Unsuccessful",
                    ]);

                }

            } elseif ($transaction_type == "Cash In" || $transaction_type == "Cash out" || $transaction_type == "Mobile Recharge" || $transaction_type == "Pay Bill") {

                $agent = Agent::where('email', $email)
                    ->first();
                $newbalance = $balance - $req->amount;
                $balance = $newbalance;
                $newprofit = $profit + $req->amount * '0.05';
                $profit = $newprofit;


                $agent->balance = $balance;

                $agent->profit = $profit;

                $agent->save();

                $transaction = new Agentstransaction();
                $transaction->phone = $phone;
                $transaction->email = $email;
                $transaction->transaction_type = $transaction_type;
                $transaction->amount = $amount;
                $transaction->balance = $balance;
                $transaction->profit = $profit;
                $transaction->date = now();
                $transaction->save();
                if ($transaction) {
                    $agent = Agent::where('email', $email)
                        ->first();
                    return response()->json([
                        'status' => 200,
                        'user_status' => $agent,
                        'message' => "Transaction Successful",

                    ]);

                } else {

                    return response()->json([
                        'status' => 240,
                        "balance" => $balance,
                        "profit" => $profit,
                        'message' => "Transaction Unsuccessful",
                    ]);

                }

            }else{
                return response()->json([
                    'status' => 240,
                    'message' => "unknown error",
                ]);

            }

            

            } else {

                return response()->json([
                    'status' => 240,
                    'message' => "password does not match",
                ]);

            }
        }
    }
}










