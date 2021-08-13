use wasm_bindgen::JsCast;

pub fn mouse_event(canvas: web_sys::HtmlCanvasElement) {
  let context = canvas    
    .get_context("2d")
    .unwrap()
    .unwrap()
    .dyn_into::<web_sys::CanvasRenderingContext2d>()
    .unwrap();

  context.begin_path();
}