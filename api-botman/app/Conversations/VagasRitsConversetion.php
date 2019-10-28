<?php

namespace App\Conversations;

use Mpociot\BotMan\Answer;
use Mpociot\BotMan\Button;
use Mpociot\BotMan\Conversation;
use Mpociot\BotMan\Question;
use Illuminate\Support\Facades\DB;

class VagasRitsConversetion extends Conversation {

    public function run() {
        $this->askBuscarVagas();
    }

    public function askBuscarVagas() {

        $carreiras = DB::table('carreiras')->where('open', true)->get();
        $carreiras->each(function ($item, $key) {
            $item->count = DB::table('candidatos')->where([['carreira_id', '=', $item->id], ['classificado', '=', 'open']])->count();
        });
        $buttonArray = [];
        $questionText = '';
        foreach ($carreiras as $carreira) {
            $button = Button::create($carreira->carreira . '')->value($carreira->id . '');
            $questionText = '-' . $carreira->carreira . ' - ' . $carreira->count . ' novo(s) candidato(s). ' . $questionText;
            $buttonArray[] = $button;
        }


        $question = Question::create('' . $questionText . '')
                ->fallback('Unable to ask question')
                ->callbackId('ask_reason')
                ->addButtons($buttonArray);
        return $this->ask($question, function (Answer $answer) {
                    if ($answer->isInteractiveMessageReply()) {
                         $candidatos = DB::table('candidatos')->where([['carreira_id','=',''.$answer->getValue()], ['classificado','=','open']])->orderBy('id', 'desc')->limit(3)->get();
        foreach ($candidatos as $candidato) {
             $this->say('-'. $candidato->nome_completo.'('.$candidato->email.')');
        }
                     
                    }
                });
    }

}
