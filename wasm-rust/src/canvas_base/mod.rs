use std::f64;
use wasm_bindgen::JsCast;

pub fn canvas_base(canvas: web_sys::HtmlCanvasElement) {
  //let context: CanvasRenderingContext2d = canvas.get_context("2d").unwrap();

  let context = canvas
    .get_context("2d")
    .unwrap()
    .unwrap()
    .dyn_into::<web_sys::CanvasRenderingContext2d>()
    .unwrap();

  context.begin_path();

  fn calculation(context: &web_sys::CanvasRenderingContext2d){
    // Draw the outer circle.
    context
      .arc(75.0, 75.0, 50.0, 0.0, f64::consts::PI * 2.0)
      .unwrap();

    // Draw the mouth.
    context.move_to(110.0, 75.0);
    context.arc(75.0, 75.0, 35.0, 0.0, f64::consts::PI).unwrap();

    // Draw the left eye.
    context.move_to(65.0, 65.0);
    context
      .arc(60.0, 65.0, 5.0, 0.0, f64::consts::PI * 2.0)
      .unwrap();

    // Draw the right eye.
    context.move_to(95.0, 65.0);
    context
      .arc(90.0, 65.0, 5.0, 0.0, f64::consts::PI * 2.0)
      .unwrap();
  }

  fn draw(context: &web_sys::CanvasRenderingContext2d){
    context.stroke();
  }

  calculation(&context);
  draw(&context);
        
}
