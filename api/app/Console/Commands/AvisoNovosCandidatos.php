<?php

namespace App\Console\Commands;
use App\Mail\AvisoNovosCandidatosMail;
use Illuminate\Console\Command;
use Mail;

class AvisoNovosCandidatos extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:AvisoNovosCandidadatos';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = ' Avisar quantos novos usuários se candidataram à vaga';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

   Mail::to('wilgnerp@hotmail.com')->send(new AvisoNovosCandidatosMail());
    
    }
}
