use std::f64;
use wasm_bindgen::JsCast;

pub fn canvas_base(canvas: web_sys::HtmlCanvasElement) {
  let context = canvas
    .get_context("2d")
    .unwrap()
    .unwrap()
    .dyn_into::<web_sys::CanvasRenderingContext2d>()
    .unwrap();

  // let canvas_width: u32 = canvas.width();
  // let canvas_height: u32 = canvas.height();
  // let font_height: u32 = 15;
  // let margin: u32 = 105;
  // let hand_truncation: u32 = canvas_width;
  // let hour_hand_truncation: u32 = canvas_width / 5;
  // let numeral_spacing: u32 = 20;
  // let radius = (canvas_width / 2) - margin as u32;
  // let hand_radius: u32 = radius + numeral_spacing;

  context.begin_path();
  // fn draw_cicle(context: &web_sys::CanvasRenderingContext2d){
  //   context.arc((canvas_width / 2) as f64, canvas_height / 2, f64::from(*radius), 0.0, f64::consts::PI);
  // }  

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
