<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Officer;
use App\Models\Customer;
use App\Models\Customerstransaction;
use Validator;
use App\Http\Requests\EditProfileRequest;
use Illuminate\Support\Facades\DB; //Import query builser 

class CustomerController extends Controller
{
    public function show()
    {
        $customer= Customer::all(); //change Officer to (Customer)->tablename

        //$users = Officer::orderBy('id','DESC')->get(); //change Officer to (Agent)->tablename

        return response()->json([
            'status' => 200,
            'customers' => $customer
        ]);
    }
    // ============================ End Insert ====================================

    public function edit($id){

        $customer= Customer::find($id);

        if ($customer) {
            return response()->json([
                'status' => 200,
                'customers' => $customer,
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No customer Id Found',
            ]);
        }
    }
// ============================ End Edit ====================================

    public function update(Request $req, $id)
    {
        $customer = Customer::find($id);
        
        $customer->phone = $req->input('phone');
        $customer->nid = $req->input('nid');
        $customer->dob = $req->input('dob');
        $customer->type = $req->input('type');

        $customer->update();

        return response()->json([
            'status' => 200,
            'message' => 'Customer Update Successfully',
        ]);
    }

    // ============================ End Update ====================================

    public function delete($id){
  
        $users = Customer::find($id); //change model name
        
        return view('pages.officer.customer.delete')->with('user', $users);
    }
// ============================ End Delete ====================================

    public function destroy($id){

        $users = Customer::find($id);
        $users->delete();

         return redirect()->route('customer_delete');
    }
// ============================ End Destroy ====================================

//===========================Officer get transaction for customer=================================

    public function view()
    {
        $customer= Customerstransaction::all(); //change Officer to (Customer)->tablename

        //$users = Officer::orderBy('id','DESC')->get(); //change Officer to (Agent)->tablename

        return response()->json([
            'status' => 200,
            'customers' => $customer
        ]);
    }

//======================================End Officer Function========================================

    public function editCustomer(){

        return view('profile.edit');
    }
    public function editCustomerdone(){

        return view('profile.edit');


    }
    public function changeCustomerPassword(){

        return view('pages.customer.profile.passwordChange');
    }
    public function editCustomerProfile(){

        return view('pages.customer.profile.edit');
    }
    public function changeCustomerPasswordDone(EditProfileRequest $req){

        if ($req->session()->get('password')==$req-> old_password)
        {
            if ($req->password== $req->password_confirmation)
            {
                //dd($req);
                $email=$req->session()->get('email');
                $customer = Customer::where('email',$email)
                ->first();
                $customer->password = $req->password;
                $customer->save();
                return back()->with('msg','Password Changed') ;

            }else{
                return back()->with('msg','New password and confirm password does not match') ;
            }

        }else{
            return back()->with('msg','Current Password does not match') ;
                    
        }

    }
}
