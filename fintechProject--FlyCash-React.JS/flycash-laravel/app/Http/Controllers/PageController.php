<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Customerstransaction;
use App\Models\Customer;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class PageController extends Controller
{
    /**
     * Display icons page
     *
     * @return \Illuminate\View\View
     */
    public function icons()
    {
        return view('pages.customer.icons');
    }

    /**
     * Display maps page
     *
     * @return \Illuminate\View\View
     */
    public function maps()
    {
        return view('pages.customer.maps');
    }

    /**
     * Display tables page
     *
     * @return \Illuminate\View\View
     */
    public function transactionlist(Request $req)
    {
        $email=$req->session()->get('email');
        // $transaction = Customerstransaction ::where('email',$email)
        // ->all();
        // $transaction = Customerstransaction ::find($email);
        $transaction=Customerstransaction::all();
        
        return view('pages.customer.transactionlist')->with('transaction',$transaction);
    }

    /**
     * Display notifications page
     *
     * @return \Illuminate\View\View
     */
    public function notifications()
    {
        return view('pages.customer.notifications');
    }

    /**
     * Display rtl page
     *
     * @return \Illuminate\View\View
     */
    public function rtl()
    {
        return view('pages.customer.rtl');
    }

    /**
     * Display typography page
     *
     * @return \Illuminate\View\View
     */
    public function typography()
    {
        return view('pages.customer.typography');
    }

    /**
     * Display upgrade page
     *
     * @return \Illuminate\View\View
     */
    public function upgrade()
    {
        return view('pages.customer.upgrade');
    }
}
