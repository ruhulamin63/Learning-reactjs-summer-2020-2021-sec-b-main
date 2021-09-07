<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class CustomerstransactionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('customerstransactions')->insert([
            'email' => 'joy@gmail.com.',
            'phone' => '01749549840',
            'transaction_type' => 'Add Money',
            'amount' => '50000',
            'balance' => '50000',
            'date' => now(),
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
