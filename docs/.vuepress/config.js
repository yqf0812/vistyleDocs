import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-CN",
  base: "/vistyleDocs/", // 站点的基础路径
  title: "ViStyle",
  description: "基于Vue3，面向开发者的组件库",
  theme: defaultTheme({
    logo: "./../images/logo2.png",

    navbar: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/installation.md" },
      { text: "组件", link: "/components/button/ViGButton.md" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          children: ["/guide/installation.md"],
        },
      ],
      "/components/": [
        {
          text: "按钮组件",
          children: [
            "/components/button/ViGButton.md",
            "/components/button/ViNButton.md",
            "/components/button/ViMButton.md",
            "/components/button/ViRButton.md",
          ],
        },
      ],
    },
  }),

  bundler: viteBundler(),
});
