(module
 (type $0 (func (param i32) (result i32)))
 (memory $0 0)
 (export "fibonacciWasm" (func $assembly/index/fibonacciWasm))
 (export "memory" (memory $0))
 (func $assembly/index/fibonacciWasm (param $0 i32) (result i32)
  local.get $0
  i32.const 1
  i32.eq
  if
   i32.const 1
   return
  end
  local.get $0
  i32.const 2
  i32.eq
  if
   i32.const 1
   return
  end
  local.get $0
  i32.const 1
  i32.sub
  call $assembly/index/fibonacciWasm
  local.get $0
  i32.const 2
  i32.sub
  call $assembly/index/fibonacciWasm
  i32.add
 )
)
