import React, { useEffect, useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { Context } from './functionModule';
import { DRAWING_PATH } from '../../path/pagePath';

import styles from './CanvasBase.module.scss';

function CanvasBase() {
  const [page, setPage] = useState({
    next: false,
    home: false
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const context = canvasRef.current?.getContext('2d');
    if (context && canvasRef.current) {
      Context(context, canvasRef);
    }
  }, [canvasRef]);

  const nextScreen = () => {
    setPage({
      ...page,
      next: true
    });
  }
  const GoHome = () => {
    setPage({
      ...page,
      home: true
    });
  }

  if (page.next === true) {
    return <Redirect to={DRAWING_PATH} />
  }

  if (page.home === true) {
    return <Redirect to='/' />
  }

  return (
    <div className={styles.canvasBody}>
      <h1>Canvas Base</h1>
      <canvas ref={canvasRef} />
      <div className={styles.buttonGroup}>
        <button 
          onClick={nextScreen}
        >Next</button>
        <button
          onClick={GoHome}
        >Home</button>
      </div>
    </div>
  );
}

export default React.memo(CanvasBase);
