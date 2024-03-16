"use strict";
import { fibonacciWasm } from "../build/debug.js";
import { fibonacciTs } from "./fibonacci.js";

console.log("Comparação iniciada...");

// let typescriptStart = new Date();
// for (let i = 1; i <= 50; i++) fibonacciTs(i);
// let typescriptEnd = new Date();
// console.log(`Tempo de execução do Typescript em milissegundos : ${(typescriptEnd.getTime() - typescriptStart.getTime())}`);

// let wasmStart = new Date();
// for (let i = 1; i <= 50; i++) fibonacciWasm(i);
// let wasmEnd = new Date();
// console.log(`Tempo de execução do WebAssembly em milissegundos : ${(wasmEnd.getTime() - wasmStart.getTime())}`);


for (let i = 1; i <= 50; i++) {
    const tsLabel = `Typescript: ${i}`;
    console.time(tsLabel);
    fibonacciTs(i);
    console.timeEnd(tsLabel);
  
    const wasmLabel = `Wasm: ${i}`;
    console.time(wasmLabel);
    fibonacciWasm(i);
    console.timeEnd(wasmLabel);
}
