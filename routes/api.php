<?php

use App\Http\Controllers\Api\BookingController;
use Illuminate\Support\Facades\Route;

Route::prefix('/hotels')->group(function () {
    Route::get('/search', [BookingController::class, 'search'])->name('api.get.hotels.search');
});
