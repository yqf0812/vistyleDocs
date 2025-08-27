<template><div><h1 id="玻璃风按钮" tabindex="-1"><a class="header-anchor" href="#玻璃风按钮"><span>玻璃风按钮</span></a></h1>
<p>组件命名规则：<code v-pre>ViGButton</code> vi 代表组件库（vistyleui），R 代表复古风（retro），Button 代表按钮</p>
<hr>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法"><span>基础用法</span></a></h2>
<r-de/><div class="code-block-title">
  <div class="code-block-title-bar">
    <span class="title" data-title="ViRButton">ViRButton</span>
  </div>
  <div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViRButton</span><span class="token punctuation">></span></span>玻璃风按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViRButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViRButton</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>禁用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViRButton</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div>
</div><hr>
<p>使用 <code v-pre>size</code> 属性来定义按钮的大小。</p>
<r-size></r-size><div class="code-block-title">
  <div class="code-block-title-bar">
    <span class="title" data-title="ViGButton">ViGButton</span>
  </div>
  <div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViRButton</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>大按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViRButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViRButton</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>小按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViRButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViRButton</span><span class="token punctuation">></span></span>中按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViRButton</span><span class="token punctuation">></span></span></span>
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
<r-theme></r-theme><div class="code-block-title">
  <div class="code-block-title-bar">
    <span class="title" data-title="ViGButton">ViGButton</span>
  </div>
  <div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViRButton</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>red<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViRButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViRButton</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>blue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViRButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViRButton</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>green<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViRButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViRButton</span></span>
<span class="line">  <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">bgColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ffd166<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">borderLight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#fff3b0<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">borderDark</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#cca633<span class="token punctuation">"</span></span></span>
<span class="line"><span class="token punctuation">></span></span>yellow<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViRButton</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><h2 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes"><span>Attributes</span></a></h2>
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
<td>bgColor</td>
<td>按钮背景色</td>
<td>string</td>
<td></td>
<td></td>
<td>theme 需要设置 custom</td>
</tr>
<tr>
<td>borderLight</td>
<td>浅色边框</td>
<td>string</td>
<td></td>
<td></td>
<td>theme 需要设置 custom，需要 才会生效</td>
</tr>
<tr>
<td>borderDark</td>
<td>深色边框</td>
<td>string</td>
<td></td>
<td></td>
<td>theme 需要设置 custom，需要 才会生效</td>
</tr>
</tbody>
</table>
</div></template>


