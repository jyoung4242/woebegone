export default class viewportContent {
  static template = `
      <div class="main_content_container" \${===main.content.contentRouting.isViewportSelected}>
      
        <div class="main_content_subheading boldunderline">VIEWPORT CONFIGURATION</div>
        <div class="main_content_subheading bottomborder">
          <label>Size :</label>
          <input type="text" \${value<=>main.content.viewport.width}/>
          <input type="range" min="1" max="2000" step="1" \${value<=>main.content.viewport.width}/>
          <label>px Width</label>
          <input type="text" \${value<=>main.content.viewport.height}/>
          <input type="range" min="1" max="1500" step="1" \${value<=>main.content.viewport.height}/>
          <label>px Height</label>
        </div>

        <div class="main_content_subheading">
          <label>Viewport Border :</label>
          <input type="text" \${value<=>main.content.viewport.border.width}/>
          <input type="range" min="0" max="60" step="1" \${value<=>main.content.viewport.border.width}/>
          <label>px Width</label>
          <input type="text" \${value<=>main.content.viewport.border.radius}/>
          <input type="range" min="0" max="60" step="1" \${value<=>main.content.viewport.border.radius}/>
          <label>px Radius</label>
        </div>

        <div class="main_content_subheading ">
          <label>Border Color:</label>
          <input type="color" \${value<=>main.content.viewport.border.color}/>
        </div>
        
        <div class="main_content_subheading bottomborder">
          <label>Border Image:</label>
          <label>enable</label>
          <input type="checkbox" \${checked<=>main.content.viewport.border.useImage}/>
          <button \${click@=>main.content.viewport.border.loadborder}>Load Image</button>
          <input type="range" min="0" max="60" step="1" \${value<=>main.content.viewport.border.sliceW}/>
          <input type="range" min="0" max="60" step="1" \${value<=>main.content.viewport.border.width}/>
          <input type="range" min="0" max="60" step="1" \${value<=>main.content.viewport.border.offset}/>
        </div>

        <div class="main_content_subheading  bottomborder">
          <label>Viewport Background Color:</label>
          <input type="color" \${value<=>main.content.viewport.backgroundColor}/>
        </div>
        
        <div class="main_content_subheading bottomborder">
          <label>Camera:</label>
          <select>Choose Object</select>
        </div>

        <div class="main_content_subheading boldunderline">VIEWPORT PREVIEW</div>
        <label>Preview Scaling: </label>
        <input type="range" min="0.1" max="2" step=".1" \${value<=>main.content.viewport.testScale}/>
        <div style="width: \${main.content.viewport.testWidth}px; height: \${main.content.viewport.testHeight}px; border: \${main.content.viewport.border.width}px solid \${main.content.viewport.border.color}; border-radius: \${main.content.viewport.border.radius}px; background-color: \${main.content.viewport.backgroundColor}; border-image-source: url('\${main.content.viewport.border.imageURL}'); border-image-slice: \${main.content.viewport.border.sliceW};  border-image-outset: \${main.content.viewport.border.offset}px \${main.content.viewport.border.offset}px \${main.content.viewport.border.offset}px \${main.content.viewport.border.offset}px; ">
        </div>


        </div>
    `;
}
