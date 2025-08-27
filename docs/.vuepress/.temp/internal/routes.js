export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/qingfengyang/Desktop/project/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/qingfengyang/Desktop/project/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"组件"} }],
  ["/components/button/ViGButton.html", { loader: () => import(/* webpackChunkName: "components_button_ViGButton.html" */"/Users/qingfengyang/Desktop/project/vuepress-starter/docs/.vuepress/.temp/pages/components/button/ViGButton.html.js"), meta: {"title":"玻璃风按钮"} }],
  ["/components/button/ViMButton.html", { loader: () => import(/* webpackChunkName: "components_button_ViMButton.html" */"/Users/qingfengyang/Desktop/project/vuepress-starter/docs/.vuepress/.temp/pages/components/button/ViMButton.html.js"), meta: {"title":"流光按钮"} }],
  ["/components/button/ViNButton.html", { loader: () => import(/* webpackChunkName: "components_button_ViNButton.html" */"/Users/qingfengyang/Desktop/project/vuepress-starter/docs/.vuepress/.temp/pages/components/button/ViNButton.html.js"), meta: {"title":"轻拟态"} }],
  ["/components/button/ViRButton.html", { loader: () => import(/* webpackChunkName: "components_button_ViRButton.html" */"/Users/qingfengyang/Desktop/project/vuepress-starter/docs/.vuepress/.temp/pages/components/button/ViRButton.html.js"), meta: {"title":"复古按钮"} }],
  ["/guide/installation.html", { loader: () => import(/* webpackChunkName: "guide_installation.html" */"/Users/qingfengyang/Desktop/project/vuepress-starter/docs/.vuepress/.temp/pages/guide/installation.html.js"), meta: {"title":"安装"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/qingfengyang/Desktop/project/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
