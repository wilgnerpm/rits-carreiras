# rits-carreiras
1. Usei o Laravel com back-end e ReactJS com front-end.
2. E o docker para o postgres.


Dados de acesso:
Email: admin@admin.com
Senha: admin123

Clone o projeto:
git clone https://github.com/wilgnerpm/rits-carreiras.git
</br>
1- BANCO DE DADOS
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
composer install && php artisan migrate  && php artisan db:seed && php artisan serve
</br>
O camando acima instala as dependecias, migra o db, cria o admin no banco de dados e inicia o servidor rodando na porta 8000. Endereco: http://localhost:8000
</br>
2.2) Para testa o envio de email configure o smtp no arquivo .env e reinicie o servidor e em seguida execute o comando:
</br>
php artisan command:AvisoNovosCandidadatos
</br>
O comando testa a funcao que envia email de 12h e 18h.
</br></br>
3- WEB </br>
Em um novo terminal acesse a pasta web.</br>
</br>
2.1) Na pasta web execute o comando:</br>
yarn && yarn start
</br>
O comando acima instala as dependencias do ReactJS e executa a aplicacao na porta 3000. Endereco: http://localhost:3000
