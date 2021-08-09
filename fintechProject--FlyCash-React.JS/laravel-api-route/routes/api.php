<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\AgentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PassController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//========================================Officer Router =======================================

//========================Customer Route================================================

    //Route::post('/emp-register', [CustomerController::class, 'store']);
    Route::get('show-customer', [CustomerController::class, 'show']);
    Route::get('transaction-customer', [CustomerController::class, 'view']);

    Route::get('edit-customer/{id}', [CustomerController::class, 'edit']);
    Route::put('update-customer/{id}', [CustomerController::class, 'update']);

    // Route::delete('delete-customer/{id}', [CustomerController::class, 'destroy']);

//===========================Agent Route================================

    Route::get('show-agent', [AgentController::class, 'index']);
    Route::get('transaction-agent', [AgentController::class, 'view']);

    Route::get('edit-agent/{id}', [AgentController::class, 'edit']);
    Route::put('update-agent/{id}', [AgentController::class, 'update']);

//======================Profile Router======================

   // Route::get('change-password/{id}', [PassController::class, 'edit']);
    Route::post('update-profile/{id}', [PassController::class, 'update']);

    Route::get('view-profile', [ProfileController::class, 'index']);

    Route::get('edit-profile/{id}', [ProfileController::class, 'edit']);
    Route::put('update-profile/{id}', [ProfileController::class, 'update']);

//=====================================End Officer Router =======================================
