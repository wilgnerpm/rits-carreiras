<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class UserTest extends TestCase
{

use DatabaseTransactions;

     public function testSignUp()
    {
   $response = $this->postJson('/api/signup', ['name' => 'User test', 'email'=>'teste@teste.com.br', 'password'=>'123123123']);
$response->assertStatus(200)
            ->assertJson([
                'success' => true,
            ]);
}
 public function testSignIn()
    {
   $response = $this->postJson('/api/sigin', ['email'=>'wilgnerp@hotmail.com.br', 'password'=>'123123123']);
$response->assertStatus(200)
            ->assertJson([
                'token_type' => 'bearer',
            ]);
}
}
