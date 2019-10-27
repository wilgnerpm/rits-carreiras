<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ClassificadoController extends Controller
{
 
 public function update(Request $request, $id) {
        $candidato = \App\Candidato::find($id);
        $candidato->classificado =$request->classificado;
        $candidato->save();
        if ($candidato) {
            return response()->json([
                        'success' => true,
                $candidato
            ]);
        } else {
            return response()->json([
                        'success' => false,
                        'message' => 'Sorry, candidato could not be added'
                            ], 500);
        };
    }
}
