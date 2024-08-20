<?php

namespace App\Services;

use App\Models\{Adult, Children, Сity as CityModel};

class BookingService
{
    public function cities(string $query): array
    {
        $filteredCities = [];

        if (!empty($query)) {
            $filteredCities = CityModel::select('city')->where('city', 'like', '%' . $query . '%')->get()->toArray();
        }

        return $filteredCities;
    }

    public function adults(): array
    {
        return Adult::all(['id', 'adult'])->toArray();
    }

    public function childrens(): array
    {
        return Children::all(['id', 'children'])->toArray();
    }
}
