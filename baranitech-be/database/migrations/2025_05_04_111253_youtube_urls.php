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
        Schema::create('youtube_urls', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable(); // Optional title
            $table->text('url')->unique(); // YouTube video URL
            $table->string('video_id')->nullable(); // Optional: Extracted YouTube video ID
            $table->tinyInteger('type')->default(0)->comment('0 = Protection relay testing, 1 = Equipment testing');
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('youtube_urls');
    }
};
