<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;

    protected $fillable = ['type', 'total_vacancy', 'city', 'state', 'country', 'company', 'description', 'title', 'salary'];

    // Define relationship with JobCategory
    public function category()
    {
        return $this->belongsTo(JobCategory::class, 'type');
    }

    public function jobCandidates()
    {
        return $this->hasMany(JobCandidate::class);
    }
    public function index()
{
    // return Job::with('jobCategory')->latest()->get();
    return JobResource::collection(
        Job::with('category')->latest()->get()
    );
}
}
