<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
class CandidatoController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
  

        $candidato = new \App\Candidato;
        $candidato->carreira_id = $request->carreira_id;
        $candidato->nome_completo = $request->nome_completo;
        $candidato->email = $request->email;
        $candidato->telefone = $request->telefone;
        $candidato->resumo = $request->resumo;
        $candidato->linkedin = $request->linkedin;
        $candidato->github = $request->github;
        $candidato->nivel_ingles = $request->nivel_ingles;
        $candidato->salario = $request->salario;
        $path = false;
         if ($request->hasFile('file') && $request->file('file')->isValid()) {
            $path = $request->file('file')->store('curriculos');
         }
        $candidato->file = $path;
        $candidato->classificado = 'open';
        $candidato->save();
        if ($candidato) {
            return response()->json([
                        'success' => true,
            ]);
        } else {
            return response()->json([
                        'success' => false,
                        'message' => 'Sorry, candidato could not be added'
                            ], 500);
        };
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        $candidato = \App\Candidato::find($id);
        if ($candidato) {
            return response()->json([
                        'success' => true,
                        'candidato' => $candidato,
            ]);
        } else {
            return response()->json([
                        'success' => false,
                        'message' => 'Sorry, candidato  not be '
                            ], 500);
        };
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
   

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        //
    }

}
