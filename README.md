
## Siga as instruções

### 1. Instalar dependências
Insira o caminho para o banco MongoDB.
Caso não tenha instalado, poderá utilizar o banco de teste na URI:
> mongodb+srv://devapi:devapi@cluster0.uhq08.mongodb.net/devapi?retryWrites=true&w=majority

Insira esse caminho no arquivo .env

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
### 4. Acessar rotas
As rotas do aplicativo são:

- Listar -> GET /api/conectores/
- Cadastrar -> POST /api/conectores
- Filtrar -> GET /api/conectores/
No body enviar { name, category, type, privacy  }