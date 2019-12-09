<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SocialServices extends Model
{
    protected $table = "sociale_voorzieningen";
    
    protected $fillable = [
        'name',
        'description',
        'link',
        'phone',
        'address',
        'email',
        'image',
        'hours'
    ];

}
