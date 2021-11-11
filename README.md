# Jussi landing page

##### Site feito com base em figma

Link do figma [aqui](https://www.figma.com/file/O9AEeYB6ZWyMTZzMZhvjaY/loja-vtex-jussi?node-id=1%3A2)

Link para API consumida [aqui](https://github.com/azharimm/phone-specs-api) (MobileSpecs)

---
## Processo para execução:

Baixe o repositório e na pasta raiz execute o seguinte comando para baixar as dependências: 

```bash
$ npm install
```

Para iniciar o site execute o comando abaixo:

```bash
$ npm start
```

**OBS:** caso o site não abra no seu navegador acesse *http://localhost:3000/*

Para rodar os testes automatizados execute o comando:

```
$ npm test
```

___

## TODO's:


- [ ] Criar testes unitários para componente "OurSolutions"
- [ ] Criar testes unitários para componente "SolutionCard"
- [ ] Adicionar funcionalidade de pesquisa no componente header
    - OBS: com base na url: `https://api-mobilespecs.azharimm.site/v2/search?query={query}`
- [ ] Adicionar testes automatizados da funcionalidade de pesquisa
- [ ] Criar tela de detalhes da solução.
- [ ] Adicionar animações na tela
- [ ] Aplicar reutilização de CSS