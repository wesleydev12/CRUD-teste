# front-13-projeto-web


### Baixando a aplicação
- `git clone https://github.com/iwtrainingbr/front-13-projeto-web/`

### Instalando as dependencias
- `cd front-13-projeto-web`
- `npm install`
- `npm install -g json-server`

### Subindo o servidor do banco de dados
No diretório da aplicação, crie um novo arquivo chamado `db.json` e copie para ele o conteúdo do arquivo `db.json.dist`

Execute no terminal:
```shell
npx json-server --watch db.json --port 8000
```

### Executando a aplicação
Execute o arquivo `index.html` usando algum navegador web e pronto!


## Desenvolvimento
#### Como criar uma nova página
- Crie um arquivo da nova pagina em `/js/pages`, o nome do arquivo precisa ter claro o nome da funcionalidade, por exemplo, `addStudent.js`
- Dentro do arquivo crie uma função com o mesmo nome do arquivo e que retorne um HTML válido:
```js
function addStudent() {
  return `
    <tag>
      Novo Aluno
    </tag>
  `;
}
```
- Importar o novo arquivo `.js` no `index.html`
- Criar a opção no menu
- Criar a div que servirá pra mostrar o conteúdo da pagina
- Fazer a chamada da função no `/js/main.js`
