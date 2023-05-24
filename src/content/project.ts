export default class projectContent {
  static template = `
    <div class="main_content_container" \${===main.content.contentRouting.isProjectSelected}>
        <div class="main_content_subheading boldunderline">PROJECT CONFIGURATION</div>

        <div class="main_content_subheading">
          <label>Project Title :</label>
          <input type="text" \${value<=>main.project.title}/>
        </div>
        <div class="main_content_subheading">
          <label>Project Description :</label>
          <textarea>\${main.project.description}</textarea>
        </div>
        <div class="main_content_subheading">
          <label>Project Author :</label>
          <input type="text" \${value<=>main.project.author}/>
        </div>
        <div class="main_content_subheading">
          <label>Project URL :</label>
          <a  href="http://\${main.project.url}" title="FOLLOW LINK" target="_blank">\${main.project.url}</a>
        </div>
        <div class="main_content_subheading">
          <label>Project Version :</label>
          <input type="text" \${value<=>main.project.version}/>
        </div>
        <div class="main_content_subheading">
          <label>Icon :</label>
          <img alt="" src="\${main.project.logo}" />
          <a href=# title="UPDATE ICON" \${click@=>main.project.updateIcon}}>update</a>
        </div>
    </div>
  `;
}
