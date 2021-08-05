<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Register;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class EmpController extends Controller
{
    public function index()
    {

        $employee = Register::all();

        return response()->json([
            'status' => 200,
            'employees' => $employee
        ]);
    }

    public function store(Request $req)
    {

        // $validator = Validator::make($req->all(),[
        //     'username' => 'requird|max:191',
        //     'name' => 'requird|max:191',
        //     'phone' => 'requird|max:11|min:11',
        //     'password' => 'requird|max:20|min:8',
        // ]);

        // if ($validator->fails()) {

        //     return response()->json([
        //         'validate_error' => $validator,
        //     ]);
        // } else {

            $emp = new Register;

            $emp->username = $req->input('username');
            $emp->name = $req->input('name');
            $emp->phone = $req->input('phone');
            $emp->password = $req->input('password');

            $emp->save();

            return response()->json([
                'status' => 200,
                'message' => 'Employee Register Added Successfully',
            ]);
        //}
    }

    public function edit($id)
    {

        $employee = Register::find($id);

        return response()->json([
            'status' => 200,
            'employees' => $employee,
        ]);
    }

    public function update(Request $req, $id)
    {

        $emp = Register::find($id);

        $emp->username = $req->input('username');
        $emp->name = $req->input('name');
        $emp->phone = $req->input('phone');
        $emp->password = $req->input('password');

        $emp->update();

        return response()->json([
            'status' => 200,
            'message' => 'Employee Update Successfully',
        ]);
    }

    public function destroy($id)
    {

        $student = Register::find($id);
        $student->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Employee Delete Successfully',
        ]);
    }
}
