use wasm_bindgen::prelude::*;
pub mod canvas_base;
pub mod mouse_event;

#[cfg(test)]
mod tests {
  #[test]
  fn it_works() {
    assert_eq!(2 + 2, 4);
  }
}


#[wasm_bindgen]
pub fn wasm_canvas_base(canvas: web_sys::HtmlCanvasElement) {
    use canvas_base::canvas_base;
    canvas_base(canvas);
}

#[wasm_bindgen]
pub fn wasm_mouse_event(canvas: web_sys::HtmlCanvasElement) {
  use mouse_event::mouse_event;
  mouse_event(canvas);
}