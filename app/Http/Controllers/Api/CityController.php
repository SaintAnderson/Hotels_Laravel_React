<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Сity as CityModel;

class CityController extends Controller
{
    public function __invoke(Request $request)
    {
        $query = $request->input('q');
        session(['qCity' => $query]);

        $filteredCities = [];

        if (!empty($query)) {
            $filteredCities = CityModel::select('city')->where('city', 'like', '%' . $query . '%')->get()->toArray();
        }

        return response()->json($filteredCities);
    }
}
