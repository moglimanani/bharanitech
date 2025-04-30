<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;

// Route::apiResource('login', LoginController::class);
// get all
Route::get('/login', [LoginController::class, 'index']); // GET /login

// create post
Route::post('/login', [LoginController::class, 'store']); // POST /login

// get by id
Route::get('/login/{id}', [LoginController::class, 'show']); // GET /login/{id}

Route::post('/login/checklogin', [LoginController::class, 'checkLogin']); // GET /login/{id}
// update by id
Route::put('/login/{id}', [LoginController::class, 'update']); // PUT /login/{id}

// delete by id
Route::delete('/login/{id}', [LoginController::class, 'destroy']); // DELETE /login/{id}

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
