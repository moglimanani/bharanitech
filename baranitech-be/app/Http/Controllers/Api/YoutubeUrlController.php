<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\YoutubeUrl;
use App\Models\YoutubeCategory;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\YoutubeUrlResource;

class YoutubeUrlController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $fetchYoutubeUrls = YoutubeUrl::with('category')->get();
        if ($fetchYoutubeUrls->count() > 0) {
            // return YoutubeUrlResource::collection($fetchYoutubeUrls);
            return response()->json([
                'success' => true,
                'data' => $fetchYoutubeUrls,
            ]);
        } else {
            return response()->json(['data' => [], 'message' => 'No records available'], 200);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'type' => 'required|exists:youtube_categorys,id',
                'title' => 'required|string|max:255',
                'url' => 'required|url|unique:youtube_urls,url',
                'description' => 'nullable|string',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->messages(), 'status' => false, 'message' => 'All fields are mandatory'], 422);
            }

            if ($request->filled('type')) {
                $validCategory = YoutubeCategory::find($request->type);
                if (!$validCategory) {
                    return response()->json(['success' => false, 'message' => 'Invalid category type'], 422);
                }
            }

            $video = YoutubeUrl::create([
                'title' => $request->title,
                'url' => $request->url,
                'description' => $request->description,
                'type' => $request->type,
            ]);
            $video->load('category'); 

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
        // $video = YoutubeUrl::find($id);
        $video = YoutubeUrl::with('category')->find($id);

        if (!$video) {
            return response()->json(['success' => false, 'data' => [], 'message' => 'No data found'], 200);
        }
        return response()->json(['success' => true, 'data' => new YoutubeUrlResource($video), 'message' => 'Record found'], 200);
        // return response()->json($video);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            // \Log::info("Incoming update request for ID: $id");
            $video = YoutubeUrl::find($id);
            // \Log::info('Found: ' . ($video ? 'yes' : 'no') . !$video);
            // dd(__CLASS__);
            // dd($video);
            if (!$video) {
                return response()->json(['success' => false, 'message' => 'Not found'], 200);
            }
            //
            $validator = Validator::make($request->all(), [
                'type' => 'nullable|exists:youtube_categorys,id',
                'title' => 'nullable|string|max:255',
                'url' => 'nullable|url|unique:youtube_urls,url,' . $video->id,
                'description' => 'nullable|string',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->messages(), 'status' => false, 'message' => 'All fields are mandatory'], 422);
            }
            //

            if ($request->filled('type')) {
                $validCategory = YoutubeCategory::find($request->type);
                if (!$validCategory) {
                    return response()->json(['success' => false, 'message' => 'Invalid category type'], 422);
                }
            }

           

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
            // $video->load('category'); 

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
