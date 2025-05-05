<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\YoutubeUrl;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\YoutubeUrlResource;

class YoutubeUrlController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $fetchYoutubeUrls = YoutubeUrl::get();
        if ($fetchYoutubeUrls->count() > 0) {
            return YoutubeUrlResource::collection($fetchYoutubeUrls);
        } else {
            return response()->json(['data' => [], 'message' => 'No records available'], 200);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'url' => 'required|url|unique:youtube_urls',
                'title' => 'nullable|string|max:255',
                'description' => 'nullable|string',
                'type' => 'required|in:0,1', // Enum validation
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->messages(), 'status' => false, 'message' => 'All fields are mandatory'], 422);
            }

            $videoId = $this->extractYoutubeId($request->url);

            $video = YoutubeUrl::create([
                'title' => $request->title,
                'url' => $request->url,
                'video_id' => $videoId,
                'description' => $request->description,
                'type' => $request->type,
            ]);

            // return response()->json($video, 201);
            return response()->json(['data' => new YoutubeUrlResource($video), 'message' => 'Record added successfully'], 200);
        } catch (Exception $e) {
            return response()->json(
                [
                    'status' => false,
                    'error' => 'Something went wrong',
                    'message' => $e->getMessage(),
                ],
                500,
            );
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $video = YoutubeUrl::find($id);

        if (!$video) {
            return response()->json(['success' => false, 'data' => [], 'message' => 'No data found'], 200);
        }
        return response()->json(['success' => true, 'data' => new YoutubeUrlResource($video), 'message' => 'Record found'], 200);
        // return response()->json($video);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            \Log::info("Incoming update request for ID: $id");
            $video = YoutubeUrl::find($id);
            \Log::info('Found: ' . ($video ? 'yes' : 'no') . !$video);
            // dd(__CLASS__);
            // dd($video);
            if (!$video) {
                return response()->json(['success' => false, 'message' => 'Not found'], 200);
            }

            $request->validate([
                'url' => 'nullable|url',
                'title' => 'nullable|string|max:255',
                'description' => 'nullable|string',
                'type' => 'nullable|in:0,1',
            ]);

            // $videoId = $this->extractYoutubeId($request->url);

            $video->update([
                // 'title' => $request->title,
                // 'url' => $request->url,
                // 'video_id' => $videoId,
                // 'description' => $request->description,
                // 'type'=>$request->type
                'title' => $request->input('title', $video->title),
                'url' => $request->input('url', $video->url),
                // 'video_id' => $videoId ?? $video->video_id, // Only update if URL is provided
                'description' => $request->input('description', $video->description),
                'type' => $request->input('type', $video->type), // Default to current value if not provided
            ]);

            return response()->json(['success' => true, 'data' => new YoutubeUrlResource($video), 'message' => 'Record updated'], 200);
        } catch (Exception $e) {
            return response()->json(
                [
                    'status' => false,
                    'error' => 'Something went wrong',
                    'message' => $e->getMessage(),
                ],
                500,
            );
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $video = YoutubeUrl::find($id);

        if (!$video) {
            return response()->json(['status' => false, 'message' => 'Not found'], 404);
        }

        $video->delete();

        return response()->json(['status' => false, 'message' => 'Deleted successfully']);
    }

    // Helper: Extract YouTube video ID
    private function extractYoutubeId($url)
    {
        preg_match('/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/', $url, $matches);
        if (empty($matches)) {
            preg_match('/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/', $url, $matches);
        }
        return $matches[1] ?? null;
    }
}
