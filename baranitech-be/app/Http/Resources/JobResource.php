<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class JobResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'type' => new JobCategoryResource($this->category),
            'total_vacancy' => $this->total_vacancy,
            'city' => $this->city,
            'state' => $this->state,
            'country' => $this->country,
            'company' => $this->company,
            'description' => $this->description,
        ];
    }
}
