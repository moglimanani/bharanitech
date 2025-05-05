<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\YoutubeCategory;

class YoutubeUrl extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'title',
        'url',
        'description',
    ];

    public function category()
    {
        return $this->belongsTo(YoutubeCategory::class, 'type');
    }
}
