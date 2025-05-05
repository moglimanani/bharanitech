<?php
namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\YoutubeCategoryResource;

class YoutubeUrlResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'type' => new YoutubeCategoryResource($this->whenLoaded('category')),
            'title' => $this->title,
            'url' => $this->url,
            'description' => $this->description,
        ];
    }
}
