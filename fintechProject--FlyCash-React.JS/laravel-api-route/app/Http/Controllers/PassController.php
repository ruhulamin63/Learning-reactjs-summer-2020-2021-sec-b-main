<?php

namespace App\Http\Controllers;
use App\Models\Officer;
use Illuminate\Support\Facades\DB; //Import query builser 

use Illuminate\Http\Request;

class PassController extends Controller
{

    public function edit($id)
    {
        $pass= Officer::find($id);

        if ($pass) {
            return response()->json([
                'status' => 200,
                'officers' => $pass,
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No profile Id Found',
            ]);
        }
    }

    public function update(Request $req,$id)
    {
        $pass = Officer::find($id);
        
        if($pass->password==$req->current_password){

            if($req->new_password==$req->re_password){

                $pass->password = $req->new_password;

                $pass->update();

                return response()->json([
                    'status'=>200,
                    'message'=>'Password Updated Successfully',
                ]);
            }else{

                return response()->json([
                    'status'=>404,
                    'message'=>'New Password & Re-Password Mismatch !',
                ]);
            }
        }else{

            return response()->json([
                'status'=>404,
                'message'=>'Current Password Not Match !',
            ]);
        }
    }
}
