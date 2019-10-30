<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Wandeson Cunha',
            'email' => 'wandesoncunha@rits.com.br',
            'password' => bcrypt('admin123'),
            'admin' => 'true',
        ]);
    }
}
