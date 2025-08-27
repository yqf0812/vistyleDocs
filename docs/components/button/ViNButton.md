---
title: 轻拟态
---

# 玻璃风按钮

组件命名规则：`ViNButton` vi 代表组件库（vistyleui），N 代表轻拟态（neumorphism），Button 代表按钮

---

::: info
该组件在特定的背景下使用效果更佳
:::

## 基础用法

<n-de/>
```vue title="ViNButton"
<ViNButton>默认</ViNButton>
<ViNButton disabled>禁用</ViNButton>
```
---

使用 `size` 属性来定义按钮的大小。
<n-size></n-size>

```vue title="ViNButton"
<ViNButton size="large">大按钮</ViNButton>
<ViNButton>中按钮</ViNButton>
<ViNButton size="small">小按钮</ViNButton>
```

---

使用 `theme` 属性来定义按钮背景色

<n-theme></n-theme>

```vue title="ViNButton"
<div class="block">
    <ViNButton>白色</ViNButton>
</div>
<div class="block bg-dark">
    <ViNButton theme="dark">黑色</ViNButton>
</div>
<div class="block bg-red">
    <ViNButton theme="red">红色</ViNButton>
</div>
<div class="block bg-blue">
    <ViNButton theme="blue">蓝色</ViNButton>
</div>
<div class="block bg-green">
    <ViNButton theme="green">绿色</ViNButton>
</div>
<style>
.bg-dark {
  background-color: #2a2e35;
}
.bg-blue {
  background-color: #d6e1ff;
}
.bg-green {
  background-color: #d6f5e5;
}
.bg-red {
  background-color: #ffe5e5;
}
</style>
```

---

如果想要自定义颜色则需要四个参数`bgColor`,`textColor`,`shadowLight`,`shadowDark`

<n-cus></n-cus>

```vue title="ViNButton"
<ViNButton
  theme="custom"
  bgColor="#fff0e0"
  textColor="#b36b15"
  shadowLight="#ffffff"
  shadowDark="#e6c29e"
>橙色</ViNButton>
```

---

## Attributes

| 参数        | 说明     | 类型    | 默认值    | 可选值                                       | 说明                       |
| ----------- | -------- | ------- | --------- | -------------------------------------------- | -------------------------- |
| size        | 按钮大小 | string  | 'medium'  | large / medium / small                       |
| disabled    | 是否禁用 | boolean | false     | true/false                                   |
| theme       | 按钮主题 | string  | 'light'   | 'light','dark','red','blue','green','custom' |
| bgColor     | 背景颜色 | string  | '#ffffff' |                                              | theme 设置成 custom 才生效 |
| textColor   | 文字颜色 | string  | '#5a6270' |                                              | theme 设置成 custom 才生效 |
| shadowLight | 浅色阴影 | string  | '#ffffff' |                                              | theme 设置成 custom 才生效 |
| shadowDark  | 深色阴影 | string  | '#e0e0e0' |                                              | theme 设置成 custom 才生效 |
