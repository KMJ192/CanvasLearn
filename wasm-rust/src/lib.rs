use wasm_bindgen::prelude::*;
pub mod canvas_base;

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
