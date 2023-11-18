# FifasPizza

Este é um aplicativo para uma pizzaria, permitindo gerenciar pedidos, clientes e outros aspectos relacionados ao negócio.

## Instalação

Certifique-se de ter o Node.js instalado. Use o npm para instalar as dependências.

```bash
npm install
```

## Configuração

O projeto usa variáveis de ambiente. É necessário configurar um arquivo `.env` com as seguintes variáveis:

```
PORT=3333
DATABASE_URL=URL_DO_SEU_BANCO_DE_DADOS
JWT_SECRET=SUA_CHAVE_SECRETA_PARA_JWT
```

## Scripts

- `npm run dev`: Inicia o servidor de desenvolvimento usando ts-node-dev.
- `npm test`: Executa os testes automatizados.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Prisma
- bcryptjs para hash de senhas
- jsonwebtoken para autenticação
- Multer para upload de arquivos
- cors para lidar com requisições de diferentes origens

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Certifique-se de substituir `URL_DO_SEU_BANCO_DE_DADOS` e `SUA_CHAVE_SECRETA_PARA_JWT` pelas suas configurações específicas. Este README é uma base, você pode expandir e adicionar informações adicionais sobre como executar, utilizar ou contribuir para o projeto.