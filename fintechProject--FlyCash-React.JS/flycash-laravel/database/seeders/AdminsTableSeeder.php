<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
// use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;



class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admins')->insert([
            'id' => 3,
            'name' => 'Faiyaz Shahrear',
            'email' => 'shahrearfaiyaz@gmail.com',
            'nid' => '021556231322',
            'phone' => '01749549840',
            'profit' => '500',
            'dob' => '11-1-1995',
            'type' => 'admin',
           
            


            'password' => '12345678',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
