<?php

namespace App\Http\Controllers;

use App\Models\People;
use App\Services\BookingService;
use Inertia\{Inertia, Response};

class HotelController extends Controller
{
    public function __construct(
        public BookingService $bookingService,
    ) {}

    public function index(): Response
    {
        $peoples = $this->bookingService->peoples()->toArray();

        return Inertia::render('Index', [
            'peoples' => $peoples,
        ]);
    }

    public function rooms(): Response
    {
        $peoples = $this->bookingService->peoples()->toArray();
        
        return Inertia::render('Rooms', [
            'peoples' => $peoples,
        ]);
    }
}
