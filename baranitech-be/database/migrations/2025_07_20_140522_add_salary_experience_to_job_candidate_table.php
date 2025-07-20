<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('job_candidates', function (Blueprint $table) {
            $table->decimal('min_salary', 10, 2)->nullable();
            $table->decimal('max_salary', 10, 2)->nullable();
            $table->decimal('experience', 10, 2)->nullable();
            $table->text('skills')->nullable();
        });
    }

    public function down()
    {
        Schema::table('job_candidates', function (Blueprint $table) {
            $table->dropColumn(['min_salary', 'max_salary', 'experience', 'skills']);
        });
    }
};
