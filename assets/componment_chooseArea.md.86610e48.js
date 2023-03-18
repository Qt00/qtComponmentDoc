import{_ as a,o as t,c as e,N as s}from"./chunks/framework.b5b212bd.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"componment/chooseArea.md"}'),o={name:"componment/chooseArea.md"},n=s(`<h2 id="省市区选择" tabindex="-1">省市区选择 <a class="header-anchor" href="#省市区选择" aria-label="Permalink to &quot;省市区选择&quot;">​</a></h2><p>通过下拉选择实现省市区三级联动。</p><h3 id="按需引入" tabindex="-1">按需引入 <a class="header-anchor" href="#按需引入" aria-label="Permalink to &quot;按需引入&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//main.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> chooseArea </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">qt-component/chooseArea</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(chooseArea)</span></span>
<span class="line"></span></code></pre></div><h3 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h3><p>具体演示见<a href="https://qt00.github.io/qt-components/#/chooseArea" target="_blank" rel="noreferrer">省市区选择</a></p><h3 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">my-choose-area</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">my-choose-area</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h3><h4 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td>选择区域之后触发</td><td>val:AreaInfo 省市区数据</td></tr></tbody></table><h4 id="areainfo数据格式" tabindex="-1">AreaInfo数据格式 <a class="header-anchor" href="#areainfo数据格式" aria-label="Permalink to &quot;AreaInfo数据格式&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">key</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td style="text-align:left;">province</td><td>省数据</td><td><code>{name: string, code: string}</code></td></tr><tr><td style="text-align:left;">city</td><td>城市数据</td><td><code>{name: string, code: string}</code></td></tr><tr><td style="text-align:left;">area</td><td>区域数据</td><td><code>{name: string, code: string}</code></td></tr></tbody></table>`,13),l=[n];function r(c,p,i,d,h,y){return t(),e("div",null,l)}const b=a(o,[["render",r]]);export{f as __pageData,b as default};
