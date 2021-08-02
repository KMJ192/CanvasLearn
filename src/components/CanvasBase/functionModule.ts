export function setContext(
  context: CanvasRenderingContext2D, 
  canvasRef: HTMLCanvasElement
): CanvasRenderingContext2D {
  context.font = '38pt Arial';
  context.fillStyle = 'cornflowerblue';
  context.strokeStyle = 'blue';

  context.fillText('Hello Canvas', canvasRef.width / 2 - 150, canvasRef.height / 2 + 15);
  context.strokeText('Hello Canvas', canvasRef.width / 2 - 150, canvasRef.height / 2 + 15);

  return context;
}