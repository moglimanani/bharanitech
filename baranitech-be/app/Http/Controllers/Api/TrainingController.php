<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Training;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class TrainingController extends Controller
{
    public function index()
    {
        $trainings = Training::with('category')->get();

        return response()->json([
            'status' => 'success',
            'data' => $trainings,
        ]);
    }

    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'title' => 'required|string|max:255',
                'description' => 'nullable|string',
                'type' => 'required|exists:training_categories,id',
                'classification' => 'required|in:0,1',
                'startdate' => 'required|date',
                'enddate' => 'date|after_or_equal:startdate',
                'location' => 'nullable|string',
                'total_hours' => 'nullable|numeric',
                'city' => 'nullable|string',
                'state' => 'nullable|string',
                'country' => 'nullable|string',
                'table_of_contents' => 'nullable|string',
                'total_price' => 'nullable|numeric',
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

            $validated = $validator->validated();

            // Use Carbon to format the dates
            $validated['startdate'] = Carbon::parse($validated['startdate'])->format('Y-m-d H:i:s');
            if (isset($validated['enddate'])) {
                $validated['enddate'] = Carbon::parse($validated['enddate'])->format('Y-m-d H:i:s');
            }

            // $training = Training::create($validator)->load('category');
            $training = Training::create($validated)->load('category');

            return response()->json([
                'status' => 'success',
                'data' => $training,
                'message' => 'Training created successfully.',
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
        $training = Training::with('category')->find($id);

        if (!$training) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Training not found.',
                ],
                404,
            );
        }

        return response()->json([
            'status' => 'success',
            'data' => $training,
        ]);
    }

    public function update(Request $request, $id)
    {
        $training = Training::find($id);

        if (!$training) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Training not found.',
                ],
                404,
            );
        }

        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'type' => 'sometimes|required|exists:training_categories,id',
            'classification' => 'sometimes|required|in:0,1',
            'startdate' => 'sometimes|required|date',
            'enddate' => 'sometimes|required|date|after_or_equal:startdate',
            'location' => 'nullable|string',
            'total_hours' => 'nullable|numeric',
            'city' => 'nullable|string',
            'state' => 'nullable|string',
            'country' => 'nullable|string',
            'table_of_contents' => 'nullable|string',
            'total_price' => 'nullable|numeric',
        ]);

        $training->update($validated);

        return response()->json([
            'status' => 'success',
            'data' => $training->load('category'),
            'message' => 'Training updated successfully.',
        ]);
    }

    public function destroy($id)
    {
        $training = Training::find($id);

        if (!$training) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Training not found.',
                ],
                404,
            );
        }

        $training->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Training deleted successfully.',
        ]);
    }
}
