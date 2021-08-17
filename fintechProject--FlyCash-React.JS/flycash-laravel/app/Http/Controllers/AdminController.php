<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Display a listing of the users
     *
     * @param  \App\Models\User  $model
     * @return \Illuminate\View\View
     */
    public function addagent()
    {
        return view('pages.admin.agent.addagent');
    }
    public function editagent()
    {
        return view('pages.admin.agent.editagent');
    }
    public function agenttransaction()
    {
        return view('pages.admin.agent.agenttransaction');
    }
    public function chatagent()
    {
        return view('pages.admin.agent.chatagent');
    }
    public function blockagent()
    {
        return view('pages.admin.agent.blockagent');
    }
    public function addagentmoney()
    {
        return view('pages.admin.agent.addagentmoney');
    }
   
    public function addcampaign()
    {
        return view('pages.admin.campaign.addcampaign');
    }
    public function ongoingcampaign()
    {
        return view('pages.admin.campaign.ongoingcampaign');
    }
    
    public function removecampaign()
    {
        return view('pages.admin.campaign.removecampaign');
    }
    public function addofficer()
    {
        return view('pages.admin.officer.addofficer');
    }
    public function editofficer()
    {
        return view('pages.admin.officer.editofficer');
    }
    public function chatofficer()
    {
        return view('pages.admin.officer.chatofficer');
    }
    public function adduser()
    {
        return view('pages.admin.user.adduser');
    }
    public function edituser()
    {
        return view('pages.admin.user.edituser');
    }
    public function transaction()
    {
        return view('pages.admin.user.transaction');
    }
    public function discount()
    {
        return view('pages.admin.user.discount');
    }
    public function blockuser()
    {
        return view('pages.admin.user.blockuser');
    }
}
