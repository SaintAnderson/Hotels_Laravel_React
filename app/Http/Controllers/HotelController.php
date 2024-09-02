<?php

namespace App\Http\Controllers;

use App\Models\People;
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
    function data_rooms(Request $request)
    {
        $data = $request->all();
        $peoples = $this->dataService->form($data);
        return Inertia::render('Rooms', [
            'data' => $peoples,
        ]);
    }
}
