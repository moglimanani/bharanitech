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
        Schema::create('job_categories', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->timestamps();
        });

        // Seed default categories
        \DB::table('job_categories')->insert([
            ['id' => 1, 'title' => 'T&C Engineering'],
            ['id' => 2, 'title' => 'Protection Engineering'],
            ['id' => 3, 'title' => 'SCADA Engineering'],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_categories');
    }
};
