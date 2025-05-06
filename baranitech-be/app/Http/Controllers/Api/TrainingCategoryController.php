<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

use App\Models\TrainingCategory;
use Illuminate\Http\Request;

class TrainingCategoryController extends Controller
{
    public function index()
    {
        $categories = TrainingCategory::all();

        return response()->json([
            'status' => 'success',
            'data' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'title' => 'required|string|max:255|unique:training_categories,title',
                'description' => 'nullable|string',
            ]);

            if ($validator->fails()) {
                return response()->json(
                    [
                        'status' => false,
                        'message' => 'Validation failed.',
                        'errors' => $validator->errors(),
                    ],
                    422,
                );
            }

            $category = TrainingCategory::create($validator->validated());
            // Check if description is provided, otherwise set to null
            if (!isset($category['description'])) {
                $category['description'] = null; // explicitly set to null if not provided
            }

            return response()->json([
                'status' => true,
                'data' => $category,
                'message' => 'Training category created successfully.',
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json(
                [
                    'success' => false,
                    'message' => 'Job not found.',
                ],
                404,
            );
        } catch (\Exception $e) {
            return response()->json(
                [
                    'status' => false,
                    'message' => 'An unexpected error occurred.',
                    'error' => $e->getMessage(),
                ],
                500,
            );
        }
    }

    public function show($id)
    {
        $category = TrainingCategory::find($id);

        if (!$category) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Training category not found.',
                ],
                404,
            );
        }

        return response()->json([
            'status' => 'success',
            'data' => $category,
        ]);
    }

    public function update(Request $request, $id)
    {
        $category = TrainingCategory::find($id);

        if (!$category) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Training category not found.',
                ],
                404,
            );
        }

        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $category->update($validated);

        return response()->json([
            'status' => 'success',
            'data' => $category,
            'message' => 'Training category updated successfully.',
        ]);
    }

    public function destroy($id)
    {
        $category = TrainingCategory::find($id);

        if (!$category) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Training category not found.',
                ],
                404,
            );
        }

        $category->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Training category deleted successfully.',
        ]);
    }
}
