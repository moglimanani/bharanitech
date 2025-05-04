<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Training;
use App\Http\Resources\TrainingResource;
use Illuminate\Support\Facades\Validator;

class TrainingController extends Controller
{
    public function index()
    {
        $trainings = Training::latest()->get();

        return response()->json([
            'status' => true,
            'data' => TrainingResource::collection($trainings),
            'message' => 'Trainings retrieved successfully'
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255|unique:trainings',
            'description' => 'nullable|string',
            'trainer_name' => 'nullable|string|max:255',
            'duration_minutes' => 'nullable|integer|min:1',
            'date' => 'nullable|date',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'data' => null,
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        $training = Training::create($validator->validated());

        return response()->json([
            'status' => true,
            'data' => new TrainingResource($training),
            'message' => 'Training created successfully'
        ], 201);
    }

    public function show($id)
    {
        $training = Training::find($id);

        if (!$training) {
            return response()->json([
                'status' => false,
                'data' => null,
                'message' => 'Training not found'
            ], 200);
        }

        return response()->json([
            'status' => true,
            'data' => new TrainingResource($training),
            'message' => 'Training retrieved successfully'
        ]);
    }

    public function update(Request $request, $id)
    {
        $training = Training::find($id);

        if (!$training) {
            return response()->json([
                'status' => false,
                'data' => null,
                'message' => 'Training not found'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'trainer_name' => 'nullable|string|max:255',
            'duration_minutes' => 'nullable|integer|min:1',
            'date' => 'nullable|date',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'data' => null,
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        $training->update($validator->validated());

        return response()->json([
            'status' => true,
            'data' => new TrainingResource($training),
            'message' => 'Training updated successfully'
        ]);
    }

    public function destroy($id)
    {
        $training = Training::find($id);

        if (!$training) {
            return response()->json([
                'status' => false,
                'data' => null,
                'message' => 'Training not found'
            ], 404);
        }

        $training->delete();

        return response()->json([
            'status' => true,
            'data' => null,
            'message' => 'Training deleted successfully'
        ]);
    }
}
