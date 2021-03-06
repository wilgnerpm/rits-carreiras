<?php

namespace App\Http\Controllers;

use App\Conversations\VagasRitsConversetion;
use App\Conversations\VagaCandidatosConversetion;
use Illuminate\Http\Request;
use Mpociot\BotMan\BotMan;

class BotVagasRitsController extends Controller
{
	/**
	 * Place your BotMan logic here.
	 */
    public function handle()
    {
    	$botman = app('botman');
        $botman->verifyServices(env('TOKEN_VERIFY'));

        // Simple respond method
        $botman->hears('Hello', function (BotMan $bot) {
            $bot->reply('Hi there :)');
        });

        $botman->listen();
    }

    /**
     * Loaded through routes/botman.php
     * @param  BotMan $bot
     */
    public function startConversation(BotMan $bot)
    {
        $bot->startConversation(new VagasRitsConversetion());
    }
         public function candidatos(BotMan $bot)
    {
        $bot->startConversation(new VagaCandidatosConversetion());
    }
}
