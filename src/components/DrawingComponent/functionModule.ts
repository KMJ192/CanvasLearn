/**
 * context method
 * context.arc() => 원을 그리는 메서드(너비, 높이, 반경, 시작지점, 종료지점, 반대/정방향);
 * context.beginPath() => 새로운 경로 생성
 * context.clearRect() => 특정 부분을 지우는 직사각형
 * context.fill() => 경로의 내부를 채워서 내부가 채워진 도형을 그림
 * context.fillText(문자열, x좌표, y좌표) => 주어진 위치에 text를 채움
 * context.lineTo(x좌표, y좌표) => 직선
 * context.moveTo(x좌표, y좌표) => 지정된 좌표로 도형을 이동
 * context.stroke() => 도형을 출력
 */

export function contextDrawing(
  context: CanvasRenderingContext2D, 
  canvasRef: HTMLCanvasElement
): [CanvasRenderingContext2D, () => void]{
  const FONT_HEIGHT = 15;
  const MARGIN = 105;
  const HAND_TRUNCATION = canvasRef.width / 25;
  const HOUR_HAND_TRUNCATION = canvasRef.width / 5;
  const NUMERAL_SPACING = 20;
  const RADIUS = canvasRef.width / 2 - MARGIN;
  const HAND_RADIUS = RADIUS + NUMERAL_SPACING;

  function drawCircle(){
    context.beginPath();
    context.arc(canvasRef.width / 2, canvasRef.height / 2, RADIUS, 0, Math.PI * 2, true);
    context.stroke();
  }

  function drawNumerals(){
    let numerals: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let angle = 0;
    let numeralWidth = 0;
    
    numerals.forEach((numeral: number) => {
      angle = Math.PI / 6 * (numeral - 3);
      numeralWidth = context.measureText(String(numeral)).width;
      context.fillText(
        String(numeral), 
        (canvasRef.width / 2) + (Math.cos(angle) * HAND_RADIUS) - (numeralWidth / 2),
        (canvasRef.height / 2) + (Math.sin(angle) * HAND_RADIUS) + (FONT_HEIGHT / 3)
      );
    });
  }

  function drawCenter() {
    context.beginPath();
    context.arc(canvasRef.width / 2, canvasRef.height / 2, 1, 0, Math.PI * 2, true);
    context.fill();
  }

  function drawHand(loc: number, isHour: boolean) {
    const angle = (Math.PI * 2) * (loc / 60) - Math.PI / 2;
    const handRadius = isHour ? 
      RADIUS - HAND_TRUNCATION-HOUR_HAND_TRUNCATION :
      RADIUS - HAND_TRUNCATION;
    context.moveTo(canvasRef.width / 2, canvasRef.height / 2);
    context.lineTo(
      canvasRef.width / 2 + Math.cos(angle) * handRadius,
      canvasRef.height / 2 + Math.sin(angle) * handRadius
    );
    context.stroke();
  }

  function drawHands() {
    const date = new Date();
    let hour = date.getHours();

    hour = hour > 12 ? hour - 12 : hour;

    drawHand(hour * 5 + (date.getMinutes() / 60) * 5, true);
    drawHand(date.getMinutes(), false);
    drawHand(date.getSeconds(), false);
  }

  function drawClock() {
    context.clearRect(0, 0, canvasRef.width, canvasRef.height);
    drawCircle();
    drawCenter();
    drawHands();
    drawNumerals();
  }
  
  return [context, drawClock];
}
