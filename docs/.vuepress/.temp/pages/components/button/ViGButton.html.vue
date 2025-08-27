<template><div><h1 id="玻璃风按钮" tabindex="-1"><a class="header-anchor" href="#玻璃风按钮"><span>玻璃风按钮</span></a></h1>
<p>组件命名规则：<code v-pre>ViGButton</code> vi 代表组件库（vistyleui），G 代表玻璃风（glass），Button 代表按钮</p>
<hr>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>该组件在特定的背景下使用效果更佳</p>
</div>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法"><span>基础用法</span></a></h2>
<g-de/><div class="code-block-title">
  <div class="code-block-title-bar">
    <span class="title" data-title="ViGButton">ViGButton</span>
  </div>
  <div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViGButton</span><span class="token punctuation">></span></span>玻璃风按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViGButton</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>
</div><hr>
<p>使用 <code v-pre>size</code> 属性来定义按钮的大小。</p>
<g-size></g-size><div class="code-block-title">
  <div class="code-block-title-bar">
    <span class="title" data-title="ViGButton">ViGButton</span>
  </div>
  <div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViGButton</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>大按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViGButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViGButton</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>中按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViGButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViGButton</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>小按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViGButton</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><hr>
<p>使用 <code v-pre>theme</code> 属性来定义按钮背景色，默认提供三种颜色, 也可以自定义颜色。</p>
<ul>
<li>red -- 红色</li>
<li>blue -- 蓝色</li>
<li>green -- 绿色</li>
<li>custom -- 自定义颜色</li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>自定义颜色可以通过 <code v-pre>color</code> 属性来定义。</p>
<p><code v-pre>color</code> 属性的值可以是十六进制颜色值、RGB 颜色值，默认背景色透明度是 0.15，边框透明是 0.2</p>
<p>如果想自定义透明度可以使用 rgba 颜色值</p>
</div>
<g-theme></g-theme><details class="hint-container details"><summary>代码</summary>
<div class="code-block-title">
  <div class="code-block-title-bar">
    <span class="title" data-title="ViGButton">ViGButton</span>
  </div>
  <div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViGButton</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handlerClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>红色按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViGButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViGButton</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>蓝色按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViGButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViGButton</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>绿色按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViGButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViGButton</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ff9900<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>橙色按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViGButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViGButton</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rgb(255,192,203)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>粉色按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViGButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViGButton</span></span>
<span class="line">  <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">bgRgba</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rgba(255,192,203,0.3)<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">borderRgba</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rgba(255,192,203,0.9)<span class="token punctuation">"</span></span></span>
<span class="line"><span class="token punctuation">></span></span>粉色按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViGButton</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handlerClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"点击了红色按钮"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div></details>
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
<td></td>
<td></td>
<td>theme 需要设置 custom 可以设置 16 进制颜色也可以设置 rgb 颜色</td>
</tr>
<tr>
<td>bgRgba</td>
<td>按钮背景色透明度</td>
<td>string</td>
<td>rgba(255, 255, 255, 0.15)</td>
<td></td>
<td>theme 需要设置 custom，需要 才会生效</td>
</tr>
<tr>
<td>borderRgba</td>
<td>按钮边框透明度</td>
<td>string</td>
<td>rgba(255, 255, 255, 0.15)</td>
<td></td>
<td>theme 需要设置 custom，需要 才会生效</td>
</tr>
</tbody>
</table>
</div></template>


