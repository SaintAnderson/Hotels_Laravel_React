<?php

namespace App\Services;

use App\Models\{People, Сity as CityModel};
use Illuminate\Support\Collection;

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

    public function peoples(): Collection
    {
        return People::all(['id', 'amount'])->map(function (People $people): array {
            return [
                'id' => $people->id,
                'name' => $people->amount,
            ];
        });
    }
}
