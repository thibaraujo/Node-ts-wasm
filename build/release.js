async function instantiate(module, imports = {}) {
  const { exports } = await WebAssembly.instantiate(module, imports);
  const memory = exports.memory || imports.env.memory;
  const adaptedExports = Object.setPrototypeOf({
    fibonacciWasm(n) {
      // assembly/index/fibonacciWasm(u32) => u32
      return exports.fibonacciWasm(n) >>> 0;
    },
  }, exports);
  return adaptedExports;
}
export const {
  memory,
  fibonacciWasm,
} = await (async url => instantiate(
  await (async () => {
    try { return await globalThis.WebAssembly.compileStreaming(globalThis.fetch(url)); }
    catch { return globalThis.WebAssembly.compile(await (await import("node:fs/promises")).readFile(url)); }
  })(), {
  }
))(new URL("release.wasm", import.meta.url));
