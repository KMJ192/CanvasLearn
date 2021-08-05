use std::f64;
use wasm_bindgen::JsCast;

pub fn canvas_base(canvas: web_sys::HtmlCanvasElement) {
  let context = canvas
    .get_context("2d")
    .unwrap()
    .unwrap()
    .dyn_into::<web_sys::CanvasRenderingContext2d>()
    .unwrap();

  context.begin_path();

  let width: u32 = canvas.width();
  let height: u32 = canvas.height();
  let margin: f64 = 105.0;
  let radius = (width / 2) as f64 - margin;
  
  let draw_cicle = || {
    // Draw the outer circle.
    context
      .arc((width / 2) as f64, (height / 2) as f64, radius, 0.0, f64::consts::PI * 2.0)
      .unwrap();
  };

  let calculation = || {
    // Draw the mouth.
    context.move_to(width as f64 / 2.0 + 36.0, height as f64 / 2.0);
    context.arc(width as f64 / 2.0, height as f64 / 2.0, width as f64 / 8.5, 0.0, f64::consts::PI).unwrap();

    // Draw the left eye.
    context.move_to(width as f64 / 2.0 + 20.0, height as f64 / 2.5);
    context
      .arc(width as f64 / 2.0 + 15.0, height as f64 / 2.5, 5.0, 0.0, f64::consts::PI * 2.0)
      .unwrap();

    // Draw the right eye.
    context.move_to(width as f64 / 2.2 + 5.0, height as f64 / 2.5);
    context
      .arc(width as f64 / 2.2, height as f64 / 2.5, 5.0, 0.0, f64::consts::PI * 2.0)
      .unwrap();
  };

  fn draw(context: &web_sys::CanvasRenderingContext2d){
    context.stroke();
  }
  
  draw_cicle();
  calculation();
  draw(&context);
}
