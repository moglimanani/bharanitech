<?php

// app/Http/Controllers/Api/JobCategoryController.php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\JobCategory;
use App\Http\Resources\JobCategoryResource;

class JobCategoryController extends Controller
{
    public function index()
    {
        $categories = JobCategory::all();
        return JobCategoryResource::collection($categories);
    }

    public function show($id)
    {
        $category = JobCategory::findOrFail($id);
        return new JobCategoryResource($category);
    }
}
