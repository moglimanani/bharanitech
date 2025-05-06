<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'photos'];
    
    // If you want to cast the photos to an array
    protected $casts = [
        'photos' => 'array',
    ];
}
