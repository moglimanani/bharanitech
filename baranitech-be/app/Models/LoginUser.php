<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class LoginUser extends Model
{
    use HasFactory;
    protected $table = 'login_users';

    protected $fillable = ['username', 'email', 'phone', 'password'];

}
