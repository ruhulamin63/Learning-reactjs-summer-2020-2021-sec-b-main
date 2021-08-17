<?php

namespace App\Http\Controllers;
use App\Models\Officer;
use Illuminate\Support\Facades\DB; //Import query builser 

use Illuminate\Http\Request;

class ProfileController extends Controller
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

}
