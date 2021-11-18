# Desafio Back-End NodeJS
*Neste projeto foi utilizado o framework NextJS porque pode ser utilizado tanto para backend quanto para frontend.*


## Siga as instruções

### 1. Instalar dependências
*Insira o caminho para o banco MongoDB no arquivo .env.*
*Rode o comando a seguir para instalar as dependências:*
```bash
npm install

```
### 2. Script para popular o banco de dados
```bash
npm run seed
```
### 3. Script de inicialização da aplicação
```bash
npm run dev
```
### 4. Gerar Token
*Rota para gerar o token e acessar as rotas, utilize as credenciais abaixo no body no formato JSON:*
> GET `/api/auth/`

*Por padrão, a aplicação roda no localhost:3000*
```bash
{
    "email": "one@example.com",
    "password": "bacon"
}
```
### 5. URLs da API
*As rotas do aplicativo são:*

- Listar -> GET `/api/conectores/`
- Cadastrar -> POST `/api/conectores`
- Filtrar -> GET `/api/conectores/`
>(opcional) No body enviar { name, category, type, privacy  }
- Listar um -> GET /api/conectores/[ id ]
>Required: id=[ObjectId]
- Editar -> PUT `/api/conectores/[ id ]`
>Required: id=[ObjectId]
>
>No body enviar os campos a serem atualizados.
- Excluir -> DELETE `/api/conectores/[ id ]`
>Required: id=[ObjectId]
