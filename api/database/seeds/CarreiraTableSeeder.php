<?php

use Illuminate\Database\Seeder;

class CarreiraTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('carreiras')->insert([
            'carreira' => 'Desenvolvedor Frontend',
            'localizacao' => 'Natal - RN, Brasil',
            'open' =>  'true',
        ]);
        DB::table('carreiras')->insert([
            'carreira' => 'Desenvolvedor Backend',
            'localizacao' => 'Natal - RN, Brasil',
            'open' =>   'true',
        ]);
    }
}
