<?php

// app/Models/JobCategory.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobCategory extends Model
{
    use HasFactory;

    protected $fillable = ['title'];

    // Define relationship with Job
    public function jobs()
    {
        return $this->hasMany(Job::class, 'type');
    }
}
