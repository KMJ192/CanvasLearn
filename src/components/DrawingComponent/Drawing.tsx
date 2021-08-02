import React, { useEffect, useRef, useState } from 'react';
import { Redirect } from 'react-router';

import styles from './Drawing.module.scss';

function canvasScreen(
  context: CanvasRenderingContext2D, 
  canvasRef: React.RefObject<HTMLCanvasElement>
){
  
}

function Drawing() {
  const [page, setPage] = useState({
    home: false,
    next: false
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const context = canvasRef.current?.getContext('2d');
    if (context && canvasRef.current) {
      canvasScreen(context, canvasRef);
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
    //return <Redirect to={} />
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
