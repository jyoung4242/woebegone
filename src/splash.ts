import { UI } from "@peasy-lib/peasy-ui";
import { invoke } from "@tauri-apps/api/tauri";
import { State } from "../state";
import logo from "./assets/logo.png";

const template = `
<div>
    
    <div class="splsh_flexline">
      <img class="splsh_logo" alt="" src="\${app.logo}"/>
      <div class="splsh_header">WOEBEGONE </div>
    </div>
    
    <div class="splsh_subheader">GAME UTILITY</div>
    <div class="splsh_version">version \${app.version}</div>
</div>`;
const model = State.state;

UI.create(document.body, template, model);
UI.initialize(1000 / 60);

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(async () => {
    await invoke("close_splash");
  }, 4500);
});

model.app.logo = logo;
