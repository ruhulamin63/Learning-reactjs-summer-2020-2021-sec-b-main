<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\Agent;

class CheckTransactionStatus
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if($request->session()->get('type')=="customer"){
            $customer = Customer::where('email',$request->session()->get('email'))
            ->first();
            if ($customer->transaction_status=='unblocked')
            {
                return $next($request);
            }
            if ($customer->transaction_status=='blocked')
            {
                return response()->json([
                    'status' => 240,
                    'message' => "Transaction is blocked. Contact with Customer Service",

                ]);
            }else{
                return response()->json([
                    'status' => 240,
                    'message' => "Something is wrong with your transaction status",

                ]);
            }
            
        } if($request->session()->get('type')=="agent"){
            $agent = Agent::where('email',$request->session()->get('email'))
            ->first();
            if ($agent->transaction_status=='1')
            {
                return $next($request);
            }if ($agent->transaction_status=='blocked')
            {
                return response()->json([
                    'status' => 240,
                    'message' => "Transaction is blocked. Contact with Customer Service",

                ]);
            }else{
                return response()->json([
                    'status' => 240,
                    'message' => "Something is wrong with your transaction status",

                ]);
            }
            
        }else{
            return response()->json([
                'status' => 240,
                'message' => "Please Contact to Customer Service",

            ]);
            
        }
        
    }
}
