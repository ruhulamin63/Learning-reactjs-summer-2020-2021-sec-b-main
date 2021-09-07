<?php

namespace App\Http\Controllers;
use App\Models\Officer;
use Illuminate\Support\Facades\DB; //Import query builser 

use Illuminate\Http\Request;

class OfficerController extends Controller
{
    public function index()
    {
        $profile= Officer::all(); 

        return response()->json([
            'status' => 200,
            'profiles' => $profile
        ]);
    }
    // ============================ End Insert ====================================

    public function edit($id){

        $profile= Officer::find($id);

        return response()->json([
            'status' => 200,
            'profiles' => $profile,
        ]);
    }
// ============================ End Edit ====================================

    public function update(Request $req,$id)
    {
        $profile = Officer::find($id);
        
        $profile->name = $req->input('name');
        $profile->email = $req->input('email');
        $profile->phone = $req->input('phone');
        $profile->nid = $req->input('nid');
        $profile->dob = $req->input('dob');
        $profile->type = $req->input('type');

        $profile->update();

        return response()->json([
            'status' => 200,
            'message' => 'Profile Update Successfully',
        ]);
    }

// ============================ End Update ====================================

    public function editPassword($id)
    {
        $changePassword= Officer::find($id);

        return response()->json([
            'status' => 200,
            'passwords' => $changePassword,
        ]);
    }

    public function updatePassword(Request $req, $id)
    {
        $updatePassword = Officer::find($id);

        if($updatePassword->password == $req->current_password){

            if($req->current_password != $req->new_password){

                if($req->new_password==$req->re_password){

                    $updatePassword->password = $req->new_password;

                    $updatePassword->update();
        
                    return response()->json([
                        'status' => 200,
                        'passwords' => $updatePassword,
                        'message' => 'Password Update Successfully',
                    ]);
                }else{
                    return response()->json([
                        'status' => 420,
                        'message' => 'New password & re-password not match...!',
                    ]);
                }
            }else{
                return response()->json([
                    'status' => 420,
                    'message' => 'Please change old password ?',
                ]);
            }
        }else{
            return response()->json([
                'status' => 420,
                'message' => 'Current password not match...!',
            ]);
        }
    }
//=======================End Profile============================
}
