export function fibonacciTs(n: number): number {
    if(n == 1) return 1;
    if(n == 2) return 1;
    return fibonacciTs(n - 1) + fibonacciTs(n - 2);
}
