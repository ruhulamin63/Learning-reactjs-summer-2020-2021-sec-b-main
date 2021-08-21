<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Officer;

use App\Models\Customer;
use App\Models\Campaign;
use App\Models\Agentstransaction;
use App\Models\Customerstransaction;
use App\Models\Loginuser;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;


use App\Http\Requests\RegisterRequest;


// use Validator;
use App\Http\Requests\EditProfileRequest;
use App\Models\Admin;
use App\Models\Agent;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;


class AdminController extends Controller
{
    public function ongoingCampaign()
    {

        $Campaign= DB::table('campaigns')->get();
        return response()->json($Campaign);
       
    }

    public function addCampaign(Request $request)
    {
        
        $campaign = Campaign::create($request->all());
        return response()->json(['campaign' => $campaign]);


    }

    public function updateCampaign (Request $request, Campaign $campaign)
    {
        // $job->name = $request->input('title');
        // $job->title = $request->input('description');
        // $job->location = $request->input('sdate');
        // $job->salary = $request->input('edate');
        // $job->save();

        return response()->json([
            'message' => 'Campaign updated',
            'campaign' => $campaign
        ]);


    }

    public function removeCampaign(Campaign $campaign)
    {
        $result = $campaign->delete();
       if($result){
        return response()->json([
            'message' => 'Campaign deleted'
        ]);
       }
       else{
        return response()->json([
            'message' => 'remove operation not working'
        ]);
       }
    }
   
    
    
        
        
        

       
       
    public function agentAddMoney(Request $req){

        $validity_status = Admin::where('email', $req->email)
        ->where('password', $req->password)
        ->first();
        if ($validity_status){
            $checkAgent = Agent::where('phone', $req->phone)
            ->first();
            $balance=$checkAgent->balance;
            $newbalance= $balance+ $req->amount;
            $balance=$newbalance;
            $checkAgent->balance=$balance;
            $checkAgent->save();
            
            if ($checkAgent) {
                return response()->json([
                    'status' => 200,
                    'message' => "Transaction Successful"
                ]);

            }else{
                return response()->json([
                    'status' => 240,
                    'message' => "Transaction unsuccessful"
                ]);
                
            }
            return response()->json([
                'status' => 240,
                'message' => "error"
            ]);

                

            } else {

                return response()->json([
                    'status' => 240,
                    'message' => "Incorrect password",
                ]);

            }

            return back()->with('msg','successful') ;

    }


    public function addDiscountCode(Request $req){

        $validity_status = Admin::where('email', $req->email)
        ->where('password', $req->password)
        ->first();
        if ($validity_status){
            $checkAgent = Customer::where('phone', $req->phone)
            ->first();
            $balance=$checkAgent->balance;
            $newbalance= $balance+ $req->amount;
            $balance=$newbalance;
            $checkAgent->balance=$balance;
            $checkAgent->save();
            
            if ($checkAgent) {
                return response()->json([
                    'status' => 200,
                    'message' => "Transaction Successful"
                ]);

            }else{
                return response()->json([
                    'status' => 240,
                    'message' => "Transaction unsuccessful"
                ]);
                
            }
            return response()->json([
                'status' => 240,
                'message' => "error"
            ]);

                

            } else {

                return response()->json([
                    'status' => 240,
                    'message' => "Incorrect password",
                ]);

            }

            return back()->with('msg','successful') ;

    }


    public function getAllAgent()
    {
        $Agent= DB::table('Agents')->get();

        return response()->json($Agent);
    }

    public function getAllCustomer()
    {
        $customer= DB::table('customers')->get();

        return response()->json($customer);
    }

    
    
    public function getAllOfficer()
    {
        $officer= DB::table('officers')->get();

        return response()->json($officer);
    }

