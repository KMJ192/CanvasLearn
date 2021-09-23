import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  CANVAS_BASE_PATH,
  CHART_MAKE,
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
    chartMake: false,
  });

  const toCanvasBasePage = () => {
    setPage({
      canvasBase: true,
      drawing: false,
      eventProcess: false,
      wasmMethod: false,
      chartMake: false,
    });
  };

  const toDrawingPage = () => {
    setPage({
      canvasBase: false,
      drawing: true,
      eventProcess: false,
      wasmMethod: false,
      chartMake: false,
    });
  };

  const toEventProcessPage = () => {
    setPage({
      canvasBase: false,
      drawing: false,
      eventProcess: true,
      wasmMethod: false,
      chartMake: false,
    });
  };

  const toWasmMethodPage = () => {
    setPage({
      canvasBase: false,
      drawing: false,
      eventProcess: false,
      wasmMethod: true,
      chartMake: false,
    });
  };

  const toCanvaseGame1Page = () => {
    setPage({
      canvasBase: false,
      drawing: false,
      eventProcess: false,
      wasmMethod: false,
      chartMake: true,
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
  } else if (page.chartMake === true) {
    return <Redirect to={CHART_MAKE} />;
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
      {/* <button className={styles.button} onClick={toWasmMethodPage}>
        wasm method
      </button> */}
      <button className={styles.button} onClick={toCanvaseGame1Page}>
        chart make
      </button>
    </div>
  );
}

export default React.memo(MainPage);
