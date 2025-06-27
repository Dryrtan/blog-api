<h1 align="center" style="margin-top: 0;">
  <img src="./logo.svg" height="300" width="300" alt="Logo Nome do Projeto" /><br>
  Blog API
</h1>

Exemplo de CRUD com TypeScript, NodeJS, Express e PostgreSQL.

Usei como base o exemplo de um blog, onde pode criar, listar, atualizar e deletar artigos.

## Stack
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC.svg?style=for-the-badge&logo=TypeScript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-404d59.svg?style=for-the-badge&logo=express&logoColor=61DAFB)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=3ecf8e)

## Arquitetura

Este projeto foi estruturado aplicando boas práticas e padrões de projeto que são amplamente utilizados no mercado.

Foi usado os seguintes conceitos e padrões:
- Arquitetura em Camadas (Layered Architecture): Separa as responsabilidades da nossa aplicação em camadas distintas (Rotas, Controladores, Serviços, Repositórios). Isso torna o código mais organizado, testável e fácil de manter. 
- Padrão de Repositório (Repository Pattern): Abstrai a lógica de acesso a dados. A camada de serviço não saberá como os dados são salvos (se é em PostgreSQL, MongoDB, etc.), apenas que eles são salvos. 
- Injeção de Dependência (Dependency Injection): Em vez de uma camada criar suas próprias dependências (ex: o Controller criar uma instância do Service), nós as "injetamos" de fora. Isso desacopla o código e facilita muito os testes. 
- Data Transfer Objects (DTOs) com Validação: Usaremos DTOs para definir a estrutura dos dados que transitam pela nossa API e validá-los para garantir a integridade.

## Execução

Antes de iniciar com o desenvolvimento e a execução do projeto, é importante definir as variáveis de ambiente no seu ambiente de desenvolvimento. Obtenha essas variáveis do Supabase, ou modifique removendo a necessidade da variável `DIRECT_URL` para usar o banco de dados de sua preferência.

Abaixo a listagem de quais variáveis de ambiente devem ser definidas:

| Variável  | Tipo     | Necessidade            | Default | Descrição                                                 |
| :-------- | :------- |:-----------------------| :------ |:----------------------------------------------------------|
| `DATABASE_URL` | `string` | Obrigatória       | `postgresql://postgres.ejogamxfbfpnwhpowxxb:[SUA SENHA]@aws-0-us-east-2.pooler.supabase.com:6543/postgres?pgbouncer=true`   | Conecta ao Supabase por meio de pool de conexão           |
| `DIRECT_URL` | `string` | Obrigatória | `postgresql://postgres.ejogamxfbfpnwhpowxxb:[SUA SENHA]@aws-0-us-east-2.pooler.supabase.com:5432/postgres`   | Conexão direta com o banco de dados. Usado para migrações |

## Comandos
``` bash
npm install
```
``` bash
prisma db push
```

### Executar projeto em ambiente de desenvolvimento

``` bash
npm run dev
```

### Executar projeto em ambiente de produção

``` bash
npm run build
```
``` bash
npm run start
```

## API Docs

A documentação da API você pode fazer um fork **Postman Collection** em seu workspace no Postman

[<img src="https://run.pstmn.io/button.svg" alt="Executar no Postman" style="width: 128px; height: 32px;">](https://infopoint-software.postman.co/workspace/My-Workspace~e8ca7daa-32d5-4838-8250-90fc35239ca5/collection/17607403-495c44c4-a1df-4b8d-afe2-9f7423746015?action=share&creator=17607403)