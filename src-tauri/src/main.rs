use tauri::Manager;

#[tauri::command]
async fn close_splash(window: tauri::Window) {
    // Close splashscreen
    if let Some(splashscreen) = window.get_window("splashscreen") {
      splashscreen.close().unwrap();
    }
    // Show main window
    window.get_window("projectmgr").unwrap().show().unwrap();
  }
  
  #[tauri::command]
  async fn close_pjm(window: tauri::Window) {
    // Close splashscreen
    if let Some(pgmscreen) = window.get_window("projectmgr") {
        pgmscreen.close().unwrap();
    }
    // Show main window
    window.get_window("main").unwrap().show().unwrap();
  }

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![close_splash,close_pjm])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
