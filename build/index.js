"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug_js_1 = require("../build/debug.js");
const fibonacci_js_1 = require("./fibonacci.js");
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
    (0, fibonacci_js_1.fibonacciTs)(i);
    console.timeEnd(tsLabel);
    const wasmLabel = `Wasm: ${i}`;
    console.time(wasmLabel);
    (0, debug_js_1.fibonacciWasm)(i);
    console.timeEnd(wasmLabel);
}
