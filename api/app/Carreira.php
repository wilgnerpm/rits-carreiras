<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Carreira extends Model
{
    protected $fillable = [
        'carreira', 'localizacao', 'open',
    ];
}
