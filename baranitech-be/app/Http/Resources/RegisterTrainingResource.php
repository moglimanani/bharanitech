<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RegisterTrainingResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_name' => $this->user_name,
            'user_occupation' => $this->user_occupation,
            'user_age' => $this->user_age,
            'user_phone' => $this->user_phone,
            'user_address' => $this->user_address,
            'user_city' => $this->user_city,
            'user_state' => $this->user_state,
            'user_country' => $this->user_country,
            'user_email' => $this->user_email,
            'requirements' => $this->requirements,
            'training' => $this->training, // Relating to the Training model
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
