<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Officer;
use App\Models\Customer;
use App\Models\Customerstransaction;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\EditProfileRequest;
use Illuminate\Support\Facades\DB; //Import query builser 


class CustomerController extends Controller
{
    
    public function updateCustomer(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'name' => 'required|min:3|max:30|alpha',
            'phone' => 'required|min:11|numeric',
        ]);

            if ($validator->fails()) {
                return response()->json([
                    'error'=> $validator->errors(),
                ]);
            }else{
                $customer= Customer::where('email',$req->email)
                ->first();
                $customer->phone = $req->phone;
                $customer->name = $req->name;
                $customer->save();
                if($customer){
                    $newData = Customer::where('email', $req->email)
                    ->first();
                    return response()->json([
                        'status' => 200,
                        'user_status' => $newData,
                        'message' => "Profile Updated",
                    ]);
                }
                else{
                    return response()->json([
                        'status' => 240,
                        'message' => "Error",
                    ]);

                }
            }
       
    }
// ============================ End Edit ====================================

    public function update(Request $req, $id)
    {
        $customer = Customer::find($id);
        
        $customer->phone = $req->input('phone');
        $customer->nid = $req->input('nid');
        $customer->dob = $req->input('dob');
        $customer->type = $req->input('type');

            if ($validator->fails()) {
                return response()->json([
                    'error'=> $validator->errors(),
                ]);
            }else{
                $customer= Customer::where('email',$req->email)
                ->first();
                $customer->phone = $req->phone;
                $customer->name = $req->name;
                $customer->save();
                if($customer){
                    $newData = Customer::where('email', $req->email)
                    ->first();
                    return response()->json([
                        'status' => 200,
                        'user_status' => $newData,
                        'message' => "Profile Updated",
                    ]);
                }
                else{
                    return response()->json([
                        'status' => 240,
                        'message' => "Error",
                    ]);

                }
            }
       
    }
    //******************************Officer function************************* */
    public function show()
    {
        $customer= Customer::all(); //change Officer to (Customer)->tablename

        //$users = Officer::orderBy('id','DESC')->get(); //change Officer to (Agent)->tablename

        return response()->json([
            'status' => 200,
            'customers' => $customer
        ]);
    }
    // ============================ End Insert ====================================

    public function edit($id){

        $customer= Customer::find($id);

        if ($customer) {
            return response()->json([
                'status' => 200,
                'customers' => $customer,
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No customer Id Found',
            ]);
        }
    }
// ============================ End Edit ====================================

  
public function updateAgent(Request $req, $id)
{
    $customer = Customer::find($id);
    
    $customer->phone = $req->input('phone');
    $customer->nid = $req->input('nid');
    $customer->dob = $req->input('dob');
    $customer->type = $req->input('type');

    $customer->update();

    return response()->json([
        'status' => 200,
        'message' => 'Customer Update Successfully',
    ]);
}

// ============================ End Update ====================================

//===========================Officer get transaction for customer=================================

    public function view()
    {
        $customer= Customerstransaction::all(); //change Officer to (Customer)->tablename
        //$customer = DB::table('customerstransactions')->where('email', '=', $email)->get();

        //$users = Officer::orderBy('id','DESC')->get(); //change Officer to (Agent)->tablename

        return response()->json([
            'status' => 200,
            'customers' => $customer
        ]);
    }

//===============Block & Unblock Part====================

    public function userblocked($id)
    {
        //dd($email);
        $update =  DB::table('customers')
        ->where('id', $id)
        ->update([
            'transaction_status' => 'blocked',
        ]);
    
        if ($update)
        {
            return response()->json([
                'status' => 200,
                'updates' => $update,
                'message' =>"Customer Transaction Blocked",
            ]);

        }else{
            return response()->json([
                'message' => 'Not updated'
            ]);
        }
    }

    public function userunblocked($id)
    {
        
        //dd($email);
        $update =  DB::table('customers')
        ->where('id', $id)
        ->update([
            'transaction_status' => 'unblocked',
        ]);
    
        if ($update)
        {
            return response()->json([
                'status' => 200,
                'updates' => $update,
                'message' =>"Customer Transaction Unblocked",
            ]);

        }else{
            return response()->json([
                'message' => 'Not updated',
            ]);
        }
    }
}
