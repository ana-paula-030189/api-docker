# api-docker

Cria conexão com o banco postgres, e executa uma consulta. 

##  Comandos docker para executar api e o postgres

* **docker build -t my-api:1.0 .**

> Constrói uma imagem da api com o nome my-api

 * **docker network create --driver bridge rede-1**

> Cria uma rede bridge com o objetivo de fazer a conexão entre o
> container do banco e da api

 * **docker run -d  -p 5432:5432  -v /~/tecnologia/database:/var/lib/postgresql/data -e POSTGRES_PASSWORD=1234  --network rede1 --name db-api postgres**

 
> Executa um container postgres, utilizando volume (para backup do
> banco)
* **docker run -p 3000:3000  -e DB_USER=postgres  -e DB_HOST=db-api  -e DB_PASSWORD=1234 -e DB_PORT=5432 -e PORT=3000 --name api-prod --network=rede1 my-api:1.0**
* 
> Executa um container da api conectando com o banco postgres
