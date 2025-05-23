<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginUserController;
use App\Http\Controllers\Api\YoutubeUrlController;
use App\Http\Controllers\Api\YouTubeCategoryController;
use App\Http\Controllers\Api\JobCategoryController;
use App\Http\Controllers\Api\JobController;
use App\Http\Controllers\Api\TrainingController;
use App\Http\Controllers\Api\TrainingCategoryController;
use App\Http\Controllers\Api\RegisterTrainingController;
use App\Http\Controllers\Api\GalleryController;
use App\Http\Controllers\Api\ContactController;

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

// GET /api/youtube - List all YouTube URLs
Route::get('youtube', [YoutubeUrlController::class, 'index']);

// POST /api/youtube - Store a new YouTube URL
Route::post('youtube', [YoutubeUrlController::class, 'store']);

// GET /api/youtube/{id} - Show a specific YouTube URL
Route::get('youtube/{id}', [YoutubeUrlController::class, 'show']);

// PUT or PATCH /api/youtube/{id} - Update a YouTube URL
Route::put('youtube/{id}', [YoutubeUrlController::class, 'update']);
Route::patch('youtube/{id}', [YoutubeUrlController::class, 'update']);

// DELETE /api/youtube/{id} - Delete a YouTube URL
Route::delete('youtube/{id}', [YoutubeUrlController::class, 'destroy']);

Route::get('youtube-categories', [YouTubeCategoryController::class, 'index']);

Route::get('trainings', [TrainingController::class, 'index']);
Route::post('trainings', [TrainingController::class, 'store']);
Route::get('trainings/{id}', [TrainingController::class, 'show']);
Route::put('trainings/{id}', [TrainingController::class, 'update']);
Route::patch('trainings/{id}', [TrainingController::class, 'update']);
Route::delete('trainings/{id}', [TrainingController::class, 'destroy']);

Route::get('/job-categories', [JobCategoryController::class, 'index']);
Route::get('/job-categories/{id}', [JobCategoryController::class, 'show']);
Route::get('/jobs', [JobController::class, 'index']);
Route::post('/jobs', [JobController::class, 'store']);
Route::get('/jobs/{id}', [JobController::class, 'show']);
Route::put('/jobs/{id}', [JobController::class, 'update']);
Route::delete('/jobs/{id}', [JobController::class, 'destroy']);

// Training Category Routes
Route::get('/training-categories', [TrainingCategoryController::class, 'index']);
Route::post('/training-categories', [TrainingCategoryController::class, 'store']);
Route::get('/training-categories/{id}', [TrainingCategoryController::class, 'show']);
Route::put('/training-categories/{id}', [TrainingCategoryController::class, 'update']);
Route::delete('/training-categories/{id}', [TrainingCategoryController::class, 'destroy']);

// Training Routes
Route::get('/trainings', [TrainingController::class, 'index']);
Route::post('/trainings', [TrainingController::class, 'store']);
Route::get('/trainings/{id}', [TrainingController::class, 'show']);
Route::put('/trainings/{id}', [TrainingController::class, 'update']);
Route::delete('/trainings/{id}', [TrainingController::class, 'destroy']);

// Store a new registration
Route::post('register-training', [RegisterTrainingController::class, 'store']);

// List all registrations
Route::get('register-training', [RegisterTrainingController::class, 'index']);

// Show a specific registration by ID
Route::get('register-training/{id}', [RegisterTrainingController::class, 'show']);

// Update a specific registration by ID
Route::put('register-training/{id}', [RegisterTrainingController::class, 'update']);

// Delete a specific registration by ID
Route::delete('register-training/{id}', [RegisterTrainingController::class, 'destroy']);

Route::post('/gallery', [GalleryController::class, 'store']); // Create gallery
Route::get('/gallery', [GalleryController::class, 'index']); // Get all galleries
Route::get('/gallery/{id}', [GalleryController::class, 'show']); // Get single gallery by ID
Route::put('/gallery/{id}', [GalleryController::class, 'update']); // Update gallery by ID
Route::delete('/gallery/{id}', [GalleryController::class, 'destroy']);

Route::post('/contact', [ContactController::class, 'store']);
Route::get('/contact', [ContactController::class, 'index']);
