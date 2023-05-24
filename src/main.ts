//import { invoke } from "@tauri-apps/api/tauri";
import { UI } from "@peasy-lib/peasy-ui";
import { State } from "../state";
import logo from "./assets/logo.png";
import menu from "./assets/menu.png";
import play from "./assets/play.png";

import actionContent from "./content/actions";
import assetContent from "./content/assets";
import cutsceneContent from "./content/cutscene";
import gamedataContent from "./content/gamedata";
import objectContent from "./content/object";
import projectContent from "./content/project";
import sceneContent from "./content/scenes";
import UIContent from "./content/ui";
import viewportContent from "./content/viewport";

let template = `
<div class="main_grid">
  <div class="main_logobox">
    <img class="main_menu" alt="" src="${menu}" \${click@=>main.toggleSidebar}/>
    <img class="main_logo" alt="" src="${logo}"/>
  </div>
  <div class="main_header">Project: \${main.project.title}</div>
  <div class="main_sidebar \${main.sidebar.css} " style="\${main.sidebar.cssPointer}">
    <div class="main_sidebar_sub">
      <a class="main_sidebar_link \${main.sidebar.projectLinkCSS}" data-id="prj" \${click@=>main.sidebar.selectLink}>Project</a>
      <a class="main_sidebar_link \${main.sidebar.viewportLinkCSS}" data-id="vwp" \${click@=>main.sidebar.selectLink}>Viewport</a>
      <a class="main_sidebar_link \${main.sidebar.assetsLinkCSS}" data-id="ass" \${click@=>main.sidebar.selectLink}>Assets</a>
      <a class="main_sidebar_link \${main.sidebar.scenesLinkCSS}" data-id="scn" \${click@=>main.sidebar.selectLink}>Scenes</a>
      <a class="main_sidebar_link \${main.sidebar.objectsLinkCSS}" data-id="obj" \${click@=>main.sidebar.selectLink}>Objects</a>
      <a class="main_sidebar_link \${main.sidebar.cutsceneLinkCSS}" data-id="csn" \${click@=>main.sidebar.selectLink}>Cut Scenes</a>
      <a class="main_sidebar_link \${main.sidebar.actionsLinkCSS}" data-id="act" \${click@=>main.sidebar.selectLink}>Actions</a>
      <a class="main_sidebar_link \${main.sidebar.gamedataLinkCSS}" data-id="gdt" \${click@=>main.sidebar.selectLink}>Game Data</a>
      <a class="main_sidebar_link \${main.sidebar.UILinkCSS}"  data-id="uix" \${click@=>main.sidebar.selectLink}>UI</a>
    </div>
    <div>
      <a>
        <img class="main_playButton" alt=""  title="Compile Project" src="${play}"/>
      </a>
    </div>
    
  </div>
  <div class="main_content">
     ${projectContent.template}
     ${viewportContent.template}
     ${assetContent.template}
     ${sceneContent.template}
     ${objectContent.template}
     ${cutsceneContent.template}
     ${actionContent.template}
     ${gamedataContent.template}
     ${UIContent.template}
  </div>
</div> 
`;

const model = State.state;
UI.create(document.body, template, model);
UI.initialize(1000 / 60);

/* 
let greetInputEl: HTMLInputElement | null;
let greetMsgEl: HTMLElement | null;

async function greet() {
  if (greetMsgEl && greetInputEl) {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    greetMsgEl.textContent = await invoke("greet", {
      name: greetInputEl.value,
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document
    .querySelector("#greet-button")
    ?.addEventListener("click", () => greet());
});
 */
