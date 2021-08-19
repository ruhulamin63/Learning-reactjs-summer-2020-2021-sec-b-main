<?php

//namespace App\Http\Controllers\Auth;

// use App\Http\Controllers\Controller;
// use App\Providers\RouteServiceProvider;
// use Illuminate\Foundation\Auth\AuthenticatesUsers;
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Http\Requests\LoginUserRequest;
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

        
            $user_status = Loginuser::where('email',$req->email)
            ->where('password',$req->password)
            ->first();
           
        if($user_status)
        { 

            return response()->json([
                'status' => 400,
                'user_status'=>$user_status,
                'message' => 'Login Successfully',
            ]);

        //    $type= $status->type;
            
        //     if ($type == "customer")
        //     {
        //         $customer = Customer::where('email',$req->email)
        //         ->first();
        //         //dd($customer);
        //         return response()->json([
        //             'status' => 400,
        //             'customers'=>$customer,
        //             'message' => 'Login Successfully',
        //         ]);
        //     }
        //     elseif ($type == "agent")
        //     {
        //         $agent = Agent::where('email',$req->email)
        //         ->first();
                
        //         return response()->json([
        //             'status' => 400,
        //             'agents'=>$agent,
        //             'message' => 'Login Successfully',
        //         ]);
        //     } 
        //     elseif ($type == "admin")
        //     {   
        //         $admin = Admin::where('email',$req->email)
        //         ->first();

        //         return response()->json([
        //             'status' => 400,
        //             'admins'=>$admin,
        //             'message' => 'Login Successfully',
        //         ]);

        //     }elseif ($type == "officer")
        //     {   
        //         $officer = Officer::where('email',$req->email)
        //         ->first();

        //         return response()->json([
        //             'status' => 400,
        //             'officers'=>$officer,
        //             'message' => 'Login Successfully',
        //         ]);
        //     }
            
        }else{
            
            return response()->json([
                'not_found' => 'Data Not Found',
            ]);
        }

            

        
        
     }
}
/*public function Login(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'login_email' => 'required|email|max:50',
            'login_password' => [
                'required',
                'min:8', 
                'max:20', 
            ],
        ]);

        if ($validator->fails()) {
            return redirect()->back()->with([
                'error' => true,
                'message' => 'Required data missing.'
            ]);
        }else{
            $password=md5($request->input('login_password'));

            $user=DB::table('userinfos')
            ->where('email',$request->input('login_email'))
            ->where('status',1)
            ->first();
            
            if($user){

                if($user->password == $password){

                    if($user->type == 1){
                        return redirect('/admin/dashboard');
                    }elseif($user->type == 2){
                        return redirect('/org/dashboard');
                    }elseif($user->type == 3){
                        return redirect('/sp/dashboard');
                    }elseif($user->type == 4){
                        return redirect('/');
                    }else{
                        return redirect()->back()->with([
                            'error' => true,
                            'message' => 'Something going wrong'
                        ]);
                    }
                }else{
                    return redirect()->back()->with([
                        'error' => true,
                        'message' => 'user email or password not matched'
                    ]);
                }

            }else{
                return redirect()->back()->with([
                    'error' => true,
                    'message' => 'user Not found!'
                ]);
            }
        }
    }*/