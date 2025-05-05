<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class YoutubeCategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'category' => $this->category,  // This will be the integer (0 or 1)
            'title' => $this->title,
        ];
    }
}
