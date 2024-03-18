# Fibonacci Sequence Comparison: TypeScript vs WebAssembly

Este é um projeto que demonstra uma comparação de desempenho entre a implementação da sequência de Fibonacci em TypeScript (TS) e em WebAssembly (Wasm), utilizando um setup Node.js + TypeScript + AssemblyScript.

## Pré-requisitos

Antes de executar a aplicação, certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo e instalá-lo a partir do [site oficial do Node.js](https://nodejs.org/).

## Instalação

1. Clone este repositório em sua máquina local:

    ```bash
    git clone https://github.com/thibaraujo/Node-ts-wasm.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd node-ts-wasm
    ```

3. Instale as dependências do projeto usando npm:

    ```bash
    npm install
    ```

## Uso

### Compilação e Construção

Para compilar o código TypeScript em AssemblyScript e gerar os arquivos JavaScript e WebAssembly, utilize o seguinte comando:

```bash
npm run build
```
Este comando limpará o diretório de construção, compilará os arquivos TypeScript e AssemblyScript e gerará os artefatos necessários para a execução da aplicação.

### Desenvolvimento

Após o build, para iniciar o servidor de desenvolvimento e observar as alterações nos arquivos, utilize o seguinte comando:

```bash
npm run dev
```

Este comando iniciará o servidor e reiniciará automaticamente sempre que houver uma alteração nos arquivos do projeto.

## Tecnologias utilizadas
* [Node.js](https://nodejs.org/)
* [AssemblyScript](https://github.com/AssemblyScript)
* [ts-node](https://typestrong.org/ts-node/docs/)
