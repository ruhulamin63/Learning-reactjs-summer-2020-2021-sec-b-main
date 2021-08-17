<?php

namespace App\Http\Controllers;

class AgentTransactionController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
   

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\View\View
     */
        // Route::get('cashin', ['as' => 'pages.transaction.cashin', 'uses' => 'App\Http\Controllers\transactionController@cashin']);
		// Route::get('cashout', ['as' => 'pages.transaction.cashin', 'uses' => 'App\Http\Controllers\transactionController@cashout']);
		// Route::get('requestmoney', ['as' => 'pages.transaction.cashin', 'uses' => 'App\Http\Controllers\transactionController@requestmoney']);
		// Route::get('paybill', ['as' => 'pages.transaction.cashin', 'uses' => 'App\Http\Controllers\transactionController@paybill']);
		// Route::get('bkash', ['as' => 'pages.transaction.cashin', 'uses' => 'App\Http\Controllers\transactionController@bkash']);
		// Route::get('nagad', ['as' => 'pages.transaction.cashin', 'uses' => 'App\Http\Controllers\transactionController@nagad']);
		// Route::get('rocket', ['as' => 'pages.transaction.cashin', 'uses' => 'App\Http\Controllers\transactionController@rocket']);
		// Route::get('upay', ['as' => 'pages.transaction.cashin', 'uses' => 'App\Http\Controllers\transactionController@upay']);
		// Route::get('surecash', ['as' => 'pages.transaction.cashin', 'uses' => 'App\Http\Controllers\transactionController@surecash']);
		// Route::get('bankcard', ['as' => 'pages.transaction.cashin', 'uses' => 'App\Http\Controllers\transactionController@bankcard']);
    
    public function cashin()
    {
        return view('pages.agent.transaction.cashin');
    }
    public function cashout()
    {
        return view('pages.agent.transaction.cashout');
    }
    public function requestmoney()
    {
        return view('pages.agent.transaction.requestmoney');
    }
    public function paybill()
    {
        return view('pages.agent.transaction.paybill');
    }
    public function bkash()
    {
        return view('pages.agent.transaction.bkash');
    }
    public function nagad()
    {
        return view('pages.agent.transaction.nagad');
    }
    public function rocket()
    {
        return view('pages.agent.transaction.rocket');
    }
    public function upay()
    {
        return view('pages.agent.transaction.upay');
    }
    public function surecash()
    {
        return view('pages.agent.transaction.surecash');
    }
    public function bankcard()
    {
        return view('pages.agent.transaction.bankcard');
    }
    public function recharge()
    {
        return view('pages.agent.transaction.recharge');
    }
    public function addmoney()
    {
        return view('pages.agent.addmoney');
    }
    public function transactionlist()
    {
        return view('pages.agent.transactionlist');
    }
    public function notifications()
    {
        return view('pages.notifications');
    }
    public function upgrade()
    {
        return view('pages.upgrade');
    }
    public function feedback()
    {
        return view('pages.agent.feedback');
    }
    public function adduser()
    {
        return view('pages.agent.adduser');
    }
    public function view()
    {
        return view('pages.agent.view');
    }
    public function chat()
    {
        return view('pages.agent.chat');
    }
    
}
