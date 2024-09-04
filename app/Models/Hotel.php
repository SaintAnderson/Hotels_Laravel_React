<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Hotel extends Model
{
    use HasFactory;

    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }

    public static function getHotelsInCity($city, $address)
    {
        return self::with('city')
            ->whereHas('city', function ($query) use ($city) {
                $query->where('name', 'LIKE', "%$city%");
            })
            ->where('address', 'LIKE', "%$address%")
            ->get();
    }
}