    public function edit($email){

        $customer= Customer::find($email);

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


    public function update(Request $req, $email)
    {
        $customer = Customer::find($email);
        
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

    public function adminRegister(Request $req)
    {
       
        $validator = Validator::make($req->all(), [
            'name' => 'required|min:3|max:30|alpha',
            'email' => 'email:rfc,dns|required|min:10|max:50|',
            'password'=> 'required|min:8|max:20',
            'password_confirmation'=> 'required|min:8|max:20',
            'phone' => 'required|min:11|numeric',
            'nid' => 'required|min:10|numeric',
            'dob' => 'required',
        ]);

            if ($validator->fails()) {
                return response()->json([
                    'error'=> $validator->errors(),
                ]);
            }else{
                
            if ($req-> password == $req-> password_confirmation){
                $checkUser = Loginuser::where('email',$req->email)
                ->first();
                $checkNid = Loginuser::where('nid',$req->nid)
                ->first();
                $checkPhone = Loginuser::where('phone',$req->phone)
                ->first();
                if($checkUser)
                {
                
                    return response()->json([
                        'status' => 240,
                        'message' =>'User already Exist!',
        
                    ]);
                }elseif($checkNid){
                
                    return response()->json([
                        'status' => 240,
                        'message' =>'An Account Already registered with this nid !',
        
                    ]);
                }elseif($checkPhone)
                {   
                
                    return response()->json([
                        'status' => 240,
                        'message' =>'An Account Already registered with this Phone Number !',
        
                    ]);

                }else{
                    //********************************woriking**************************** */
                    
                        if($req->type =="customer"){
                            $loginuser = new Loginuser;
                            $loginuser->email = $req->email;
                            $loginuser->password = $req->password;
                            $loginuser->type = $req->type;
                            $loginuser->phone = $req->phone;
                            $loginuser->nid = $req->nid;
                            $loginuser->save();

                            $customer = new Customer;
                            $customer->name = $req->name;
                            $customer->email = $req->email;
                            $customer->password = $req->password;
                            $customer->transaction_status = "unblocked";
                            $customer->phone = $req->phone;
                            $customer->nid = $req->nid;
                            $customer->dob = $req->dob;
                            $customer->type = $req->type;
                            //$user->user_type = "active";
                            $customer->balance = 20;
                            $customer->save(); 
                            
                            return response()->json([
                                'status' => 200,
                                'message' => "Registration Successfull",
                            ]);

                        }elseif($req->type =="admin"){
                            $loginuser = new Loginuser;
                            $loginuser->email = $req->email;
                            $loginuser->password = $req->password;
                            $loginuser->type = $req->type;
                            $loginuser->phone = $req->phone;
                            $loginuser->nid = $req->nid;
                            $loginuser->save();


                            $admin = new Admin;
                            $admin->profit = 0;
                            $admin->name = $req->name;
                            $admin->email = $req->email;
                            $admin->password = $req->password;
                            $admin->phone = $req->phone;
                            $admin->nid = $req->nid;
                            $admin->dob = $req->dob;
                            $admin->type = $req->type;
                            //$user->user_type = "active";
                            $admin->save();

                            return response()->json([
                                'status' => 200,
                                'message' => " Registration Successfull",
                            ]);  


                        }elseif($req->type =="agent"){
                            $loginuser = new Loginuser;
                            $loginuser->email = $req->email;
                            $loginuser->password = $req->password;
                            $loginuser->type = $req->type;
                            $loginuser->phone = $req->phone;
                            $loginuser->nid = $req->nid;
                            $loginuser->save();

                            $agent = new Agent;
            
                            $agent->balance = 10;
                            $agent->name = $req->name;
                            $agent->email = $req->email;
                            $agent->password = $req->password;
                            $agent->transaction_status = "unblocked";
                            $agent->phone = $req->phone;
                            $agent->nid = $req->nid;
                            $agent->dob = $req->dob;
                            $agent->type = $req->type;
                            //$user->user_type = "active";
                            $agent->save();

                            return response()->json([
                                'status' => 200,
                                'message' => "Registration Successfull",
                            ]); 

                        }else{
                            return response()->json([
                                'status' => 200,
                                'message' => "'Invalid User Type'",
                            ]);

                        }
                    
        
            

                }
                

            }else{
            
                
                return response()->json([
                    'status' => 240,
                    'message' => "Password and Confirm Passowrd Does Not match!",

                ]);
            }
        } 
         
    }
    

}
