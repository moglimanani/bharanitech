<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRegisterTrainingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('register_trainings', function (Blueprint $table) {
            $table->id();
            $table->string('user_name');
            $table->string('user_occupation');
            $table->integer('user_age');
            $table->string('user_phone');
            $table->text('user_address');
            $table->string('user_city');
            $table->string('user_state');
            $table->string('user_country');
            $table->string('user_email');
            $table->text('requirements')->nullable();
            $table->foreignId('training_id')->constrained('trainings')->onDelete('cascade'); // Foreign key to 'trainings' table
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('register_trainings');
    }
}
