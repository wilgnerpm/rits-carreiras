<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('sigin', 'SessionController@login');
Route::post('signup', 'UserController@store');
Route::post('candidato', 'CandidatoController@store');

Route::group(['prefix' => 'admin','middleware' => 'auth.jwt'], function () {
    Route::get('carreira', 'CarreiraController@index');
    Route::get('carreira/{id}', 'CarreiraController@show');
    Route::post('carreira', 'CarreiraController@store');
    Route::put('carreira/{id}', 'CarreiraController@update');
    Route::delete('carreira/{id}', 'CarreiraController@destroy');
    
       Route::get('candidato/{id}', 'CandidatoController@show');
    
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
