<?php

namespace App\Services;

use App\Models\Hotel;

class BookingService
{
    public function searchHotels(array $data): array
    {
        $parts = array_map('trim', explode(',', $data['address']));

        $city = isset($parts[0]) && !empty($parts[0]) ? $parts[0] : null;
        $address = isset($parts[1]) && !empty($parts[1]) ? $parts[1] : null;

        $filtered = [];

        $filtered = Hotel::getHotelsInCity($city, $address)->map(function (Hotel $hotel) {
            return [
                'city' => $hotel->city->name,
                'address' => $hotel->address,
            ];
        })->toArray();

        return $filtered;
    }
}
