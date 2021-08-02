import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router';
import styles from './EventProcess.module.scss';

function EventProcess() {
  const [page, setPage] = useState({
    home: false,
    next: false
  })
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  if (page.home === true) {
    return <Redirect to='/' />
  } 
  if(page.next === true) {

  }

  return (
    <div className={styles.canvasBody}>
      <h1>Event</h1>
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

export default EventProcess
