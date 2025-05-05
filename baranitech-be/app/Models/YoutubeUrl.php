<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class YoutubeUrl extends Model
{
    use HasFactory;
    const TYPE_PROTECTION_RELAY = 0;
    const TYPE_EQUIPMENT_TESTING = 1;

    protected $fillable = [
        'title',
        'url',
        'video_id',
        'description',
        'type'
    ];

    public static function getTypeLabels(): array
    {
        return [
            self::TYPE_PROTECTION_RELAY => 'Protection relay testing',
            self::TYPE_EQUIPMENT_TESTING => 'Equipment testing',
        ];
    }
    public function getTypeLabelAttribute()
{
    return match($this->type) {
        0 => 'Protection Relay Testing',
        1 => 'Equipment Testing',
        default => 'Unknown',
    };
}
}
