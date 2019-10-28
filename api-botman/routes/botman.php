<?php
use App\Http\Controllers\BotManController;
use App\Http\Controllers\BotVagasRitsController;
// Don't use the Facade in here to support the RTM API too :)
$botman = resolve('botman');


$botman->hears('/vagasrits', BotVagasRitsController::class.'@startConversation');
$botman->hears('/candidatos', BotVagasRitsController::class.'@candidatos');