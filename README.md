# rits-carreiras

1. Clone o projeto:
   git clone https://github.com/wilgnerpm/rits-carreiras.git

2. Inicie docker com o postgres acessando a pasta docker e execute o comando:
   docker-compose up -d

3. Na pasta api e na pas api-botman:
   3.1 Instale as dependencias, execute o comando:  
   composer install
   Atencao: O arquivo .env da api e api-botman esta configurada para se conectar com o postgres. Que foi iniciado no item anterior
   3.2 Edite o .env da pasta api-botman e coloce no TELEGRAM_TOKEN=<Token do bot>, o token do bot criado.
   3.3 iniciando o servicos de api e botman, execute o seguinte comando nas pastas api e api-botman:
   php artisan serve <- Na pasta api;
   php artisan serve --port=8001 <- Na pasta api-botman;

4.Registrando a url da aplicação no Bot:
Por fim, é necessário cadastrar a URL do webhook de seu Bot, conforme instruções do <a ref="https://core.telegram.org/bots/api#setwebhook">Telegram</a>.
4.1 Instale o ngrok e execute o comando ngrok http 8001
4.2 Pegue a sua URL pública da aplicação com a rota /botman/ (exemplo: https://a1234567.ngrok.io/botman/)
4.3 juste na "URL final" https://api.telegram.org/bot<ACCESS TOKEN>/setWebhook?url=<URL PÚBLICA DA APLICAÇÃO>/botman/ (exemplo: https://api.telegram.org/bot123456789:Adfkj9jjdf9j9jdf9jRkjerkjMijijJUd11/setWebhook?url=https://a1234567.ngrok.io/botman/)
