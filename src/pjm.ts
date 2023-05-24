import { UI } from "@peasy-lib/peasy-ui";
import { State } from "../state";
import { readTextFile } from "@tauri-apps/api/fs";
import logo from "./assets/logo.png";

const template = `
    <div>
        <span class="pjm_divHeader">Projects</span>
        <span class="pjm_version">v \${app.version}</span>
        <div class="pjm_projectlist">
          <div class="pjm_project_entry \${prj.css}" data-id="\${prj.$index}" \${prj<=* pjm.projects:id} \${click@=>pjm.selectProject}>
            <img class="pjm_project_logo" alt="" src="\${prj.icon}"/>
            <div>TITLE: \${prj.title}</div>
            <div>PATH: \${prj.path}</div>
          </div>
        </div>
        <div class="pjm_buttondiv">
          <a class="pjm_button" \${click@=>pjm.new}>NEW</a>
          <a class="pjm_button \${pjm.openDisabled}" \${click@=>pjm.open}>OPEN</a>
          <a class="pjm_button" \${click@=>pjm.exit}>EXIT</a>
        </div>
    </div>
`;
const model = State.state;
UI.create(document.body, template, model);
UI.initialize(1000 / 60);

//read json file and load projects into state
const settingsText = await readTextFile("woebegone.json");
const settingsJSON = JSON.parse(settingsText);
settingsJSON.projectlist.forEach((proj: any) => {
  if (proj.icon != "default") {
    model.pjm.projects.push(proj);
  } else {
    model.pjm.projects.push({
      id: proj.id,
      title: proj.title,
      path: proj.path,
      icon: logo,
      css: proj.css,
    });
  }
});
console.log(model);
