<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\BookingService;
use Illuminate\Http\JsonResponse;

class BookingController extends Controller
{
    public function __construct(
        public BookingService $bookingService,
    ) {}

    public function cities(Request $request)
    {
        $query = $request->input('q');

        $data = $this->bookingService->cities($query);

        return response()->json($data);
    }

    public function childrens(): JsonResponse
    {
        return response()->json($this->bookingService->childrens());
    }

    public function adults(): JsonResponse
    {
        return response()->json($this->bookingService->adults());
    }
}
