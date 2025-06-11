<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class GalleryController extends Controller
{
    public function index()
    {
        try {
            // Retrieve all galleries with their related photos
            $galleries = Gallery::all();

            // Check if galleries are found
            if ($galleries->isEmpty()) {
                return response()->json(
                    [
                        'status' => true,
                        'message' => 'No galleries found.',
                        'data' => [],
                    ],
                    200,
                );
            }

            return response()->json(
                [
                    'status' => true,
                    'message' => 'Galleries retrieved successfully.',
                    'data' => $galleries,
                ],
                200,
            );
        } catch (\Exception $e) {
            return response()->json(
                [
                    'status' => false,
                    'message' => 'Error fetching galleries.',
                    'error' => $e->getMessage(),
                ],
                500,
            );
        }
    }
    // Store a new gallery
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'photos' => 'required|array',
            'photos.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Validate image files
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

        // Handle file uploads
        $photos = [];
        if ($request->hasFile('photos')) {
            foreach ($request->file('photos') as $photo) {
                $path = $photo->store('photos', 'public'); // Store in 'photos' directory inside the 'public' disk
                $photos[] = $path;
            }
        }

        $validatedData = $validator->validated();
        $validatedData['photos'] = $photos; // Save the file paths to the database

        $gallery = Gallery::create($validatedData);

        return response()->json([
            'status' => 'success',
            'data' => $gallery,
            'message' => 'Gallery created successfully.',
        ]);
    }

    // Get a single gallery by ID
    public function show($id)
    {
        $gallery = Gallery::find($id);

        if (!$gallery) {
            return response()->json(
                [
                    'status' => false,
                    'message' => 'Gallery not found.',
                ],
                404,
            );
        }

        return response()->json(
            [
                'status' => true,
                'message' => 'Gallery retrieved successfully.',
                'data' => $gallery,
            ],
            200,
        );
    }

    public function update(Request $request, $id)
    {
        $gallery = Gallery::find($id);
        if (!$gallery) {
            return response()->json(
                [
                    'status' => false,
                    'message' => 'Gallery not found.',
                ],
                404,
            );
        }

        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'photos.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'existingPhotos' => 'sometimes|array',
            'existingPhotos.*' => 'string',
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

        $validatedData = $validator->validated();

        // Step 1: Normalize existing gallery photos
        $currentPhotos = is_array($gallery->photos) ? $gallery->photos : json_decode($gallery->photos, true) ?? [];

        $finalPhotos = [];

        // Step 2: Clean and normalize input existingPhotos
        $existingPhotos = $request->input('existingPhotos', []);
        $existingPhotos = array_map(function ($url) {
            return str_replace([url('/storage/') . '/', url('/storage')], '', $url); // normalize
        }, $existingPhotos);

        // Step 3: Remove deleted photos
        foreach ($currentPhotos as $oldPhoto) {
            if (!in_array($oldPhoto, $existingPhotos)) {
                Storage::disk('public')->delete($oldPhoto);
            } else {
                $finalPhotos[] = $oldPhoto;
            }
        }

        // Step 4: Add new photo uploads
        if ($request->hasFile('photos')) {
            foreach ($request->file('photos') as $photo) {
                $path = $photo->store('photos', 'public');
                $finalPhotos[] = $path;
            }
        }
        $validatedData['photos'] = $finalPhotos;

        $gallery->update($validatedData);

        return response()->json([
            'status' => true,
            'message' => 'Gallery updated successfully.',
            'data' => $gallery,
        ]);
    }

    // Delete a gallery by ID
    public function destroy($id)
    {
        $gallery = Gallery::find($id);

        if (!$gallery) {
            return response()->json(
                [
                    'status' => true,
                    'message' => 'Gallery not found.',
                ],
                200,
            );
        }

        // Delete associated photo files from storage
        foreach ($gallery->photos as $photo) {
            if (Storage::disk('public')->exists($photo)) {
                Storage::disk('public')->delete($photo);
            }
        }

        // Delete the gallery record
        $gallery->delete();

        return response()->json([
            'status' => true,
            'message' => 'Gallery deleted successfully.',
        ]);
    }
}
