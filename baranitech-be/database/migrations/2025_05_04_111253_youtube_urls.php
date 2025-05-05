<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('youtube_urls', function (Blueprint $table) {
            $table->id();
            $table->foreignId('type')->constrained('youtube_categorys')->onDelete('cascade');
            $table->string('title');
            $table->text('url')->unique();
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('youtube_urls');
    }
};
