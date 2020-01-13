<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
    protected $table = "events";
    
    protected $fillable = [
        'name',
        'user_id', 
        'date',
        'location',
        'description',
        'price',
        'slug',
        'image',
        'category_id',
        'tag_id'
    ];

    public function creator() {
        return $this->hasOne('App\User', 'id', 'user_id');
    }

    public function eventCategory() {
        return $this->hasOne('App\Models\Categories', 'id', 'category_id');
    }

}
