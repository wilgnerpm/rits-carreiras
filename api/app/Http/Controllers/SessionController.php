<?php

namespace App\Http\Controllers;
use JWTAuth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class SessionController extends Controller
{
   public function login()
    {
        $credentials = request(['email', 'password']);
       $jwt_token = null;
 
        if (!$jwt_token = JWTAuth::attempt($credentials)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid Email or Password',
            ], 401);
        }
        return response()->json([
            'success' => true,
            'user' =>  \App\User::where('email', request('email'))->get(),
            'token' => $jwt_token,
        ]);
    }

}
