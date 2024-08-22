<?php

use App\Http\Controllers\Api\BookingController;
use Illuminate\Support\Facades\Route;

Route::get('/cities', [BookingController::class, 'cities'])->name('api.get.cities');
