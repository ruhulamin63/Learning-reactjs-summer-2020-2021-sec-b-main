<?php

namespace App\Http\Controllers;
use App\Models\Officer;
use Illuminate\Support\Facades\DB; //Import query builser 

use Illuminate\Http\Request;

class PassController extends Controller
{
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

        $updatePassword->update();
        
        return response()->json([
            'status' => 200,
            'passwords' => $updatePassword,
            'message' => 'Password Update Successfully',
        ]);
    }
}
