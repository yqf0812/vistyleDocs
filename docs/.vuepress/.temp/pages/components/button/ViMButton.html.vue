<template><div><h1 id="玻璃风按钮" tabindex="-1"><a class="header-anchor" href="#玻璃风按钮"><span>玻璃风按钮</span></a></h1>
<p>组件命名规则：<code v-pre>ViGButton</code> vi 代表组件库（vistyleui），M 代表跑马灯（marquee），Button 代表按钮</p>
<hr>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>鼠标移到按钮上会有流光效果</p>
</div>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法"><span>基础用法</span></a></h2>
<m-de/><div class="code-block-title">
  <div class="code-block-title-bar">
    <span class="title" data-title="ViGButton">ViGButton</span>
  </div>
  <div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViMButton</span><span class="token punctuation">></span></span>流光按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViMButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViMButton</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>禁用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViMButton</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div>
</div><hr>
<p>使用 <code v-pre>size</code> 属性来定义按钮的大小。</p>
<m-size></m-size><div class="code-block-title">
  <div class="code-block-title-bar">
    <span class="title" data-title="ViMButton">ViMButton</span>
  </div>
  <div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViMButton</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>流光按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViMButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViMButton</span><span class="token punctuation">></span></span>流光按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViMButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViMButton</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>流光按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViMButton</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><p>使用 <code v-pre>linearGradient</code> 属性来定义按钮的颜色。</p>
<ViMButton linearGradient="linear-gradient(90deg, red, orange, blue, red)">流光按钮</ViMButton><div class="code-block-title">
  <div class="code-block-title-bar">
    <span class="title" data-title="ViMButton">ViMButton</span>
  </div>
  <div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViMButton</span></span>
<span class="line">  <span class="token attr-name">linearGradient</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>linear-gradient(90deg, red, orange, blue, red)<span class="token punctuation">"</span></span></span>
<span class="line"><span class="token punctuation">></span></span>流光按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViMButton</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><hr>
<h2 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes"><span>Attributes</span></a></h2>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
<th>可选值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>size</td>
<td>按钮大小</td>
<td>string</td>
<td>medium</td>
<td>large / medium / small</td>
<td></td>
</tr>
<tr>
<td>theme</td>
<td>按钮主题</td>
<td>string</td>
<td></td>
<td>red / blue / green / custom</td>
<td></td>
</tr>
<tr>
<td>color</td>
<td>按钮背景色</td>
<td>string</td>
<td>#fff</td>
<td></td>
<td>theme 需要设置 custom 可以设置 16 进制颜色也可以设置 rgb 颜色</td>
</tr>
<tr>
<td>bgRgba</td>
<td>按钮背景色透明度</td>
<td>string</td>
<td>rgba(255, 255, 255, 0.15)</td>
<td></td>
<td>heme 需要设置 custom，需要 color 随便设置一个 rbga 颜色值 才会生效</td>
</tr>
<tr>
<td>borderRgba</td>
<td>按钮边框透明度</td>
<td>string</td>
<td>rgba(255, 255, 255, 0.15)</td>
<td></td>
<td>heme 需要设置 custom，需要 color 随便设置一个 rbga 颜色值 才会生效</td>
</tr>
<tr>
<td>linearGradient</td>
<td>渐变颜色</td>
<td>string</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
</div></template>


