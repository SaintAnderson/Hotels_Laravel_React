<?php

use App\Http\Controllers\Api\BookingController;
use Illuminate\Support\Facades\Route;

Route::get('/cities', [BookingController::class, 'cities'])->name('api.get.cities');
Route::get('/childrens', [BookingController::class, 'childrens'])->name('api.get.childrens');
Route::get('/adults', [BookingController::class, 'adults'])->name('api.get.adults');
