import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  CANVAS_BASE_PATH,
  CANVAS_GAME1,
  DRAWING_PATH,
  EVENT_PROCESS_PATH,
  WASM_METHOD,
} from "../path/pagePath";

import styles from "./MainPage.module.scss";

function MainPage() {
  const [page, setPage] = useState({
    canvasBase: false,
    drawing: false,
    eventProcess: false,
    wasmMethod: false,
    canvasGame1: false,
  });

  const toCanvasBasePage = () => {
    setPage({
      canvasBase: true,
      drawing: false,
      eventProcess: false,
      wasmMethod: false,
      canvasGame1: false,
    });
  };

  const toDrawingPage = () => {
    setPage({
      canvasBase: false,
      drawing: true,
      eventProcess: false,
      wasmMethod: false,
      canvasGame1: false,
    });
  };

  const toEventProcessPage = () => {
    setPage({
      canvasBase: false,
      drawing: false,
      eventProcess: true,
      wasmMethod: false,
      canvasGame1: false,
    });
  };

  const toWasmMethodPage = () => {
    setPage({
      canvasBase: false,
      drawing: false,
      eventProcess: false,
      wasmMethod: true,
      canvasGame1: false,
    });
  };

  const toCanvaseGame1Page = () => {
    setPage({
      canvasBase: false,
      drawing: false,
      eventProcess: false,
      wasmMethod: false,
      canvasGame1: true,
    });
  };

  if (page.canvasBase === true) {
    return <Redirect to={CANVAS_BASE_PATH} />;
  } else if (page.drawing === true) {
    return <Redirect to={DRAWING_PATH} />;
  } else if (page.eventProcess === true) {
    return <Redirect to={EVENT_PROCESS_PATH} />;
  } else if (page.wasmMethod === true) {
    return <Redirect to={WASM_METHOD} />;
  } else if (page.canvasGame1 === true) {
    return <Redirect to={CANVAS_GAME1} />;
  }

  return (
    <div className={styles.buttonGroup}>
      <button className={styles.button} onClick={toCanvasBasePage}>
        CanvaseBase
      </button>
      <button className={styles.button} onClick={toDrawingPage}>
        Drawing
      </button>
      <button className={styles.button} onClick={toEventProcessPage}>
        Event
      </button>
      <button className={styles.button} onClick={toWasmMethodPage}>
        wasm method
      </button>
      <button className={styles.button} onClick={toCanvaseGame1Page}>
        canvas game1
      </button>
    </div>
  );
}

export default React.memo(MainPage);
