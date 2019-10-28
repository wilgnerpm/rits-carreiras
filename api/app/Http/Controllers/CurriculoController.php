<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
class CurriculoController extends Controller
{
    public function show($id) {
        $candidato = \App\Candidato::find($id);
       return Storage::download($candidato->file);
    }
}
