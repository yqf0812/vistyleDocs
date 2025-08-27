# 安装

## npm 安装

推荐使用 npm 或 yarn 或 pnpm 安装，享受更好的开发体验：

```shell
npm install vistyleui
```

# 或者

```shell
yarn add vistyleui
```

# 或者

```shell
pnpm add vistyleui
```

## 引入组件库

在你的 Vue 项目入口文件中引入：

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import vistyleui from "vistyleui";
import "vistyleui/dist/assets/index.css";

const app = createApp(App);
app.use(vistyleui);
app.mount("#app");
```

## 按需引入

如果你只需要使用部分组件，可以按需引入：

```javascript
import { ViGButton } from "my-component-library";
import "vistyleui/dist/assets/index.css";

export default {
  components: {
    ViGButton,
  },
};
```
