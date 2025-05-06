<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TrainingCategory extends Model
{
    protected $fillable = ['title', 'description'];

    public function trainings()
    {
        return $this->hasMany(Training::class, 'type');
    }
}
