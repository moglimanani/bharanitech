<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'username',
        'email',
        'subject',
        'message',
        'phone',
        'occupation',
        'dob',
    ];
}