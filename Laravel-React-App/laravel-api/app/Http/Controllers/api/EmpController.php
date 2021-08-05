<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Register;

class EmpController extends Controller
{
    public function index(){

        $employee = Register::all();

        return response()->json([
            'status'=>200,
            'employees'=>$employee
        ]);
    }

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

    public function edit($id){
        
        $employee = Register::find($id);

        return response()->json([
            'status'=>200,
            'employees'=>$employee,
        ]);
    }

    public function update(Request $req, $id){

        $emp = Register::find($id);

        $emp->username = $req->input('username');
        $emp->name = $req->input('name');
        $emp->phone = $req->input('phone');
        $emp->password = $req->input('password');

        $emp->update();

        return response()->json([
            'status'=>200,
            'message'=>'Employee Update Successfully',
        ]);
    }

    public function destroy($id){

        $student = Register::find($id);
        $student->delete();

        return response()->json([
            'status'=>200,
            'message'=>'Employee Delete Successfully',
        ]);
    }
}
