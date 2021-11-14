# Desafio Back-End NodeJS
Neste projeto foi utilizado o framework NextJS porque pode ser utilizado tanto para backend quanto para frontend.


## Siga as instruções

### 1. Instalar dependências
Insira o caminho para o banco MongoDB.
Caso não tenha instalado, poderá utilizar o banco de teste, inserindo no arquivo .env:
> mongodb+srv://devapi:devapi@cluster0.uhq08.mongodb.net/devapi?retryWrites=true&w=majority

Rode o comando a seguir para instalar as dependências:
```bash
npm install

```
### 2. Alimentar o banco de dados
```bash
npm run seed
```
### 2. Iniciar aplicação
```bash
npm run dev
```
### 4. Gerar Token
Rota para gerar o token e acessar as rotas, utilize as credenciais abaixo no body no formato JSON:
> GET /api/auth/

Por padrão, a aplicação roda no localhost:3000
```bash
{
    "email": "one@example.com",
    "password": "bacon"
}
```
### 5. Acessar rotas
As rotas do aplicativo são:

> Listar -> GET /api/conectores/

> Cadastrar -> POST /api/conectores

> Filtrar -> GET /api/conectores/

  (opcional) No body enviar { name, category, type, privacy  }
> Listar um -> GET /api/conectores/[ id ]

> Editar -> PUT /api/conectores/[ id ]
No body enviar os campos a serem atualizados.

> Excluir -> DELETE /api/conectores/[ id ]