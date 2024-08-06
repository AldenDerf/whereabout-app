<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Whereabout extends Model
{
    use HasFactory;

    protected $fillable = ['users', 'location', 'time'];
}
