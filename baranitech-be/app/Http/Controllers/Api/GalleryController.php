<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    // Store a new gallery
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'photos' => 'required|array',
            'photos.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Validate image files
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation failed.',
                'errors' => $validator->errors(),
            ], 422);
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

    // Update a gallery by ID
    public function update(Request $request, $id)
    {
        $gallery = Gallery::find($id);

        if (!$gallery) {
            return response()->json([
                'status' => false,
                'message' => 'Gallery not found.',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'photos' => 'sometimes|required|array',
            'photos.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Validate image files
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation failed.',
                'errors' => $validator->errors(),
            ], 422);
        }

        // Handle file uploads (if any)
        $photos = $gallery->photos;
        if ($request->hasFile('photos')) {
            // Delete old photos from storage
            foreach ($photos as $photo) {
                Storage::disk('public')->delete($photo); // Delete old photos
            }

            // Store new photos
            $photos = [];
            foreach ($request->file('photos') as $photo) {
                $path = $photo->store('photos', 'public'); // Store in 'photos' directory inside the 'public' disk
                $photos[] = $path;
            }
        }

        $validatedData = $validator->validated();
        $validatedData['photos'] = $photos; // Save the new file paths

        $gallery->update($validatedData);

        return response()->json([
            'status' => 'success',
            'data' => $gallery,
            'message' => 'Gallery updated successfully.',
        ]);
    }
}
