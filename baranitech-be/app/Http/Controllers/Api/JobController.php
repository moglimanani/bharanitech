<?php

// app/Http/Controllers/Api/JobController.php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Job;
use App\Models\JobCategory;
use App\Http\Resources\JobResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class JobController extends Controller
{
    public function index()
    {
        $jobs = Job::with('category')->get();
        return JobResource::collection($jobs);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'type' => 'required|exists:job_categories,id',
            'title' => 'required|string|max:255',
            'total_vacancy' => 'required|integer',
            'city' => 'required|string',
            'state' => 'required|string',
            'country' => 'required|string',
            'company' => 'required|string',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $job = Job::create($request->all());
        return new JobResource($job);
    }

    public function show($id)
    {
        // $job = Job::with('category')->findOrFail($id);
        // return new JobResource($job);
        try {
            $job = Job::findOrFail($id);
            return response()->json(['success' => true, 'data' => $job]);
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
                    'success' => false,
                    'message' => 'No data present.',
                ],
                200,
            );
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $job = Job::findOrFail($id);

            $validator = Validator::make($request->all(), [
                'type' => 'nullable|exists:job_categories,id',
                'title' => 'nullable|string|max:255',
                'total_vacancy' => 'nullable|integer',
                'city' => 'nullable|string',
                'state' => 'nullable|string',
                'country' => 'nullable|string',
                'company' => 'nullable|string',
                'description' => 'nullable|string',
            ]);

            if ($validator->fails()) {
                // return response()->json($validator->errors(), 422);
                return response()->json([
                'status' => false,
                'data' => null,
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
            }

            $job->update($request->all());
            return new JobResource($job);
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
                    'success' => false,
                    'message' => 'No data present.',
                ],
                200,
            );
        }
    }

    public function destroy($id)
    {
        try {
            $job = Job::findOrFail($id);
            $job->delete();
            return response()->json(['success' => true, 'message' => 'Job deleted successfully.'], 200);
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
                    'success' => false,
                    'message' => 'No data present.',
                ],
                200,
            );
        }
    }
}
