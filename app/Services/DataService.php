<?php

namespace App\Services;

use App\Models\{People, Сity as CityModel};
use Illuminate\Support\Collection;

class DataService
{
    public function form($query)
    {
        $city = $query["city"];
        return $city;
    }

}
