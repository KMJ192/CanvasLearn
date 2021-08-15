use wasm_bindgen::prelude::*;
extern crate js_sys;
pub mod canvas_base;
pub mod mouse_event;
pub mod wasm_method;

#[cfg(test)]
mod tests {
  #[test]
  fn it_works() {
    assert_eq!(2 + 2, 4);
  }
}

mod display {
  pub fn print<T>(arg: T) -> T{
    arg
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

#[wasm_bindgen]
pub fn wasm_method() {
  use wasm_method::*;
  call_wasm_method();
}

#[wasm_bindgen]
pub fn print() -> String {
  String::from(display::print("test"))
}

#[wasm_bindgen]
pub fn console_log(arg: js_sys::Array) {
  web_sys::console::log(&arg);
}

#[wasm_bindgen]
pub fn console_log_1(arg: String) {
  web_sys::console::log_1(&arg.into());
}

#[wasm_bindgen]
pub fn console_log_2(arg1: String, arg2: String) {
  web_sys::console::log_2(&arg1.into(),&arg2.into());
}