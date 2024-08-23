<?php

namespace App\Http\Controllers;

use App\Services\BookingService;
use Inertia\{Inertia, Response};

class HotelController extends Controller
{
    public function __construct(
        public BookingService $bookingService,
    ) {}

    public function index(): Response
    {
        return Inertia::render('Index', [
            'adults' => $this->bookingService->adults(),
            'childrens' => $this->bookingService->childrens(),
        ]);
    }

    public function rooms(): Response
    {
        return Inertia::render('Rooms');
    }
}
