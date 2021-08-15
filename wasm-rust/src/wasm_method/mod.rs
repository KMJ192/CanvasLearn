pub mod event_listener;

pub fn call_wasm_method(){
  use event_listener::mouse_event;
  mouse_event();
}