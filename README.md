<h1><samp>#Desafio Rits</samp></h1>

<p><samp>O desafio foi resolvido usando Laravel no back-end,&nbsp;ReactJs no front-end,&nbsp;Postgres como banco de dados SQL e Docker para cria&ccedil;&atilde;o dos containers. O&nbsp;layout do admin foi usuado o figma. Para o envio de e-mail foi criado um&nbsp;Task Scheduling, que realiza uma tarefa envio de mail as 12h e 18h<br />
&nbsp;</samp></p>

<p><samp>1-Clone o projeto</samp><br />
<samp>2-Acesse a pasta web e instale as dep&ecirc;ncias:<br />
<strong>npm install&nbsp;</strong><br />
3-Volte para a pasta do projeto e execute o comando abaixo no terminal. Ele Criar os container e inicia as apis, web e postgres<br />
<strong>docker-compose up -d</strong><br />
<br />
4- Acesse o container&nbsp;php-rits<br />
<strong>docker exec -it php-rits bash</strong></samp></p>

<p><samp>5-No terminal do&nbsp;php-rits execute o comando abaixo, ele instala as dependecias, migra o banco de dados, cria a conta do administrador e ativa o crontab<br />
<strong>1-&gt; Nas pastas <span style="color:#000080">api</span> e <span style="color:#000080">api-botman</span> execute: <span style="color:#000080">composer install&nbsp;</span><br />
2-&gt;&nbsp;Na pasta <span style="color:#000080">api</span> execute: php artisan migrate &amp;&amp; php artisan db:seed&nbsp;<br />
3-&gt; Execute o comando:&nbsp;crontab /etc/cron.d/scheduler</strong></samp></p>

<p><samp><strong><span style="color:#000080"><a href="http://localhost:3000/">http://localhost:3000</a> &larr; WEB (BACK-FRONT)</span><br />
<span style="color:#000080"><a href="http://localhost:8000">http://localhost:8000</a> &larr; API (BACK-END)</span><br />
<span style="color:#000080"><a href="http://localhost:8001">http://localhost:8001</a> &larr; API-BOTMAN (BACK-END BOTMAN)</span><br />
<span style="color:#000080"><a href="http://localhost:5432">http://localhost:5432</a> &larr; POSTGRES</span></strong></samp></p>

<p><samp><strong>-Configurar SMTP</strong><br />
O SMTP est&aacute;&nbsp;configurado com o&nbsp;</samp><a href="https://mailtrap.io/">https://mailtrap.io/</a>. Para configurar o SMTP edite o arquivo .env na pasta api.</p>

<p><strong>-Registrando a url da aplica&ccedil;&atilde;o no Bot&nbsp;</strong><br />
1) Edite o arquivo .env na variavel&nbsp;TELEGRAM_TOKEN=&lt;token&gt;, coloque o token do bot.<br />
2) Reset todos os containers.&nbsp;<br />
3) Depois disso &eacute; s&oacute; rodar o servidor web e servir a aplica&ccedil;&atilde;o numa url p&uacute;blica. Aplica&ccedil;&atilde;o para tornar a url publica&nbsp;<a href="https://ngrok.com/">ngrok(https://ngrok.com/</a>)&nbsp;. No meu caso, a URL ficou parecida com essa daqui: https://b24dce4b.ngrok.io/botman/<br />
4)Por fim, &eacute; necess&aacute;rio cadastrar a URL do webhook de seu Bot, conforme<a href="https://core.telegram.org/bots/api#setwebhook"> instru&ccedil;&otilde;es do Telegram</a>.<br />
5)&nbsp;Voc&ecirc; tem v&aacute;rias formas de fazer isso, a mais f&aacute;cil:&nbsp;pegue seu ACCESS TOKEN do Bot (exemplo: 123456789:Adfkj9jjdf9j9jdf9jRkjerkjMijijJUd11). Pegue a sua URL p&uacute;blica da aplica&ccedil;&atilde;o com a rota /botman/ (exemplo: https://a1234567.ngrok.io/botman/). Ajuste na &quot;URL final&quot; https://api.telegram.org/bot&lt;ACCESS TOKEN&gt;/setWebhook?url=&lt;URL P&Uacute;BLICA DA APLICA&Ccedil;&Atilde;O&gt;/botman/ (exemplo: https://api.telegram.org/bot123456789:Adfkj9jjdf9j9jdf9jRkjerkjMijijJUd11/setWebhook?url=https://a1234567.ngrok.io/botman/).&nbsp;Pronto, agora, acesse essa URL final no seu navegador mesmo, voc&ecirc; deve receber a seguinte resposta que est&aacute; tudo ok.<br />
&nbsp;</p>

<p>&nbsp;</p>
