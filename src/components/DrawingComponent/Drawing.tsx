import React, { useEffect, useRef, useState } from 'react';
import { Redirect } from 'react-router';

import { contextDrawing } from './functionModule';

import styles from './Drawing.module.scss';
import { EVENT_PROCESS_PATH } from '../../path/pagePath';

function Drawing() {
  const [mount, setMount] = useState(true);
  const [page, setPage] = useState({
    home: false,
    next: false
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let context = canvasRef.current?.getContext('2d');
    let fn: Function;
    if (context && canvasRef.current && mount) {
      [context, fn] = contextDrawing(context, canvasRef.current);
      setMount(false);
    }
    setInterval(() => {
      fn();
    }, 1000);
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
    return <Redirect to={EVENT_PROCESS_PATH} />
  }
  if (page.home === true) {
    return <Redirect to='/' />
  }

  return (
    <div className={styles.canvasBody}>
      <h1>Drawing</h1>
      <canvas id={styles.canvas} ref={canvasRef} />
      <div className={styles.buttonGroup}>
        <button
          onClick={nextScreen}
        >Next</button>
        <button
          onClick={GoHome}
        >Home</button>
      </div>
    </div>
    
  )
}

export default Drawing
