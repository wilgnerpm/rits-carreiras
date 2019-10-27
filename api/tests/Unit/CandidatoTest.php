<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
class CandidatoTest extends TestCase {

    use DatabaseTransactions;
  public $token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9zaWdpbiIsImlhdCI6MTU3MjIxMDM2MywiZXhwIjoxNTcyMjE3NTYzLCJuYmYiOjE1NzIyMTAzNjMsImp0aSI6IlROcFd5dzdBMDZNWTNBc1YiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.TXoyAYjPCs3mC4jBsveGb1XUEbS9S73swktSmGTjcPg";

    public function teste_salvar_candidato_na_vaga() {
        Storage::fake('curriculo');
        $file = UploadedFile::fake()->image('curriculo.pdf');
        
        $response = $this->postJson('/api/candidato',
                ['carreira_id' => 1,
                 'email' => 'User test',
                    'nome_completo' => 'User test',
                    'telefone' => 'User test',
                    'resumo' => 'User test',
                    'linkedin' => 'User test',
                    'github' => 'User test',
                    'nivel_ingles' => 'User test',
                    'salario' => 'User test',
                     'file' => $file,
        ]);
      
        $response->assertStatus(200)
                ->assertJson([
                    'success' => true,
        ]);
    }

    public function teste_classificar_candidato_a_vaga() {
        $response = $this->withHeaders([
            'Authorization' => $this->token,
        ])->putJson('/api/admin/candidato/5', ['classificado' => 'true', ]);
        $response->assertStatus(200)
                ->assertJson([
                    'success' => true,
        ]);
    }
    
 public function teste_ver_informacoes_do_candidato_a_carreira() {
        $response = $this->withHeaders([
            'Authorization' => $this->token,
        ])->getJson('/api/admin/candidato/4');
        
  
        $response->assertStatus(200)
                ->assertJson([
                    'success' => true,
        ]);
    }

}
