import { exit } from "@tauri-apps/api/process";
import { invoke } from "@tauri-apps/api/tauri";
import logo from "./src/assets/logo.png";
import { open } from "@tauri-apps/api/dialog";
import { convertFileSrc } from "@tauri-apps/api/tauri";

export class State {
  static state = {
    app: {
      version: "0.0.3",
    },
    pjm: {
      isProjectSelected: false,
      currentIndexSelected: -1,
      projects: <any>[],
      selectProject: (_event: any, _model: any, element: any, _attribute: any, object: any) => {
        const index = parseInt(element.getAttribute("data-id"));
        const oldIndex = object.$parent.$model.pjm.currentIndexSelected;

        if (oldIndex != -1) {
          object.$parent.$model.pjm.projects[oldIndex].css = "";
        }

        object.$parent.$model.pjm.currentIndexSelected = index;
        object.$parent.$model.pjm.projects[index].css = "pjm_entry_selected";
        object.$parent.$model.pjm.isProjectSelected = true;
      },
      new: async () => {
        await invoke("close_pjm");
      },
      open: async () => {
        await invoke("close_pjm");
      },
      exit: async () => {
        await exit(1);
      },
      get openDisabled() {
        if (this.isProjectSelected) return "";
        else return " pjm_disabled";
      },
    },
    main: {
      project: {
        logo: logo,
        title: "myProject",
        description: "this is my first project, yay",
        author: "Gamey mcGameyFace",
        url: "www.sillygamelink.com",
        version: "0.0.1",
        updateIcon: async () => {
          const newIcon = await open({
            multiple: false,
            filters: [
              {
                name: "Image",
                extensions: ["png", "ico"],
              },
            ],
          });
          if (newIcon) {
            this.state.main.project.logo = convertFileSrc(<string>newIcon);
          }
        },
      },
      toggleSidebar: (_event: any, _model: any, _element: any, _attribute: any, object: any) => {
        let toggleFlag = object.$model.main.sidebar.isVisible;
        if (toggleFlag) {
          object.$model.main.sidebar.isVisible = false;
          object.$model.main.sidebar.css = " main_menu_collapse";
          this.state.main.sidebar.cssPointer = " pointer-events: none;";
        } else {
          object.$model.main.sidebar.isVisible = true;
          object.$model.main.sidebar.css = "";
          this.state.main.sidebar.cssPointer = " pointer-events: all;";
        }
      },
      closeSidebar: () => {
        this.state.main.sidebar.isVisible = false;
        this.state.main.sidebar.css = " main_menu_collapse";
        this.state.main.sidebar.cssPointer = " pointer-events: none;";
      },
      content: {
        contentRouting: {
          contentSwitch: "prj",
          get isProjectSelected() {
            return this.contentSwitch == "prj";
          },
          get isViewportSelected() {
            return this.contentSwitch == "vwp";
          },
          get isAssetSelected() {
            return this.contentSwitch == "ass";
          },
          get isSceneSelected() {
            return this.contentSwitch == "scn";
          },
          get isObjectSelected() {
            return this.contentSwitch == "obj";
          },
          get isCutsceneSelected() {
            return this.contentSwitch == "csn";
          },
          get isActionSelected() {
            return this.contentSwitch == "act";
          },
          get isGamedataSelected() {
            return this.contentSwitch == "gdt";
          },
          get isUISelected() {
            return this.contentSwitch == "uix";
          },
        },
        viewport: {
          width: "600",
          height: "400",
          backgroundColor: "#222222",
          testScale: "0.5",
          get testWidth() {
            return (parseInt(this.width) * parseFloat(this.testScale)).toString();
          },
          get testHeight() {
            return (parseInt(this.height) * parseFloat(this.testScale)).toString();
          },
          border: {
            width: "2",
            radius: "5",
            useColor: false,
            color: "#000000",
            useImage: false,
            imageURL: "",
            sliceW: "5",
            offset: "0",
            loadborder: async () => {
              const brdimage = await open({
                multiple: false,
                filters: [
                  {
                    name: "Image",
                    extensions: ["png", "jpg"],
                  },
                ],
              });
              console.log(brdimage);

              if (brdimage) {
                this.state.main.content.viewport.border.imageURL = convertFileSrc(<string>brdimage);
                this.state.main.content.viewport.border.useImage = true;
              }
            },
          },
        },
      },
      sidebar: {
        linkLock: false,
        clearLinkCSS: () => {
          this.state.main.sidebar.projectLinkCSS = "";
          this.state.main.sidebar.viewportLinkCSS = "";
          this.state.main.sidebar.assetsLinkCSS = "";
          this.state.main.sidebar.scenesLinkCSS = "";
          this.state.main.sidebar.objectsLinkCSS = "";
          this.state.main.sidebar.cutsceneLinkCSS = "";
          this.state.main.sidebar.actionsLinkCSS = "";
          this.state.main.sidebar.gamedataLinkCSS = "";
          this.state.main.sidebar.UILinkCSS = "";
        },
        setLinkCSS: (link: string) => {
          switch (link) {
            case "prj":
              this.state.main.sidebar.projectLinkCSS = "main_sidebar_link_selected";
              break;
            case "vwp":
              this.state.main.sidebar.viewportLinkCSS = "main_sidebar_link_selected";
              break;
            case "ass":
              this.state.main.sidebar.assetsLinkCSS = "main_sidebar_link_selected";
              break;
            case "scn":
              this.state.main.sidebar.scenesLinkCSS = "main_sidebar_link_selected";
              break;
            case "obj":
              this.state.main.sidebar.objectsLinkCSS = "main_sidebar_link_selected";
              break;
            case "csn":
              this.state.main.sidebar.cutsceneLinkCSS = "main_sidebar_link_selected";
              break;
            case "act":
              this.state.main.sidebar.actionsLinkCSS = "main_sidebar_link_selected";
              break;
            case "gdt":
              this.state.main.sidebar.gamedataLinkCSS = "main_sidebar_link_selected";
              break;
            case "uix":
              this.state.main.sidebar.UILinkCSS = "main_sidebar_link_selected";
              break;
          }
        },
        isVisible: true,
        css: "",
        cssPointer: "",
        projectLinkCSS: "main_sidebar_link_selected",
        viewportLinkCSS: "",
        assetsLinkCSS: "",
        scenesLinkCSS: "",
        objectsLinkCSS: "",
        cutsceneLinkCSS: "",
        actionsLinkCSS: "",
        gamedataLinkCSS: "",
        UILinkCSS: "",
        selectLink: (_event: any, model: any, element: any, _attribute: any, _object: any) => {
          if (!model.main.sidebar.linkLock) {
            model.main.sidebar.linkLock = true;
            const elmID = element.getAttribute("data-id");
            model.main.sidebar.clearLinkCSS();
            model.main.sidebar.setLinkCSS(elmID);
            model.main.content.contentRouting.contentSwitch = "";
            setTimeout(() => {
              model.main.content.contentRouting.contentSwitch = elmID;
              model.main.sidebar.linkLock = false;
              setTimeout(() => this.state.main.closeSidebar(), 50);
            }, 500);
          }
        },
      },
    },
  };
}
