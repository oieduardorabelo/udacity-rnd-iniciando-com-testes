# Udacity React Nanodegree - Iniciando com Testes em React

Esse é o exemplo **completo** de testes de integração.

Você pode verificar a solução completa na pasta [e2e](./e2e).

Para iniciar os exemplos na sua máquina local, siga os passos a seguir:

### 1. Clone o repositório

Faço o clone desse repositório, navegue até a pasta `/exemplo-01-completo`.

### 2. Instale as dependências

- _Navegador Firefox_
- _Node/NPM ou Yarn_

Você pode usar _npm_ ou _yarn_ (no nosso exemplo iremos utilizar o Yarn):

```bash
yarn install # para instalar as depêndencias
yarn start # para iniciar o servidor local
```

Isso irá iniciar o _create-react-app_ para o nosso exemplo.

Você também precisará instalar o navegador Firefox para rodar os testes em um navegador real.

### 3. Abre outra sessão do seu terminal

Na etapa anterior, nos iniciamos o _create-react-app_, agora, nós precisamos abrir uma nova janela/aba no seu terminal favorito, navegar novamente até a pasta `/exemplo-01-completo` e executar:

```
yarn test:e2e
```

Isso irá executar o TestCafé abrindo o Firefox instalado na sua máquina.
