<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Carreira extends Model {

    protected $appends = ['url'];
    protected $fillable = [
        'carreira', 'localizacao', 'open',
    ];

    public function candidato() {
        return $this->hasMany('App\Candidato');
    }

    public function getUrlAttribute($value) {
        $clean = preg_replace("/[^a-zA-Z0-9\/_|+ -]/", '', $this->carreira);
        $clean = strtolower(trim($clean, '-'));
        $clean = preg_replace("/[\/_|+ -]+/", '-', $clean);
        return $clean;
    }

}
