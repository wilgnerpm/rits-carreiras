<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AvisoNovosCandidatosMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
   public function build()
{
       $carreiras = \App\Carreira::where('open', 'true')->orderBy('open', 'desc')->get();
        $carreiras->each(function ($item, $key) {
        $c= \App\Candidato::where(['carreira_id'=>$item->id, 'classificado'=>'open'])->count();
        $item->count = $c;
        });

    return $this->from('wilgnerp@hotmail.com')
                ->view('emails.aviso')->with([
                    'carreiras'=>$carreiras
                ]);
}
}
