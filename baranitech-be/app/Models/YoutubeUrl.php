<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class YoutubeUrl extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'url',
        'video_id',
        'description',
    ];
}
