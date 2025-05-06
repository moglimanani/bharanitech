<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GalleryResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'photos' => $this->photos,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
