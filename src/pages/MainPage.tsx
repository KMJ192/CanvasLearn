import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { CANVAS_BASE_PATH, DRAWING_PATH, EVENT_PROCESS_PATH, WASM_METHOD } from '../path/pagePath';

import styles from './MainPage.module.scss';

function MainPage() {
  const [page, setPage] = useState({
    canvasBase: false,
    drawing: false,
    eventProcess: false,
    wasmMethod: false
  });

  const toCanvasBasePage = () => {
    setPage({
      canvasBase: true,
      drawing: false,
      eventProcess: false,
      wasmMethod: false
    });
  }

  const toDrawingPage = () => {
    setPage({
      canvasBase: true,
      drawing: true,
      eventProcess: false,
      wasmMethod: false
    });
  }

  const toEventProcessPage = () => {
    setPage({
      canvasBase: true,
      drawing: false,
      eventProcess: true,
      wasmMethod: false
    });
  }

  const toWasmMethodPage = () => {
    setPage({
      canvasBase: false,
      drawing: false,
      eventProcess: false,
      wasmMethod: true
    });
  }

  if(page.canvasBase === true) {
    return <Redirect to={CANVAS_BASE_PATH} />
  } else if(page.drawing === true){
    return <Redirect to={DRAWING_PATH} />
  } else if(page.eventProcess === true) {
    return <Redirect to={EVENT_PROCESS_PATH} />
  } else if(page.wasmMethod == true) {
    return <Redirect to={WASM_METHOD} />
  }

  return (
    <div className={styles.buttonGroup}>
      <button
        className={styles.button}
        onClick={toCanvasBasePage}
      >CanvaseBase</button>
      <button
        className={styles.button} 
        onClick={toDrawingPage}
      >Drawing</button>
      <button
        className={styles.button} 
        onClick={toEventProcessPage}
      >Event</button>
      <button
        className={styles.button} 
        onClick={toWasmMethodPage}
      >
        wasm method
      </button>
    </div>
    
  );
}

export default React.memo(MainPage);