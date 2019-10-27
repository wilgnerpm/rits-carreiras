<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CarreiraPublicController extends Controller
{
   public function index() {
       $carreiras = \App\Carreira::where('open',true)->get();
       if ($carreiras) {
            return response()->json([
                        'success' => true,
                        'carreiras' => $carreiras
            ]);
        } else {
            return response()->json([
                        'success' => false,
                        'message' => 'Sorry, carreiras not'
                            ], 500);
        };
        
    }
}
