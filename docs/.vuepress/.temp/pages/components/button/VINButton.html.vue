<template><div><h1 id="玻璃风按钮" tabindex="-1"><a class="header-anchor" href="#玻璃风按钮"><span>玻璃风按钮</span></a></h1>
<p>组件命名规则：<code v-pre>ViNButton</code> vi 代表组件库（vistyleui），N 代表轻拟态（neumorphism），Button 代表按钮</p>
<hr>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>该组件在特定的背景下使用效果更佳</p>
</div>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法"><span>基础用法</span></a></h2>
<n-de/><div class="code-block-title">
  <div class="code-block-title-bar">
    <span class="title" data-title="ViNButton">ViNButton</span>
  </div>
  <div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViNButton</span><span class="token punctuation">></span></span>默认<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViNButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViNButton</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>禁用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViNButton</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div>
</div><hr>
<p>使用 <code v-pre>size</code> 属性来定义按钮的大小。</p>
<n-size></n-size><div class="code-block-title">
  <div class="code-block-title-bar">
    <span class="title" data-title="ViNButton">ViNButton</span>
  </div>
  <div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViNButton</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>大按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViNButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViNButton</span><span class="token punctuation">></span></span>中按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViNButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViNButton</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>小按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViNButton</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><hr>
<p>使用 <code v-pre>theme</code> 属性来定义按钮背景色</p>
<n-theme></n-theme><div class="code-block-title">
  <div class="code-block-title-bar">
    <span class="title" data-title="ViNButton">ViNButton</span>
  </div>
  <div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViNButton</span><span class="token punctuation">></span></span>白色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViNButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block bg-dark<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViNButton</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>黑色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViNButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block bg-red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViNButton</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>红色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViNButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block bg-blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViNButton</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>蓝色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViNButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block bg-green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViNButton</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>绿色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViNButton</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token selector">.bg-dark</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #2a2e35<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.bg-blue</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #d6e1ff<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.bg-green</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #d6f5e5<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.bg-red</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #ffe5e5<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><hr>
<p>如果想要自定义颜色则需要四个参数<code v-pre>bgColor</code>,<code v-pre>textColor</code>,<code v-pre>shadowLight</code>,<code v-pre>shadowDark</code></p>
<n-cus></n-cus><div class="code-block-title">
  <div class="code-block-title-bar">
    <span class="title" data-title="ViNButton">ViNButton</span>
  </div>
  <div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ViNButton</span></span>
<span class="line">  <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">bgColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#fff0e0<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">textColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#b36b15<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">shadowLight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ffffff<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">shadowDark</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#e6c29e<span class="token punctuation">"</span></span></span>
<span class="line"><span class="token punctuation">></span></span>橙色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ViNButton</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
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
<td>'medium'</td>
<td>large / medium / small</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>false</td>
<td>true/false</td>
<td></td>
</tr>
<tr>
<td>theme</td>
<td>按钮主题</td>
<td>string</td>
<td>'light'</td>
<td>'light','dark','red','blue','green','custom'</td>
<td></td>
</tr>
<tr>
<td>bgColor</td>
<td>背景颜色</td>
<td>string</td>
<td>'#ffffff'</td>
<td></td>
<td>theme 设置成 custom 才生效</td>
</tr>
<tr>
<td>textColor</td>
<td>文字颜色</td>
<td>string</td>
<td>'#5a6270'</td>
<td></td>
<td>theme 设置成 custom 才生效</td>
</tr>
<tr>
<td>shadowLight</td>
<td>浅色阴影</td>
<td>string</td>
<td>'#ffffff'</td>
<td></td>
<td>theme 设置成 custom 才生效</td>
</tr>
<tr>
<td>shadowDark</td>
<td>深色阴影</td>
<td>string</td>
<td>'#e0e0e0'</td>
<td></td>
<td>theme 设置成 custom 才生效</td>
</tr>
</tbody>
</table>
</div></template>


