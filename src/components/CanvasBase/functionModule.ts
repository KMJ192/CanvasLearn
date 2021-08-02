export function Context(
  context: CanvasRenderingContext2D, 
  canvasRef: React.RefObject<HTMLCanvasElement>
) {
  context.font = '38pt Arial';
  context.fillStyle = 'cornflowerblue';
  context.strokeStyle = 'blue';

  if(canvasRef.current){
    context.fillText('Hello Canvas', canvasRef.current.width / 2 - 150, canvasRef.current.height / 2 + 15);
    context.strokeText('Hello Canvas', canvasRef.current.width / 2 - 150, canvasRef.current.height / 2 + 15);
  }

  return context;
}