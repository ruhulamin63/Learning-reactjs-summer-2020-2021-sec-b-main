<?php

//namespace App\Http\Controllers\Auth;

// use App\Http\Controllers\Controller;
// use App\Providers\RouteServiceProvider;
// use Illuminate\Foundation\Auth\AuthenticatesUsers;
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Http\Requests\LoginUserRequest;
use Illuminate\Support\Facades\DB;
use App\Models\Loginuser;
use App\Models\Customer;
use App\Models\Admin;
use App\Models\Agent;
use App\Models\Officer;

class LoginController extends Controller
{
    // /*
    // |--------------------------------------------------------------------------
    // | Login Controller
    // |--------------------------------------------------------------------------
    // |
    // | This controller handles authenticating users for the application and
    // | redirecting them to your home screen. The controller uses a trait
    // | to conveniently provide its functionality to your applications.
    // |
    // */

    // //use AuthenticatesUsers;

    // /**
    //  * Where to redirect users after login.
    //  *
    //  * @var string
    //  */
    // protected $redirectTo = RouteServiceProvider::HOME;

    // /**
    //  * Create a new controller instance.
    //  *
    //  * @return void
    //  */
    // public function __construct()
    // {
    //     $this->middleware('guest')->except('logout');
    // }

    public function login(){
        return view('auth.login');
    }

    public function verify(LoginUserRequest $req){

        
            $status = Loginuser::where('email',$req->email)
            ->where('password',$req->password)
            ->first();
           
        if($status)
        { 
            $type= $status->type;
            
            if ($type == "customer")
            {
                $customer = Customer::where('email',$req->email)
                ->first();
                return response()->json([
                    'status' => 400,
                    'user_status'=>$customer,
                    'message' => 'Login Successfully',
                ]);
                

            }
            elseif ($type == "agent")
            {
                $agent = Agent::where('email',$req->email)
                ->first();
                return response()->json([
                    'status' => 400,
                    'user_status'=>$agent,
                    'message' => 'Login Successfully',
                ]);
                
               
            } 
            elseif ($type == "admin")
            {   
                $admin = Admin::where('email',$req->email)
                ->first();
                return response()->json([
                    'status' => 400,
                    'user_status'=>$admin,
                    'message' => 'Login Successfully',
                ]);
                
               
            }else if ($type == "officer")
            {   
                $officer = Officer::where('email',$req->email)
                ->first();
                return response()->json([
                    'status' => 200,
                    'user_status'=>$officer,
                    'message' => 'Login Successfully',
                ]);
               

            }
            
        }else{
            
            return response()->json([
                'not_found' => 'Data Not Found',
            ]);
        }
     }
}
