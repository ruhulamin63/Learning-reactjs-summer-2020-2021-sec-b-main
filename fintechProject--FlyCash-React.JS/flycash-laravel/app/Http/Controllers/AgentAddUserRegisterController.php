<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Http\Requests\AgentAddUserRegisterRequest;
use App\Models\Loginuser;
use App\Models\Customer;


class AgentAddUserRegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */
    public function agentAddCustomer(Request $req)
    {
        $validator = Validator::make($req->all(), [
            //'name' => 'required|min:3|max:30',
            // 'email' => 'email:rfc,dns|required|min:10|max:50|',
            // 'password'=> 'required|min:8|max:20',
            // 'password_confirmation'=> 'required|min:8|max:20',
            // 'phone' => 'required|min:11|numeric',
            // 'nid' => 'required|min:10|numeric',
            // 'dob' => 'required',
        ]);

            if ($validator->fails()) {
                return response()->json([
                    'error'=> $validator->errors(),
                ]);
            }else{

                if ($req-> password == $req-> password_confirmation){
                    $checkUser = Customer::where('email',$req->email)
                    ->first();
                    $checkNid = Customer::where('nid',$req->nid)
                    ->first();
                    $checkPhone = Customer::where('phone',$req->phone)
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

                            // $loginuser = new Loginuser;
                            // $loginuser->email = $req->email;
                            // $loginuser->password = $req->password;
                            // $loginuser->type = $req->type;
                            // $loginuser->phone = $req->phone;
                            // $loginuser->nid = $req->nid;
                            // $loginuser->save();

                            $customer = new Customer;
                            $customer->name = $req->name;
                            $customer->email = $req->email;
                            $customer->password = $req->password;
                            $customer->transaction_status = "unblocked";
                            $customer->phone = $req->phone;
                            $customer->nid = $req->nid;
                            $customer->dob = $req->dob;
                            $customer->type = "customer";
                            $customer->balance = 20;
                            $customer->save(); 
                            if ($customer){
                                return response()->json([
                                    'status' => 200,
                                    'message' => "New Customer Added Successfully",
                                ]);
    

                            }else{
                                return response()->json([
                            'status' => 200,
                            'message' =>'success'           
                            ]);
                            }
                        }
                    }    
                
                    return response()->json([
                        'status' => 240,
                        'message' => "Password and Confirm Password Does Not match!",
    
                    ]);
              
            }
    }

    // public function agentAdduser(Request $req)
    // {
       
        
    //     $validator = Validator::make($req->all(), [
    //         'name' => 'required|min:3|max:30|alpha',
    //         // 'email' => 'email:rfc,dns|required|min:10|max:50|',
    //         // 'password'=> 'required|min:8|max:20',
    //         // 'password_confirmation'=> 'required|min:8|max:20',
    //         // 'phone' => 'required|min:11|numeric',
    //         // 'nid' => 'required|min:10|numeric',
    //         // 'dob' => 'required',
    //     ]);

    //         if ($validator->fails()) {
    //             return response()->json([
    //                 'error'=> $validator->errors(),
    //             ]);
    //         }else{
                
    //         if ($req-> password == $req-> password_confirmation){
    //             $checkUser = Customer::where('email',$req->email)
    //             ->first();
    //             $checkNid = Customer::where('nid',$req->nid)
    //             ->first();
    //             $checkPhone = Customer::where('phone',$req->phone)
    //             ->first();
    //             if($checkUser)
    //             {
                
    //                 return response()->json([
    //                     'status' => 240,
    //                     'message' =>'User already Exist!',
        
    //                 ]);
    //             }elseif($checkNid){
                
    //                 return response()->json([
    //                     'status' => 240,
    //                     'message' =>'An Account Already registered with this nid !',
        
    //                 ]);
    //             }elseif($checkPhone)
    //             {   
                
    //                 return response()->json([
    //                     'status' => 240,
    //                     'message' =>'An Account Already registered with this Phone Number !',
        
    //                 ]);

    //             }else{
                   
                    
    //                     if($req->type =="customer"){
    //                         $loginuser = new Loginuser;
    //                         $loginuser->email = $req->email;
    //                         $loginuser->password = $req->password;
    //                         $loginuser->type = $req->type;
    //                         $loginuser->phone = $req->phone;
    //                         $loginuser->nid = $req->nid;
    //                         $loginuser->save();

    //                         $customer = new Customer;
    //                         $customer->name = $req->name;
    //                         $customer->email = $req->email;
    //                         $customer->password = $req->password;
    //                         $customer->transaction_status = "unblocked";
    //                         $customer->phone = $req->phone;
    //                         $customer->nid = $req->nid;
    //                         $customer->dob = $req->dob;
    //                         $customer->type = "customer";
    //                         //$user->user_type = "active";
    //                         $customer->balance = 20;
    //                         $customer->save(); 
                            
    //                         return response()->json([
    //                             'status' => 200,
    //                             'message' => "New Customer Added Successfully",
    //                         ]);

    //                     }else{
    //                         return response()->json([
    //                             'status' => 200,
    //                             'message' => "'Invalid User Type'",
    //                         ]);

    //                     }
                    
        
            

    //             }
                

    //         }else{
            
                
    //             return response()->json([
    //                 'status' => 240,
    //                 'message' => "Password and Confirm Password Does Not match!",

    //             ]);
    //         }
    //     } 
    // }
}