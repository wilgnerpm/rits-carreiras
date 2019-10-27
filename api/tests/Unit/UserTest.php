<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class UserTest extends TestCase
{

use DatabaseTransactions;

     public function teste_de_cadastro_usuario()
    {
   $response = $this->postJson('/api/signup', ['name' => 'User test', 'email'=>'teste@teste.com.br', 'password'=>'123123123']);
$response->assertStatus(200)
            ->assertJson([
                'success' => true,
            ]);
}
 public function teste_login_para_dashboard()
    {
   $response = $this->postJson('/api/sigin', ['email'=>'wilgnerp@hotmail.com', 'password'=>'123123123']);
$response->assertStatus(200)
            ->assertJson([
                'success' => true,
            ]);
}
}
