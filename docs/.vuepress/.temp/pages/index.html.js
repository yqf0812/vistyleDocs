import comp from "/Users/qingfengyang/Desktop/project/vistyleDocs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/images/logo2.png\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/guide/installation.html\",\"type\":\"primary\"},{\"text\":\"Introduction\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"secondary\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\"},\"headers\":[],\"git\":{\"updatedTime\":1756291583000,\"contributors\":[{\"name\":\"NeverSettle\",\"username\":\"NeverSettle\",\"email\":\"1274565784@qq.com\",\"commits\":1,\"url\":\"https://github.com/NeverSettle\"}],\"changelog\":[{\"hash\":\"8fcddebd5af9c399e6bde7a4cd4af34d858183ff\",\"time\":1756291583000,\"email\":\"1274565784@qq.com\",\"author\":\"NeverSettle\",\"message\":\"first\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
