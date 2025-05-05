<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class YoutubeCategory extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'youtube_categorys';  // Specify the table name if it's not the default

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'category',
        'title'
    ];

    /**
     * Get the youtube urls for the category.
     */
    public function youtubeUrls()
    {
        return $this->hasMany(YoutubeUrl::class, 'type', 'id');
    }
}
