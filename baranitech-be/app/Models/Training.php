<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Training extends Model
{
    protected $fillable = [
        'title', 'description', 'type', 'classification',
        'startdate', 'enddate', 'location', 'total_hours',
        'city', 'state', 'country', 'table_of_contents', 'total_price'
    ];

    public function category()
    {
        return $this->belongsTo(TrainingCategory::class, 'type');
    }
}
