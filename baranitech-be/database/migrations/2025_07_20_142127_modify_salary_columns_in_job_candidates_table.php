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
        Schema::table('job_candidates', function (Blueprint $table) {
            $table->decimal('min_salary', 10, 2)->nullable()->change();
            $table->decimal('max_salary', 10, 2)->nullable()->change();
            $table->decimal('experience', 5, 2)->nullable()->change(); // or use integer if only whole numbers
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('job_candidates', function (Blueprint $table) {
            // Rollback to previous type if needed
            $table->string('min_salary')->change(); // Or whatever it was originally
            $table->string('max_salary')->change();
            $table->string('experience')->change();
        });
    }
};
