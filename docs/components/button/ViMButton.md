---
title: 流光按钮
---

# 玻璃风按钮

组件命名规则：`ViGButton` vi 代表组件库（vistyleui），M 代表跑马灯（marquee），Button 代表按钮

---

:::info
鼠标移到按钮上会有流光效果
:::

## 基础用法

<m-de/>
```vue title="ViGButton"
<ViMButton>流光按钮</ViMButton>
<ViMButton disabled>禁用</ViMButton>
```
---

使用 `size` 属性来定义按钮的大小。
<m-size></m-size>

```vue title="ViMButton"
<ViMButton size="large">流光按钮</ViMButton>
<ViMButton>流光按钮</ViMButton>
<ViMButton size="small">流光按钮</ViMButton>
```

使用 `linearGradient` 属性来定义按钮的颜色。
<ViMButton linearGradient="linear-gradient(90deg, red, orange, blue, red)">流光按钮</ViMButton>

```vue title="ViMButton"
<ViMButton
  linearGradient="linear-gradient(90deg, red, orange, blue, red)"
>流光按钮</ViMButton>
```

---

## Attributes

| 参数           | 说明             | 类型   | 默认值                    | 可选值                      | 说明                                                               |
| -------------- | ---------------- | ------ | ------------------------- | --------------------------- | ------------------------------------------------------------------ |
| size           | 按钮大小         | string | medium                    | large / medium / small      |
| theme          | 按钮主题         | string |                           | red / blue / green / custom |
| color          | 按钮背景色       | string | #fff                      |                             | theme 需要设置 custom 可以设置 16 进制颜色也可以设置 rgb 颜色      |
| bgRgba         | 按钮背景色透明度 | string | rgba(255, 255, 255, 0.15) |                             | heme 需要设置 custom，需要 color 随便设置一个 rbga 颜色值 才会生效 |
| borderRgba     | 按钮边框透明度   | string | rgba(255, 255, 255, 0.15) |                             | heme 需要设置 custom，需要 color 随便设置一个 rbga 颜色值 才会生效 |
| linearGradient | 渐变颜色         | string |                           |                             |
