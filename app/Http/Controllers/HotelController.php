<?php

namespace App\Http\Controllers;

use App\Services\BookingService;
use Illuminate\Http\Request;
use Inertia\{Inertia, Response};
use App\Services\DataService;

class HotelController extends Controller
{
    public function __construct(
        public BookingService $bookingService,
        public DataService $dataService,
    ) {}

    public function index(): Response
    {
        return Inertia::render('Index');
    }

    public function rooms(): Response
    {
        return Inertia::render('Rooms');
    }
    function data_rooms(Request $request)
    {
        $data = $request->all();
        $peoples = $this->dataService->form($data);
        return Inertia::render('Rooms', [
            'data' => $peoples,
        ]);
    }
}
