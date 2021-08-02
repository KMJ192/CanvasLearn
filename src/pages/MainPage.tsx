import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { CANVAS_BASE_PATH, DRAWING_PATH } from '../path/pagePath';

import styles from './MainPage.module.scss';

function MainPage() {
  const [page, setPage] = useState({
    canvasBase: false,
    drawing: false
  });

  const toCanvasBasePage = () => {
    setPage({
      ...page,
      canvasBase: true
    });
  }

  const toDrawingPage = () => {
    setPage({
      ...page, 
      drawing: true
    })
  }

  if(page.canvasBase === true){
    return <Redirect to={CANVAS_BASE_PATH} />
  }else if(page.drawing === true){
    return <Redirect to={DRAWING_PATH} />
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
    </div>
    
  );
}

export default React.memo(MainPage);