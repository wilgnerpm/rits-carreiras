<?php

namespace App\Conversations;


use Mpociot\BotMan\Answer;
use Mpociot\BotMan\Button;
use Mpociot\BotMan\Conversation;
use Mpociot\BotMan\Question;
use Illuminate\Support\Facades\DB;

class VagaCandidatosConversetion extends Conversation {

    
    public function run() {
        $this->askVagaComCandidatos();
    }
    
     public function askVagaComCandidatos() {
        $carreiras = DB::table('carreiras')->where('id', 1)->get();
        $candidatos = DB::table('candidatos')->where([['carreira_id','=',1], ['classificado','=','open']])->orderBy('id', 'desc')->limit(3)->get();
        $questionText = '';
        foreach ($candidatos as $candidato) {
            $questionText = '-'. $candidato->nome_completo.'('.$candidato->email.')';
        }
        $question = Question::create('Candidatos:'.$questionText.'')
                ->fallback('Unable to ask question')
                ->callbackId('ask_reason')
                ->addButtons([Button::create('Pronto')->value('pronto'),]);
        return $this->ask($question, function (Answer $answer) {
                    if ($answer->isInteractiveMessageReply()) {
                       
                       $this->say('OK! Eu estou por aqui, se quiser é só me chamar novamente.');
                 
                    }
                });
    }

}
