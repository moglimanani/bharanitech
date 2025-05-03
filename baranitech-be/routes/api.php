<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginUserController;

// Route::apiResource('login', LoginController::class);
// get all
Route::get('/login', [LoginUserController::class, 'index']); // GET /login

// create post
Route::post('/login', [LoginUserController::class, 'store']); // POST /login

// get by id
Route::get('/login/{id}', [LoginUserController::class, 'show']); // GET /login/{id}

Route::post('/login/checklogin', [LoginUserController::class, 'checkLogin']); // GET /login/{id}
// update by id
Route::put('/login/{id}', [LoginUserController::class, 'update']); // PUT /login/{id}

// delete by id
Route::delete('/login/{id}', [LoginUserController::class, 'destroy']); // DELETE /login/{id}

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
