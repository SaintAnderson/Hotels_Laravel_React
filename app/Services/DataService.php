<?php

namespace App\Services;

class DataService
{
    public function form($query)
    {
        $city = $query["city"];
        return $city;
    }

}
