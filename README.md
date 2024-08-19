# Projeto JavaScript Setup

Este é um setup básico para projetos JavaScript usando Node.js, com suporte a testes, linting, formatação e hooks de Git. Este projeto é configurado com os seguintes tools:

- `Node.js` e `pnpm` para gerenciamento de pacotes.
- `Jest` para testes.
- `ESLint` e `Prettier` para linting e formatação de código.
- `Husky` e `lint-staged` para garantir a qualidade do código antes dos commits.

## Estrutura de Pastas

A estrutura de pastas do projeto é a seguinte:

```
/
├── src/                  # Código fonte do projeto
│   └── index.js          # Arquivo principal do projeto
├── tests/                # Testes do projeto
│   └── index.test.js     # Testes principais
├── .eslintrc.cjs         # Configuração do ESLint
├── .prettierrc           # Configuração do Prettier
├── package.json          # Gerenciador de pacotes e scripts
├── pnpm-lock.yaml        # Lockfile do pnpm
└── README.md             # Este arquivo

```

## Instalação

Clone o repositório:
```bash
git clone https://github.com/iscarloscoder/jssetup
cd jssetup
```

Instale as dependências:
```bash
pnpm install
```

## Scripts

- `start`: Inicia o projeto.
```bash
pnpm start
```

- `test`: Executa os testes com Jest.
```bash
pnpm test
```

- `lint`: Verifica o código com ESLint.
```bash
pnpm lint
```

- `prettier`: Formata o código com Prettier.
```bash
pnpm prettier
```

## Configuração do Husky e lint-staged

O Husky é configurado para rodar o lint-staged antes dos commits. Isso garante que o código esteja formatado e sem erros de linting antes de ser adicionado ao repositório.

- `lint-staged`: Formata e corrige o código antes de cada commit:
  - `Prettier`: Formata o código.
  - `ESLint`: Corrige problemas encontrados pelo ESLint.

## Configuração do ESLint e Prettier

- `ESLint`: Usa a configuração recomendada do ESLint e do plugin Prettier para garantir que o código siga boas práticas e esteja livre de erros.
- `Prettier`: Usa a configuração para formatar o código com as preferências definidas (por exemplo, singleQuote: true, semi: false).

## Testes

Os testes são escritos em Jest e podem ser executados com o comando pnpm test. Adicione seus testes na pasta `tests/`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias para este setup. Crie uma branch para suas mudanças e abra um pull request.