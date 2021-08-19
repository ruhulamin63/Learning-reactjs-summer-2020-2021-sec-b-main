<?php

namespace App\Http\Controllers;

use App\Models\Officer;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; //Import query builser 
use Barryvdh\DomPDF\Facade as PDF;

class PdfController extends Controller
{
    public function pdf($id){

        $user = Officer::find($id); // Model Query

        $pdf = PDF::loadView('pages.officer.pdf.invoice',compact('user'));
        return $pdf->download('info.pdf');

        //return view('pages.officer.pdf.invoice')->with('user',$user);
    }
}
