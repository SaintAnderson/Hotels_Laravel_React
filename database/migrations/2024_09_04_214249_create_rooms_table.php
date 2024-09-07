<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rooms', function (Blueprint $table) {
            $table->id();
            // $table->string('name');
            $table->string('people_count');
            // $table->date('come_in');
            // $table->date('come_out');
            // $table->string('image_src');
            // $table->bigInteger('price');
            // $table->bigInteger('floor');
            $table->foreignId('hotel_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rooms');
    }
};
