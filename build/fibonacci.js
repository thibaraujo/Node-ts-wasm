"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibonacciTs = void 0;
function fibonacciTs(n) {
    if (n == 1)
        return 1;
    if (n == 2)
        return 1;
    return fibonacciTs(n - 1) + fibonacciTs(n - 2);
}
exports.fibonacciTs = fibonacciTs;
