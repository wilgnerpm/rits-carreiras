<?php

namespace App\Http\Controllers;
use JWTAuth;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class SessionController extends Controller
{
   public function login()
    {
        $credentials = request(['email', 'password']);
         if (! $token = Auth::guard('api')->attempt($credentials)) {
               return response()->json(['error' => 'Unauthorized'], 401);
        }
        return response()->json([
            'success' => true,
            'access_token' => $token,
            'token_type' => 'bearer',
            'user'=>auth()->user(),
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ]);
    }

}
