---
title: 玻璃风按钮
---

# 玻璃风按钮

组件命名规则：`ViGButton` vi 代表组件库（vistyleui），G 代表玻璃风（glass），Button 代表按钮

---

::: info
该组件在特定的背景下使用效果更佳
:::

## 基础用法

<g-de/>
```vue title="ViGButton"
<ViGButton>玻璃风按钮</ViGButton>
```
---

使用 `size` 属性来定义按钮的大小。
<g-size></g-size>

```vue title="ViGButton"
<ViGButton size="large">大按钮</ViGButton>
<ViGButton size="medium">中按钮</ViGButton>
<ViGButton size="small">小按钮</ViGButton>
```

---

使用 `theme` 属性来定义按钮背景色，默认提供三种颜色, 也可以自定义颜色。

- red -- 红色
- blue -- 蓝色
- green -- 绿色
- custom -- 自定义颜色

::: info
自定义颜色可以通过 `color` 属性来定义。

`color` 属性的值可以是十六进制颜色值、RGB 颜色值，默认背景色透明度是 0.15，边框透明是 0.2

如果想自定义透明度可以使用 rgba 颜色值
:::

<g-theme></g-theme>

::: details 代码

```vue title="ViGButton"
<ViGButton theme="red" @click="handlerClick">红色按钮</ViGButton>
<ViGButton size="blue">蓝色按钮</ViGButton>
<ViGButton size="green">绿色按钮</ViGButton>
<ViGButton theme="custom" color="#ff9900">橙色按钮</ViGButton>
<ViGButton theme="custom" color="rgb(255,192,203)">粉色按钮</ViGButton>
<ViGButton
  theme="custom"
  bgRgba="rgba(255,192,203,0.3)"
  borderRgba="rgba(255,192,203,0.9)"
>粉色按钮</ViGButton>

<script setup>
const handlerClick = () => {
  alert("点击了红色按钮");
};
</script>
```

:::

## Attributes

| 参数       | 说明             | 类型   | 默认值                    | 可选值                      | 说明                                                          |
| ---------- | ---------------- | ------ | ------------------------- | --------------------------- | ------------------------------------------------------------- |
| size       | 按钮大小         | string | medium                    | large / medium / small      |
| theme      | 按钮主题         | string |                           | red / blue / green / custom |
| color      | 按钮背景色       | string |                           |                             | theme 需要设置 custom 可以设置 16 进制颜色也可以设置 rgb 颜色 |
| bgRgba     | 按钮背景色透明度 | string | rgba(255, 255, 255, 0.15) |                             | theme 需要设置 custom，需要 才会生效                          |
| borderRgba | 按钮边框透明度   | string | rgba(255, 255, 255, 0.15) |                             | theme 需要设置 custom，需要 才会生效                          |
