<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\YoutubeCategory;
use Illuminate\Http\JsonResponse;

class YoutubeCategoryController extends Controller
{
    public function index(): JsonResponse
    {
        $categories = YoutubeCategory::all();

        return response()->json([
            'status' => true,
            'message' => 'YouTube categories retrieved successfully.',
            'data' => $categories
        ]);
    }
}
