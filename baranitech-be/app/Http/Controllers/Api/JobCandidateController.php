<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\JobCandidate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class JobCandidateController extends Controller
{
    public function index()
    {
        $results =  JobCandidate::with('job.category')->latest()->get();
        return response()->json([
            'status' => 'success',
            'data' => $results,
        ]);
    }
    /**
     * Register a new job candidate.
     */
    public function register(Request $request)
    {
        // Validate the input fields
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|unique:job_candidates,email',
            'phone' => 'nullable|string|max:15',
            'job_id' => 'required|exists:jobs,id', // Ensure the job_id exists in the jobs table
            'occupation' => 'nullable|string|max:255', // Validate occupation
            'age' => 'nullable|integer|min:18|max:100', // Validate age
            'address' => 'nullable|string|max:255', // Validate address
            'city' => 'nullable|string|max:100', // Validate city
            'state' => 'nullable|string|max:100', // Validate state
            'country' => 'nullable|string|max:100', // Validate country
        ]);

        // If validation fails, return errors
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        // Create a new job candidate record
        $jobCandidate = JobCandidate::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'job_id' => $request->job_id,
            'occupation' => $request->occupation, // Occupation
            'age' => $request->age, // Age
            'address' => $request->address, // Address
            'city' => $request->city, // City
            'state' => $request->state, // State
            'country' => $request->country, // Country
        ]);

        // Eager load the associated job details
        $jobCandidate->load('job');

        // Return the success response
        return response()->json(
            [
                'message' => 'Job Candidate registered successfully!',
                'job_candidate' => $jobCandidate,
            ],
            201,
        );
    }
}
