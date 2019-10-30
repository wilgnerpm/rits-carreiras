#desafio
</br>

1. Para resolver o desafio, usei o Laravel para a api e o ReactJs no frent-end da aplicação. O banco de dados usado foi o postgres.
   </br>
   --O desafio 1. Resolvido com as especificações solicitada.
   </br>
   --O desafio 2: O bot foi criado e está funcionando requer configurar com o token do bot e setWebhook no telegram com a url da api-botman.
   </br>
   --O desafio 3: Usei o docker para criar o postgres configurado pelo docker-compose.
   </br></br>

Clone o projeto:</br>
git clone https://github.com/wilgnerpm/rits-carreiras.git
</br></br>
1- BANCO DE DADOS</br>
</br>
1)Na pasta do projeto execute o comando para iniciar o postgres:
docker-compose up -d
</br></br>

2- API
</br>
Em um novo terminal acesse a pasta api.
</br>
2.1) Na pasta api execute o comando:
</br>
composer install && php artisan migrate && php artisan db:seed && php artisan serve
</br>
O comando acima instala as dependências, migra o db, cria o admin no banco de dados e inicia o servidor rodando na porta 8000. Endereço: http://localhost:8000
</br>
2.2) Para testa o envio de e-mail configure o smtp no arquivo .env e reinicie o servidor e em seguida execute o comando:
</br>
php artisan command:AvisoNovosCandidadatos
</br>
O comando testa a função que envia e-mail de 12h e 18h.
</br></br>

3- WEB
</br>
Em um novo terminal acesse a pasta web.
</br>
3.1) Na pasta web execute o comando:
</br>
yarn && yarn start
</br>
O comando acima instala as dependências do ReactJS e executa a aplicação na porta 3000. Endereço: http://localhost:3000
