<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $table = "category";
    
    protected $fillable = [
        'name'
    ];

    public function categoryTags() {
        return $this->hasMany('App\Models\Tags', 'category_id', 'id');
    }
}
