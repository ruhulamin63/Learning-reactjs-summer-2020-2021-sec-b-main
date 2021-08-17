<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
//use Illuminate\Support\Facades\Hash;

class AgentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('agents')->insert([
            'id' => 1,
            'name' => 'Borno',
            'email' => 'Borno@gmail.com',
            'nid' => '021556231321',
            'phone' => '01749549840',
            'balance' => '500',
            'dob' => '11-1-1995',
            'transaction_status'=>'1',
            'type' => 'agent',
            'password' => '12345678',
           
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
