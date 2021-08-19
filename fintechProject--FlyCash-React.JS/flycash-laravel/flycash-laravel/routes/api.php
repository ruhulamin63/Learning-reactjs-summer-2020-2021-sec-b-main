<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/users-login', 'LoginController@verify');
Route::post('/users-register', 'RegisterController@register');

//========================   CUSTOMER   ======================================


Route::get('/customer/transactionlist','CustomerTransactionController@index');


//========================================Officer Router =======================================

//========================Customer Route================================================

    //Route::post('/emp-register', [CustomerController::class, 'store']);
    Route::get('show-customer', 'CustomerController@show');
    //Route::get('transaction-customer/{email}', 'CustomerController@view');
    Route::get('transaction-customer', 'CustomerController@view');

    Route::get('edit-customer/{id}', 'CustomerController@edit');
    Route::put('update-customer/{id}', 'CustomerController@update');

    Route::put('block-list/{id}', 'CustomerController@userblocked');
    Route::put('block-list/{id}', 'CustomerController@userunblocked');

    // Route::delete('delete-customer/{id}', [CustomerController::class, 'destroy']);

//===========================Agent Route================================

    Route::get('show-agent', 'AgentController@index');
    Route::get('transaction-agent', 'AgentController@view');

    Route::get('edit-agent/{id}', 'AgentController@edit');
    Route::put('update-agent/{id}', 'AgentController@update');

    Route::get('agent-blockeduser/{id}', 'AgentTransactionController@agentblocked');
	Route::get('agent-unblockuser/{id}', 'AgentTransactionController@agentblocked');

//======================Profile Router======================

    Route::get('edit-password/{id}', 'PassController@editPassword');
    Route::post('update-password/{id}', 'PassController@updatePassword');

    Route::get('view-profile', 'ProfileController@index');

    Route::get('edit-profile/{id}', 'ProfileController@edit');
    Route::put('update-profile/{id}', 'ProfileController@update');

//=====================================End Officer Router =======================================