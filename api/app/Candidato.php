<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Candidato extends Model
{
    protected $fillable = [
        'carreira_id', 'nome_completo', 'email', 'telefone', 'resumo', 'linkedin', 'github', 'nivel_ingles','salario','file',
    ];
    
}
