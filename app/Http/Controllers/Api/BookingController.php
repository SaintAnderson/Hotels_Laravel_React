<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\BookingService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function __construct(
        public BookingService $bookingService,
    ) {}

    public function search(Request $request): JsonResponse
    {
        $data = $this->bookingService->searchHotels($request->all());

        return response()->json($data);
    }
}
