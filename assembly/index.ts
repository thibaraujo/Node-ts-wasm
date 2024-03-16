export function fibonacciWasm(n: u32): u32 {
  if(n == 1) return 1;
  if(n == 2) return 1;
  return fibonacciWasm(n - 1) + fibonacciWasm(n - 2);
}