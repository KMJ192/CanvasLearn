import React, { useEffect, useMemo, useRef, useState } from "react";
import { Redirect } from "react-router";

import styles from "./ChartMake.module.scss";

function drawRect(ctx: CanvasRenderingContext2D) {
  //1번 사각형 그리기
  ctx.fillStyle = "red";
  ctx.fillRect(10, 10, 30, 30);

  //2번 사각형 그리기
  ctx.fillStyle = "blue";
  ctx.fillRect(50, 10, 30, 30);

  //3번 사각형 그리기
  ctx.fillStyle = "green";
  ctx.fillRect(90, 10, 30, 30);
}

function drawCicle(ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.fillStyle = "green";
  ctx.arc(60, 130, 30, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.fillStyle = "blue";
  ctx.arc(160, 130, 30, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

function drawLine(ctx: CanvasRenderingContext2D) {
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(150, 10);
  ctx.lineTo(150, 60);
  ctx.lineCap = "butt";
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(170, 10);
  ctx.lineTo(170, 60);
  ctx.lineCap = "round";
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(190, 10);
  ctx.lineTo(190, 60);
  ctx.lineCap = "square";
  ctx.stroke();
}

function drawLineTo1(ctx: CanvasRenderingContext2D) {
  ctx.lineWidth = 10;
  ctx.lineCap = "butt";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(30, 30);
  ctx.lineTo(30, 90);
  ctx.lineTo(0, 90);
  ctx.lineTo(0, 0);
  ctx.stroke();
}

function drawLineTo(ctx: CanvasRenderingContext2D, offset: number) {
  ctx.setLineDash([5, 5]);
  ctx.lineDashOffset = offset;

  ctx.beginPath();
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 3;
  ctx.moveTo(20, 100);
  ctx.lineTo(50, 150);
  ctx.lineTo(80, 100);
  ctx.stroke();
  ctx.fillStyle = "rgba(130, 130, 10, 0.5)";
  ctx.fill();
}

function ChartMake() {
  const [page, setPage] = useState({
    home: false,
    next: false,
  });
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null | undefined>();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    setCtx(canvasRef.current?.getContext("2d"));
  }, [ctx, canvasRef]);

  useEffect(() => {
    if (ctx) {
      // drawRect(ctx);
      // drawCicle(ctx);
      // drawLine(ctx);
      // drawLineTo1(ctx);
      drawLineTo(ctx, -1);
    }
  }, [ctx]);

  const goHome = () => {
    setPage({
      next: false,
      home: true,
    });
  };

  if (page.home === true) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.canvasBody}>
      <h1>Chart Make</h1>
      <canvas width="600" height="600" id={styles.canvas} ref={canvasRef} />
      <div className={styles.buttonGroup}>
        <button>Next</button>
        <button onClick={goHome}>Home</button>
      </div>
    </div>
  );
}

export default ChartMake;
