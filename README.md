# Empresa-Galpao

<div align="center" style="margin-bottom: 20px;">
<img alt="demonstração da pagina" src="https://user-images.githubusercontent.com/96503495/171736607-90fe41f6-b4f1-4432-a0ef-689eed12ffdf.gif" width="auto" heigth="auto"/>
</div>

<div align="center" style="margin: 20px;">
    <p align="center" >
      <a href="#rocket-tecnologias-usadas"> :rocket: Tecnologias Usadas</a> |
      <a href="#zap-executando-o-projeto"> :zap: Executando o Projeto </a> |
      <a href="#open_book-código"> :open_book: Código </a> |
      <a href="#grinning-conclusão"> :grinning: Conclusão </a> |
      <a href="#phone-contatos"> :phone: Contatos </a>
    </p>

</div>

## :barber: O projeto

O objetivo do projeto era construir uma página web que ajudasse no gerenciamento de uma empresa de galpões. Pensando nisso construí uma página onde fosse possível cadastrar, editar e deletar quatro entidades: usuários, transportadoras, produtos e fornecedores.

## :rocket: Tecnologias Usadas

O projeto foi feito com as seguintes tecnologias:

- [ReactJS](https://pt-br.reactjs.org/)
- [Vite](https://vitejs.dev)
- [Styled-Components](https://styled-components.com/)
- [React-Bootstrap](https://react-bootstrap.github.io)
- [Formik](https://formik.org)
- [Axios](https://axios-http.com)
- [Json-Server](https://www.npmjs.com/package/json-server)

## :zap: Executando o Projeto
#### Clonando o projeto
```sh
$ git clone git@github.com:orloke/React-Empresa-Galpao.git
$ cd React-Empresa-Galpao
```

#### Iniciando o Back-End
```sh
$ npm install -g json-server
$ json-server --watch api.json --port 3333

Com isso o banco de dados virtual irá rodar na porta 3333. Essa porta pode ser alterada.
```

#### Iniciando o projeto
```sh
$ npm install
$ npm run dev
```


#### Pagina Inicial

O projeto foi feito usando apenas uma pagina web. Nela é possível alterar entre usuários, transportadoras, produtos e fornecedores. Em cada uma das tabelas são apresentadas tabelas com informações como:

* Nome
* Cpf/Cnpj
* Endereço
* Preço
* Quantidade
* Informações para contato
* {...}

É possível alterar informações já cadastras, cadastrar novos itens e excluir.

## :open_book: Código 

Na construção da aplicação, tentei dividir as responsabilidades entre os arquivos de modo a facilitar o entendimento e manutenção: as funções usadas estão em um arquivo, os tipos em outro arquivo e o mesmo para os hooks. Os componentes também foram feitos em pastas separadas para poderem ser reaproveitados.

Com relação as requisições feitas ao Back, escolhi deixa-las todas no mesmo arquivo api.ts, embora saiba que a boa pratica aconselhe deixar em arquivos separados.

## :grinning: Conclusão

A acredito que o objetivo principal do projeto tenha sido cumprido: uma interface clara e objetiva onde é possível manter o controle de produtos, fornecedores transportadoras e pessoas que usam o galpão. Um ponto de melhoria é exibir em tela outras informações como: horario de entrada e saída, relação entre produto, fornecedor e transportadora, valor total dos produtos armazenados, entre outras.

## :phone: Contatos

Email: [juniordering@hotmail.com](juniordering@hotmail.com)

WhatsApp [(65) 98175-1036](https://wa.me/5565981751036)



