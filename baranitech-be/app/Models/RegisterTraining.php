<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisterTraining extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_name',
        'user_occupation',
        'user_age',
        'user_phone',
        'user_address',
        'user_city',
        'user_state',
        'user_country',
        'user_email',
        'requirements',
        'training_id',
    ];

    public function training()
    {
        return $this->belongsTo(Training::class, 'training_id');
    }
}
