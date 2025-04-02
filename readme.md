# Parking API - Sistema de Gerenciamento de Estacionamento  

Uma **API REST** desenvolvida em **Node.js + Express** para controle de entrada/saída de veículos em um estacionamento, com documentação automática via **Swagger**.  

## Funcionalidades  

| Método | Endpoint                | Descrição                                  |
|--------|-------------------------|--------------------------------------------|
| POST   | `/entry`                | Registrar entrada de veículo               |
| PATCH  | `/exit/{plate}`         | Registrar saída de veículo                 |
| GET    | `/check/{plate}`        | Verificar se veículo está no estacionamento|
| GET    | `/time/{plate}`         | Consultar tempo de permanência             |
| PUT    | `/update/{plate}`       | Atualizar dados do veículo                 |
| GET    | `/slots`                | Listar vagas disponíveis                   |
| GET    | `/report`               | Gerar balanço do dia                       |
| DELETE | `/cancel/{plate}`       | Cancelar registro de um veículo            |

## Tecnologias  

- **Node.js**  
- **Express**  
- **Swagger-autogen** (Documentação automática)  
- **Swagger UI** (Interface de visualização)  

## Como Executar  

### Pré-requisitos  
- Node.js (v18+)  
- NPM ou Yarn  

### Passo a Passo  

1. **Clone o repositório**  
   ```bash
   git clone https://github.com/profrenatouzun/parking-api.git
   cd parking-api
   ```

2. **Instale as dependências**  
   ```bash
   npm install
   ```

3. **Gere a documentação Swagger**  
   ```bash
   node swagger-autogen.js
   ```

4. **Inicie o servidor**  
   ```bash
   node index.js
   ```

5. **Acesse a API**  
   - **API:** `http://localhost:3000`  
   - **Documentação:** `http://localhost:3000/docs`  

## Estrutura do Projeto  

```
parking-api/
├── endpoints/          # Rotas da API
│   ├── entry.js        # POST - Entrada de veículo
│   ├── exit.js         # PATCH - Saída de veículo
│   ├── check.js        # GET - Verificar veículo
│   └── ...            # Outros endpoints
├── database.js         # "Banco de dados" em memória
├── swagger-autogen.js  # Configuração do Swagger
├── swagger-output.json # Documentação gerada
└── index.js            # Servidor principal
```

## Documentação  

A documentação interativa está disponível em:  
🔗 [http://localhost:3000/docs](http://localhost:3000/docs)  


## Licença  

Este projeto está sob a licença **Apache License**.  

---  

**Desenvolvido por Prof. Renato Gobet Uzun** 🚀  
**Contato:** renato.uzun@etec.sp.gov.br  

---  

> **Nota:** Este projeto usa um "banco de dados" em memória. Para produção, recomenda-se substituir por **MongoDB**, **PostgreSQL** ou outro banco de dados.  

---

### Links Úteis  
- [Documentação do Express](https://expressjs.com/)  
- [Swagger UI](https://swagger.io/tools/swagger-ui/)  
- [Node.js](https://nodejs.org/)  
