<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; //Import query builser

class OfficersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('officers')->insert([
            'id' => 1,
            'name' => 'Ruhul Amin',
            'email' => 'raridoy@gmail.com',
            'nid' => '3453453453',
            'phone' => '01743369163',
            'dob' => '05-02-1998',
            'type' => 'officer',
            'password' => 'needhelp',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
