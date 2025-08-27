---
title: 复古按钮
---

# 玻璃风按钮

组件命名规则：`ViGButton` vi 代表组件库（vistyleui），R 代表复古风（retro），Button 代表按钮

---

## 基础用法

<r-de/>
```vue title="ViRButton"
<ViRButton>玻璃风按钮</ViRButton>
<ViRButton disabled>禁用</ViRButton>
```
---

使用 `size` 属性来定义按钮的大小。
<r-size></r-size>

```vue title="ViGButton"
<ViRButton size="large">大按钮</ViRButton>
<ViRButton size="small">小按钮</ViRButton>
<ViRButton>中按钮</ViRButton>
```

---

使用 `theme` 属性来定义按钮背景色，默认提供三种颜色, 也可以自定义颜色。

- red -- 红色
- blue -- 蓝色
- green -- 绿色
- custom -- 自定义颜色

<r-theme></r-theme>

```vue title="ViGButton"
<ViRButton theme="red">red</ViRButton>
<ViRButton theme="blue">blue</ViRButton>
<ViRButton theme="green">green</ViRButton>
<ViRButton
  theme="custom"
  bgColor="#ffd166"
  borderLight="#fff3b0"
  borderDark="#cca633"
>yellow</ViRButton>
```

## Attributes

| 参数        | 说明       | 类型   | 默认值 | 可选值                      | 说明                                 |
| ----------- | ---------- | ------ | ------ | --------------------------- | ------------------------------------ |
| size        | 按钮大小   | string | medium | large / medium / small      |
| theme       | 按钮主题   | string |        | red / blue / green / custom |
| bgColor     | 按钮背景色 | string |        |                             | theme 需要设置 custom                |
| borderLight | 浅色边框   | string |        |                             | theme 需要设置 custom，需要 才会生效 |
| borderDark  | 深色边框   | string |        |                             | theme 需要设置 custom，需要 才会生效 |
