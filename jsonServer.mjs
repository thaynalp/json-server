import jsonServer from 'Json-server';
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(middlewares);
server.use(router);

server.listen(port);

/*Criar servidor  */
//json server
/*
Json server nos permite criar uma simulação de uma API REST (servidor que 
trabalha com HTTP) que se comunica em JSON.
*/

/*
Json server - Instalação
Instale de forma global a biblioteca json-server usando o npm

npm i json-server (no terminal. para abrir o terminal pressione alt+ctrl +n)


*/


/*Json server - Dados
Crie um arquivo chamado db.json, onde irá conter os dados do nosso 
servidor */

/*Crie um arquivo chamado server.js, este arquivo ficará responsável por iniciar 
nosso servidor */

/*Crie um arquivo chamado server.js, este arquivo ficará responsável por iniciar 
nosso servidor

node server.js*/