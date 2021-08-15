import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage';
import CanvasBaseContainer from './containers/CanvasBase/CanvasBaseContainer';
import CanvasDrawingContainer from './containers/Drawing/CanvasDrawingContainer';
import EventProcessContainer from './containers/EventProcess/EventProcessContainer';

import { 
  CANVAS_BASE_PATH, 
  DRAWING_PATH,
  EVENT_PROCESS_PATH,
  WASM_METHOD
} from './path/pagePath';

import styles from './App.module.scss';
import WasmMethodContainer from './containers/WasmMethod/WasmMethodContainer';


function App() {
  return(
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path={CANVAS_BASE_PATH} exact component={CanvasBaseContainer}/>
          <Route path={DRAWING_PATH} exact component={CanvasDrawingContainer}/>
          <Route path={EVENT_PROCESS_PATH} exact component={EventProcessContainer} />
          <Route path={WASM_METHOD} exact component={WasmMethodContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default React.memo(App);