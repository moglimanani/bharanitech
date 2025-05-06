<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\RegisterTraining;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RegisterTrainingController extends Controller
{
    // Store a new training registration
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_name' => 'required|string|max:255',
            'user_occupation' => 'required|string|max:255',
            'user_age' => 'required|integer',
            'user_phone' => 'required|string|max:15',
            'user_address' => 'required|string',
            'user_city' => 'required|string',
            'user_state' => 'required|string',
            'user_country' => 'required|string',
            'user_email' => 'required|email',
            'requirements' => 'nullable|string',
            'training_id' => 'required|exists:trainings,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation failed.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $validated = $validator->validated();

        $registerTraining = RegisterTraining::create($validated);

        return response()->json([
            'status' => 'success',
            'data' => $registerTraining,
            'message' => 'Training registration created successfully.',
        ]);
    }

    // Show all registrations
    public function index()
    {
        $registrations = RegisterTraining::all();

        return response()->json([
            'status' => 'success',
            'data' => $registrations,
        ]);
    }

    // Show a single registration by ID
    public function show($id)
    {
        $registration = RegisterTraining::find($id);

        if (!$registration) {
            return response()->json([
                'status' => false,
                'message' => 'Registration not found.',
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $registration,
        ]);
    }

    // Update a registration by ID
    public function update(Request $request, $id)
    {
        $registration = RegisterTraining::find($id);

        if (!$registration) {
            return response()->json([
                'status' => false,
                'message' => 'Registration not found.',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'user_name' => 'sometimes|required|string|max:255',
            'user_occupation' => 'sometimes|required|string|max:255',
            'user_age' => 'sometimes|required|integer',
            'user_phone' => 'sometimes|required|string|max:15',
            'user_address' => 'sometimes|required|string',
            'user_city' => 'sometimes|required|string',
            'user_state' => 'sometimes|required|string',
            'user_country' => 'sometimes|required|string',
            'user_email' => 'sometimes|required|email',
            'requirements' => 'nullable|string',
            'training_id' => 'sometimes|required|exists:trainings,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation failed.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $validated = $validator->validated();

        $registration->update($validated);

        return response()->json([
            'status' => 'success',
            'data' => $registration,
            'message' => 'Training registration updated successfully.',
        ]);
    }

    // Delete a registration by ID
    public function destroy($id)
    {
        $registration = RegisterTraining::find($id);

        if (!$registration) {
            return response()->json([
                'status' => false,
                'message' => 'Registration not found.',
            ], 404);
        }

        $registration->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Training registration deleted successfully.',
        ]);
    }
}
