<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class UserTest extends TestCase {

    use DatabaseTransactions;

    public function testIndex() {
        $response = $this->getJson('/api/admin/carreira', []);
        $response->assertStatus(200)
                ->assertJson([
                    'success' => true,
        ]);
    }
    public function testStore() {
        $response = $this->postJson('/api/admin/carreira', ['carreira' => 'Teste 1', 'localizacao' => 'Teste - TS, Teste ', 'open' => 'true']);
        $response->assertStatus(200)
                ->assertJson([
                      'success' => true,
        ]);
    }
     public function testUpdate() {
        $response = $this->putJson('/api/admin/carreira/1', ['carreira' => 'Teste 1 Updte', 'localizacao' => 'Teste - TS, Teste ', 'open' => 'true']);
        $response->assertStatus(200)
                ->assertJson([
                      'success' => true,
        ]);
    }
 public function testDelete() {
        $response = $this->deleteJson('/api/admin/carreira/1', );
        $response->assertStatus(200)
                ->assertJson([
                      'success' => true,
        ]);
    }
}
