<template><div><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h1>
<h2 id="npm-安装" tabindex="-1"><a class="header-anchor" href="#npm-安装"><span>npm 安装</span></a></h2>
<p>推荐使用 npm 或 yarn 或 pnpm 安装，享受更好的开发体验：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> vistyleui</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h1 id="或者" tabindex="-1"><a class="header-anchor" href="#或者"><span>或者</span></a></h1>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> <span class="token function">add</span> vistyleui</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h1 id="或者-1" tabindex="-1"><a class="header-anchor" href="#或者-1"><span>或者</span></a></h1>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> vistyleui</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="引入组件库" tabindex="-1"><a class="header-anchor" href="#引入组件库"><span>引入组件库</span></a></h2>
<p>在你的 Vue 项目入口文件中引入：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> vistyleui <span class="token keyword">from</span> <span class="token string">"vistyleui"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">"vistyleui/dist/assets/index.css"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vistyleui<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按需引入" tabindex="-1"><a class="header-anchor" href="#按需引入"><span>按需引入</span></a></h2>
<p>如果你只需要使用部分组件，可以按需引入：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ViGButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"my-component-library"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">"vistyleui/dist/assets/index.css"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    ViGButton<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


