<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class CarreiraTest extends TestCase {

    use DatabaseTransactions;
  public $token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9zaWdpbiIsImlhdCI6MTU3MjIxMDM2MywiZXhwIjoxNTcyMjE3NTYzLCJuYmYiOjE1NzIyMTAzNjMsImp0aSI6IlROcFd5dzdBMDZNWTNBc1YiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.TXoyAYjPCs3mC4jBsveGb1XUEbS9S73swktSmGTjcPg";

    public function test_retorno_carreiras() {
        $response = $this->withHeaders([
            'Authorization' => $this->token,
        ])->getJson('/api/admin/carreira', []);
   
        $response->assertStatus(200)
                ->assertJson([
                    'success' => true,
        ]);
    }
    public function test_cadastro_nova_carreira() {
        $response = $this->withHeaders([
            'Authorization' => $this->token,
        ])->postJson('/api/admin/carreira', ['carreira' => 'Teste 1', 'localizacao' => 'Teste - TS, Teste ', 'open' => 'true']);
       
        $response->assertStatus(200)
                ->assertJson([
                      'success' => true,
        ]);
    }
     public function teste_atualizacao_carreira() {
        $response = $this->withHeaders([
            'Authorization' =>$this->token,
        ])->getJson('/api/admin/carreira/1', ['carreira' => 'Teste 1 Updte', 'localizacao' => 'Teste - TS, Teste ', 'open' => 'true']);
        $response->assertStatus(200)
                ->assertJson([
                      'success' => true,
        ]);
    }

}
