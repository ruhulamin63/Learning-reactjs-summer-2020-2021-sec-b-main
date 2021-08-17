<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class LoginusersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('loginusers')->insert([
            'id' => 1,
            'email' => 'joy@gmail.com',
            'type' => 'customer',
            'password' => '1234567',
            'phone' => '01749569840',
            'nid' => '0215561321',
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('loginusers')->insert([
            'id' => 2,
            'email' => 'Borno@gmail.com',
            'phone' => '01749449840',
            'nid' => '021556231321',
            'type' => 'agent',
            'password' => '12345678',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        
        DB::table('loginusers')->insert([
            'id' => 3,
            'email' => 'shahrearfaiyaz@gmail.com',
            'type' => 'admin',
            'password' => '12345678',
            'phone' => '01749549840',
            'nid' => '021556231322',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('loginusers')->insert([
            'id' => 4,
            'email' => 'raridoy@gmail.com',
            'type' => 'officer',
            'password' => 'needhelp',
            'phone' => '01743369163',
            'nid' => '3453453453',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        
    }
}
