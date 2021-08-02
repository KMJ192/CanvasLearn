import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage';
import CanvasBaseContainer from './containers/CanvasBase/CanvasBaseContainer';
import CanvasDrawingContainer from './containers/Drawing/CanvasDrawingContainer';

import { CANVAS_BASE_PATH, DRAWING_PATH } from './path/pagePath';

import styles from './App.module.scss';

function App() {
  return(
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path={CANVAS_BASE_PATH} exact component={CanvasBaseContainer}/>
          <Route path={DRAWING_PATH} exact component={CanvasDrawingContainer}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default React.memo(App);