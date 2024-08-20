<?php

namespace App\Services;

use App\Models\Сity as CityModel;

class BookingService
{
    public function city(string $query)
    {
        $filteredCities = [];

        if (!empty($query)) {
            $filteredCities = CityModel::select('city')->where('city', 'like', '%' . $query . '%')->get()->toArray();
        }

        return $filteredCities;
    }
}
