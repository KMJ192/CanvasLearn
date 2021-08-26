import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Redirect } from 'react-router';
import styles from './EventProcess.module.scss';

import { WASM_METHOD } from '../../../src/path/pagePath';

interface Coordinate { 
  x: number;
  y: number;
}

function EventProcess() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [page, setPage] = useState({
    home: false,
    next: false
  });
  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(undefined);
  const [isPainting, setIsPainting] = useState(false);

  const getCoordinates = (e: MouseEvent): Coordinate | undefined => {
    return {
      x: e.offsetX - 95,
      y: e.offsetY - 90
    }
  }

  const drawLine = (originMousePos: Coordinate, newMousePos: Coordinate) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext('2d');
    if (context) {
      context.strokeStyle = 'red';
      context.lineJoin = 'round';
      context.lineWidth = 1;

      context.beginPath();
      context.moveTo(originMousePos.x,  originMousePos.y);
      context.lineTo(newMousePos.x, newMousePos.y);
      context.closePath();

      context.stroke();
    }  
  };

  const startPaint = useCallback((e: MouseEvent) => { 
    const coordinates = getCoordinates(e);
    if (coordinates) {
      setIsPainting(true);
      setMousePosition(coordinates);
    }
  }, [isPainting, mousePosition]);

  const painting = useCallback((e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isPainting) {
      const newMousePosition: Coordinate | undefined = getCoordinates(e);
      if(mousePosition && newMousePosition) {
        drawLine(mousePosition, newMousePosition);
        setMousePosition(newMousePosition);
      }
    }
  }, [isPainting, mousePosition]);

  const exitPaint = useCallback(() => {
    setIsPainting(false);
  }, [isPainting]);
  
  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    canvas.addEventListener('mousedown', startPaint);
    canvas.addEventListener('mousemove', painting);
    canvas.addEventListener('mouseup', exitPaint);
    canvas.addEventListener('mouseleave', exitPaint);
    
    return () => {
      canvas.removeEventListener('mousedown', startPaint);
      canvas.removeEventListener('mousemove', painting);
      canvas.removeEventListener('mouseup', exitPaint);
      canvas.removeEventListener('mouseleave', exitPaint);
    }
  }, [startPaint, painting, canvasRef]);

  const nextScreen = () => {
    setPage({
      home: false,
      next: true
    });
  }

  const GoHome = () => {
    setPage({
      home: true,
      next: false
    });
  }

  if (page.home === true) {
    return <Redirect to='/' />
  } 
  if(page.next === true) {
    return <Redirect to={WASM_METHOD} />
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

export default EventProcess;
