<?php

namespace App\Http\Controllers;
use App\Models\Officer;
use App\Models\Agentstransactions;
use App\Models\Agent;
use Illuminate\Support\Facades\DB; //Import query builser 

use Illuminate\Http\Request;

class AgentController extends Controller
{
    public function index()
    {
        $agent= Agent::all(); //change Officer to (Agent)->tablename

        //$users = Officer::orderBy('id','DESC')->get(); //change Officer to (Agent)->tablename

        return response()->json([
            'status' => 200,
            'agents' => $agent
        ]);
    }
    // ============================ End Insert ====================================

    public function edit($id){

        $agent= Agent::find($id);

        if ($agent) {
            return response()->json([
                'status' => 200,
                'agents' => $agent,
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No agent Id Found',
            ]);
        }
    }
// ============================ End Edit ====================================

    public function update(Request $req,$id)
    {
        $agent = Agent::find($id);
        
        $agent->phone = $req->input('phone');
        $agent->nid = $req->input('nid');
        $agent->dob = $req->input('dob');
        $agent->type = $req->input('type');

        $agent->update();

        return response()->json([
            'status' => 200,
            'message' => 'Agent Update Successfully',
        ]);
    }

//===========================Officer get transaction for customer=================================

    public function view()
    {
        $agent= Agentstransactions::all(); //change Officer to (Customer)->tablename

        //$users = Officer::orderBy('id','DESC')->get(); //change Officer to (Agent)->tablename

        return response()->json([
            'status' => 200,
            'agents' => $agent
        ]);
    }
// ============================ End Destroy ====================================
}
