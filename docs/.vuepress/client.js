import { defineClientConfig } from "vuepress/client";
import vistyleui from "vistyleui";
import "../../node_modules/vistyleui/dist/assets/index.css";

import GButton from "./components/GButton/index";
import NButton from "./components/NButton/index";
import MButton from "./components/MButton/index";
import RButton from "./components/RButton/index";
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(vistyleui);
    Object.keys(GButton).forEach((key) => {
      app.component(`g-${key}`, GButton[key]);
    });
    Object.keys(NButton).forEach((key) => {
      app.component(`n-${key}`, NButton[key]);
    });
    Object.keys(MButton).forEach((key) => {
      app.component(`m-${key}`, MButton[key]);
    });
    Object.keys(RButton).forEach((key) => {
      app.component(`r-${key}`, RButton[key]);
    });
  },
  setup() {},
  layouts: {},
  rootComponents: [],
});
