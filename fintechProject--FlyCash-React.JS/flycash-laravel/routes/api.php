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

    Route::get('/show-agent/{id}', 'AgentController@agentblocked');
	Route::get('/show-agent/{id}', 'AgentController@agentblocked');

//======================Profile Router======================

    Route::get('edit-password/{id}', 'OfficerController@editPassword');
    Route::post('update-password/{id}', 'OfficerController@updatePassword');

    Route::get('view-profile', 'OfficerController@index');

    Route::get('edit-profile/{id}', 'OfficerController@edit');
    Route::put('update-profile/{id}', 'OfficerController@update');

//=====================================End Officer Router =======================================