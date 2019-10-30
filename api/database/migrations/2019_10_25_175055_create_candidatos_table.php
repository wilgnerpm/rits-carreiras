<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCandidatosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('candidatos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('carreira_id')->unsigned();
            $table->foreign('carreira_id')->references('id')->on('carreiras');
            $table->string('nome_completo');
            $table->string('email');
            $table->string('telefone');
            $table->string('resumo')->nullable($value = true);
            $table->string('linkedin');
            $table->string('github');
            $table->string('nivel_ingles');
            $table->string('salario');
            $table->string('file');
            $table->string('classificado');
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
        Schema::dropIfExists('candidatos');
    }
}
