<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHrDesignationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hr_designations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('department_id')->nullable();
            $table->string('designation_name')->nullable();
            $table->string('complete_name')->nullable();
            $table->boolean('active')->nullable();
            $table->integer('company_id')->nullable()->index();
            $table->integer('parent_id')->nullable();
            $table->integer('manager_id')->nullable()->index();
            $table->string('note')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hr_designations');
    }
}
