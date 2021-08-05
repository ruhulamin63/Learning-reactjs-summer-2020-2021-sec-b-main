<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Register;

class EmpController extends Controller
{
    public function store(Request $req){

        $emp = new Register;

        $emp->username = $req->input('username');
        $emp->name = $req->input('name');
        $emp->phone = $req->input('phone');
        $emp->password = $req->input('password');

        $emp->save();

        return response()->json([
            'status'=>200,
            'message'=>'Employee Register Added Successfully',
        ]);
    }
}
