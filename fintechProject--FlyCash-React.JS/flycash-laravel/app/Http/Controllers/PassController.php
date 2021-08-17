<?php

namespace App\Http\Controllers;
use App\Models\Officer;
use Illuminate\Support\Facades\DB; //Import query builser 

use Illuminate\Http\Request;

class PassController extends Controller
{
    public function edit(Officer $email)
    {
        $users= Officer::find($email);

        return view('pages.officer.password.password_edit')->with('user', $users);
    }

    public function update(Request $req, Officer $email)
    {
        $users = Officer::find($email);
        
        if($users->password != $req->password){
            if($req->password==$req->password_confirmation){
                $users->password = $req->password;
            }
        }
  
        $users->save();

        return redirect()->route('password_update');
    }
}
