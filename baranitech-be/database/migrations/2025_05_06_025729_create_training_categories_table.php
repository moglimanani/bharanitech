<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */

    public function up(): void
    {
        Schema::create('training_categories', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->timestamps();
        });

        // Seed default categories
        DB::table('training_categories')->insert([['id' => 1, 'title' => 'Module - Basic', 'description' => 'Module - Basic', 'created_at' => now(), 'updated_at' => now()], ['id' => 2, 'title' => 'Module - intermediate-stage-1', 'description' => 'Module - intermediate-stage-1', 'created_at' => now(), 'updated_at' => now()], ['id' => 3, 'title' => 'Module - intermediate-stage-2', 'description' => 'Module - intermediate-stage-2', 'created_at' => now(), 'updated_at' => now()], ['id' => 4, 'title' => 'Module - advance-stage-1', 'description' => 'Module - advance-stage-1', 'created_at' => now(), 'updated_at' => now()], ['id' => 5, 'title' => 'Module - advance-stage-2', 'description' => 'Module - advance-stage-2', 'created_at' => now(), 'updated_at' => now()]]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('training_categories');
    }
};
