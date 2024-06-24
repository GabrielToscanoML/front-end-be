# Boas vindas ao projeto Desafio Front-End BE!

Este projeto foi desenvolvido para resolver um desafio técnico Front-End nível Jr.
O projeto trata-se de uma tabela de visualização de funcionários, onde é possível filtrar os funcionários pelo nome, telefone ou cargo.
O projeto é responsivo.

Este projeto foi desenvolvido com as seguitnes tecnologias:
- Yarn
- React
- NextJS
- Typescript
- TailwindCSS
- Node na versão 21.7.1

## Executando o projeto

### Pré Requisitos :heavy_exclamation_mark:

Para executar esse projeto, é importante ter essas ferramentas instaladas!!
- Node na versão 20 ou superior! (Recomendada a versão 21)
- Git
- Yarn na versão 1.22.22 ou superior! (Recomendada a versão 1.22.22)

### Instalação

Utilizando um terminal de sua preferência, utilize os seguintes comandos:

1. Faça um clone do repositório
   ```sh
   git clone git@github.com:GabrielToscanoML/front-end-be.git
   ```
2. Entre na pasta clonada
   ```sh
   cd front-end-be
   ```
3. Instale todas as dependências 
   ```
   yarn install
   ```
4. Execute a aplicação
   ```
   yarn dev
   ```
5. Acesse 'http://localhost:3000' ou a porta que estiver disponível que será avisada no terminal para ver o projeto.

### Acesso aos dados da API simulada

Para ter acesso aos dados que alimentarão o projeto, faça o seguinte:
caso você não tenha, instale o pacote json-server;

clone este repositório do GitHub em sua máquina: https://github.com/BeMobile/desafio-front-end;

entre na pasta do projeto, em sua máquina, e, por meio da linha de comando, execute o comando json-server --watch db.json, para consumir a API simulada;

É necessário deixar o json-server rodando no terminal para que os dados sejam visualizados no projeto.

Caso você tenha problemas com o json-server, tente rodá-lo com npx json-server db.json ou 
com yarn json-server <path>/db.json, em que <path> é o caminho completo até o diretório em que o arquivo db.json está localizado.

Uma dica importante!! Caso dê conflito com portas disponíveis para rodar a API simulada, após a execução do arquivo da API, verifique a porta que está rodando a API e 
em seguida, altere o arquivo "getEmployees.ts", na linha 10, que está dentro da pasta "api", no projeto que está o Front-End para a porta certa.

Caso tenha alguma dúvida, ou algum probleminha, entre em contato comigo:
- ✉️ Email: gabrieltoscano1@outlook.com
- 🔗 Linkedin: https://www.linkedin.com/in/gabrieltoscanoml/
