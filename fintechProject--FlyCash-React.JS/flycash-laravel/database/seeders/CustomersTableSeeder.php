<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class CustomersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('customers')->insert([
            'id' => 1,
            'name' => 'joy',
            'email' => 'joy@gmail.com',
            'nid' => '0215561321',
            'phone' => '01749549840',
            'balance' => '5000',
            'dob' => '11-1-1995',
            'type' => 'customer',
            'transaction_status'=>'1',
            'password' => '1234567',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
