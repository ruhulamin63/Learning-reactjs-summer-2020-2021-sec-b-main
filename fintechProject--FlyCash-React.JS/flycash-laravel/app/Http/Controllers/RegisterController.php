<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Http\Requests\RegisterRequest;
use App\Models\Loginuser;
use App\Models\Customer;
use App\Models\Admin;
use App\Models\Agent;


class RegisterController extends Controller
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

    public function register()
    {
        return view('auth.register');
    }
    
        // public function verify(A $req){
        //     echo 'registration Complete';
        // }
        public function insert(RegisterRequest $req){
            if ($req-> password == $req-> password_confirmation)
            {
                $checkUser = Loginuser::where('email',$req->email)
                ->first();
                $checkNid = Loginuser::where('nid',$req->nid)
                ->first();
                $checkPhone = Loginuser::where('phone',$req->phone)
                ->first();
                //dd($req);
                if($checkUser)
                {
                    $req->session()->flash('msg', 'User already Exist!');
                    return redirect('/register');
                }elseif($checkNid){
                    $req->session()->flash('msg', 'An Account Already registered with this nid !');
                    return redirect('/register');
                }elseif($checkPhone)
                {   
                    $req->session()->flash('msg', 'An Account Already registered with this Phone Number !');
                    return redirect('/register');

                }else{

                    $loginuser = new Loginuser;
                    $loginuser->email = $req->email;
                    $loginuser->password = $req->password;
                    $loginuser->type = $req->type;
                    $loginuser->phone = $req->phone;
                    $loginuser->nid = $req->nid;
                    $loginuser->save();


                        if ($req->type =="customer"){

                            $customer = new Customer;
                            $customer->name = $req->name;
                            $customer->email = $req->email;
                            $customer->password = $req->password;
                            $customer->transaction_status = 1;
                            $customer->phone = $req->phone;
                            $customer->nid = $req->nid;
                            $customer->dob = $req->dob;
                            $customer->type = $req->type;
                            //$user->user_type = "active";
                            $customer->balance = 20;
                            $customer->save();
                
                            
                            return redirect('/login');

                        }elseif ($req->type =="admin"){

                           
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
                
                          
                            return redirect('/login');




                    }elseif($req->type =="agent"){


                        
                        $agent = new Agent;
        
                        $agent->balance = 10;
                        $agent->name = $req->name;
                        $agent->email = $req->email;
                        $agent->password = $req->password;
                        $agent->transaction_status = 1;
                        $agent->phone = $req->phone;
                        $agent->nid = $req->nid;
                        $agent->dob = $req->dob;
                        $agent->type = $req->type;
                        //$user->user_type = "active";
                        $agent->save();
            
                        
                        return redirect('/login');




                    }else{
                        $req->session()->flash('msg', 'Invalid User Type');
                        return redirect('/register');

                    }


                

            }
            
            }else{
                
                $req->session()->flash('msg', 'Password and Confirm Passowrd Does Not match!');
                return redirect('/register');
                //return view('login.index');
            }
            
        }
}
