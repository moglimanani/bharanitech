<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobCandidate extends Model
{
    use HasFactory;

    // Define the fillable fields to allow mass-assignment
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'job_id',
        'occupation',       // Added occupation
        'age',               // Added age
        'address',           // Added address
        'city',              // Added city
        'state',             // Added state
        'country',           // Added country
    ];

    /**
     * Get the job that the candidate is applying for.
     */
    public function job()
    {
        return $this->belongsTo(Job::class);
    }
}
