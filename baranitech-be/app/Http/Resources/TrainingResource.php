<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TrainingResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'type' => new TrainingCategoryResource($this->category),
            'classification' => $this->classification,
            'startdate' => $this->startdate,
            'enddate' => $this->enddate,
            'location' => $this->location,
            'total_hours' => $this->total_hours,
            'city' => $this->city,
            'state' => $this->state,
            'country' => $this->country,
            'table_of_contents' => $this->table_of_contents,
            'total_price' => $this->total_price,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
