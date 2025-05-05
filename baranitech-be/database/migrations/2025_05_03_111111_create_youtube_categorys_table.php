<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Create youtube_category table
        Schema::create('youtube_categorys', function (Blueprint $table) {
            $table->id();
            // $table->enum('category', ['Protection relay testing', 'Equipment testing'])->default('Protection relay testing');
            $table->tinyInteger('category')->default(0)->comment('0 = Protection relay testing, 1 = Equipment testing');

            // $table->enum('category', [0, 1])->default(0);  // 0 => Protection relay testing, 1 => Equipment testing
            $table->string('title');
            $table->timestamps();
        });

         // Insert default data
         DB::table('youtube_categorys')->insert([
            ['category' => 0, 'title' => 'Motor relay testing'],
            ['category' => 0, 'title' => 'Feeder Relay Testing'],
            ['category' => 0, 'title' => 'Generator Relay Testing'],
            ['category' => 0, 'title' => 'Line Distance relay testing'],
            ['category' => 0, 'title' => 'Bus bar relay testing'],
            ['category' => 1, 'title' => 'Motor testing'],
            ['category' => 1, 'title' => 'CB testing'],
            ['category' => 1, 'title' => 'CT testing'],
            ['category' => 1, 'title' => 'VT testing'],
            ['category' => 1, 'title' => 'Transformer testing'],
            ['category' => 1, 'title' => 'Generator testing'],
            ['category' => 1, 'title' => 'Isolator testing'],
            ['category' => 1, 'title' => 'Cable testing'],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('youtube_categorys');
    }
};

