<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CarreiraController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
       $carreiras = \App\Carreira::all();
       if ($carreiras) {
            return response()->json([
                        'success' => true,
                        'carreiras' => $carreiras
            ]);
        } else {
            return response()->json([
                        'success' => false,
                        'message' => 'Sorry, carreira could not be added'
                            ], 500);
        };
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $this->validate($request, [
            'carreira' => 'required',
            'localizacao' => 'required',
        ]);
        $carreira= \App\Carreira::create($request->all());
        if ($carreira) {
            return response()->json([
                        'success' => true,
                        'carreira' => $carreira
            ]);
        } else {
            return response()->json([
                        'success' => false,
                        'message' => 'Sorry, carreira could not be added'
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
        $carreira = \App\Carreira::with('candidato')->where('id', $id)->get();
         if ($carreira) {
            return response()->json([
                        'success' => true,
                        'carreira' => $carreira
            ]);
        } else {
            return response()->json([
                        'success' => false,
                        'message' => 'Sorry, carreira could not be'
                            ], 500);
        };
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        $carreira = \App\Carreira::where('id', $id)->update($request->all());
   
        return response()->json([
                        'success' => true,
                        'carreira' => \App\Carreira::find($id)
            ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        $carreira = \App\Carreira::find($id)->delete();
         return response()->json([
                        'success' => true
  
            ]);
    }

}
