import React, { useCallback, useEffect } from 'react'

function WasmMethodComponent() {
  const wasmMethod = import('../../../wasm-rust/pkg');
  wasmMethod.then(module => {
    module.console_log(["arg1", "arg2", "arg3"]);
    module.console_log_1("arg");
    module.console_log_2("arg1", "arg2");
  });

  const mouseClick = useCallback(() => {
    console.log('click');
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', mouseClick);
    return () => {
      document.removeEventListener('mousedown', mouseClick);
    }
  }, []);

  return (
    <div>
      test
    </div>
  )
}

export default WasmMethodComponent
