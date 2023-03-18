import{_ as s,o as n,c as a,N as l}from"./chunks/framework.b5b212bd.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"componment/table.md"}'),t={name:"componment/table.md"},p=l(`<h2 id="表格" tabindex="-1">表格 <a class="header-anchor" href="#表格" aria-label="Permalink to &quot;表格&quot;">​</a></h2><p>可配置型表格，支持多种自定义。</p><h3 id="按需引入" tabindex="-1">按需引入 <a class="header-anchor" href="#按需引入" aria-label="Permalink to &quot;按需引入&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//main.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> table </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">qt-component/table</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">qt-component/table/style.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(table)</span></span>
<span class="line"></span></code></pre></div><h3 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h3><p>完整演示见<a href="https://qt00.github.io/qt-components/#/table" target="_blank" rel="noreferrer">表格</a></p><h3 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">my-table</span></span>
<span class="line"><span style="color:#89DDFF;">    :options=&quot;options&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    :data=&quot;tableData&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">isEditRow</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">pagination</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">stripe</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">border</span></span>
<span class="line"><span style="color:#89DDFF;">    :total=&quot;total&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    :currentPage=&quot;current&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    :pageSize=&quot;pageSize&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">editRowIndex</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">editRowIndex</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #date=&quot;{ </span><span style="color:#C792EA;">scope</span><span style="color:#89DDFF;"> }&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">      &lt;qt-icon-timer&gt;&lt;/qt-icon-timer&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">      &lt;span </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">margin-left: 10px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> scope.row.date </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #name=&quot;{ </span><span style="color:#C792EA;">scope</span><span style="color:#89DDFF;"> }&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">      &lt;el-popover </span><span style="color:#C792EA;">effect</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">light</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">trigger</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hover</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placement</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #default&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">          &lt;p&gt;姓名: {{</span><span style="color:#A6ACCD;"> scope.row.name </span><span style="color:#89DDFF;">}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">          &lt;p&gt;住址: {{</span><span style="color:#A6ACCD;"> scope.row.address </span><span style="color:#89DDFF;">}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">        &lt;/template&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">        &lt;template #reference&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">          &lt;div </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name-wrapper</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">el-tag</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">medium</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> scope.row.name </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#FFCB6B;">el-tag</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">popover</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #editRow=&quot;scope&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">      &lt;el-button </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @click=&quot;sure(scope.scope)&quot;&gt;确认&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">      &lt;el-button </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">取消</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">el-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #action=&quot;scope&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">      &lt;el-button </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @click=&quot;edit(scope.scope)&quot;&gt;编辑&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">      &lt;el-button </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">删除</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">el-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">my</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let options = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">日期</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    prop: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    align: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">center</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    slot: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    editable: </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">姓名</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    prop: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    align: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">center</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    slot: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">地址</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    prop: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">address</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    align: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">center</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    editable: </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">操作</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    align: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">center</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    action: </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">let tableData = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    date: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2016-05-03</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tom1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    address: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">No. 189, Grove St, Los Angeles</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    date: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2016-05-02</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tom2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    address: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">No. 189, Grove St, Los Angeles</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    date: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2016-05-04</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tom3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    address: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">No. 189, Grove St, Los Angeles</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    date: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2016-05-01</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tom4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    address: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">No. 189, Grove St, Los Angeles</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">let editRowIndex = ref(&#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">let current = ref(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">let pageSize = ref(10)</span></span>
<span class="line"><span style="color:#A6ACCD;">let total = ref(0)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">let edit = (scope) =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// console.log(scope)</span></span>
<span class="line"><span style="color:#A6ACCD;">  editRowIndex</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">edit</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let sure = (scope) =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(scope)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h3><h4 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td style="text-align:left;">options</td><td>表格的配置项</td><td>TableOptions[]</td><td>必填</td><td>-</td></tr><tr><td style="text-align:left;">data</td><td>表格数据</td><td>any[]</td><td>必填</td><td>-</td></tr><tr><td style="text-align:left;">elementLoadingText</td><td>加载文案</td><td>string</td><td>-</td><td>-</td></tr><tr><td style="text-align:left;">elementLoadingSpinner</td><td>加载图标名</td><td>string</td><td>-</td><td>-</td></tr><tr><td style="text-align:left;">elementLoadingBackground</td><td>加载背景颜色</td><td>string</td><td>-</td><td>-</td></tr><tr><td style="text-align:left;">elementLoadingSvg</td><td>加载svg图标</td><td>string</td><td>-</td><td>-</td></tr><tr><td style="text-align:left;">elementLoadingSvgViewBox</td><td>加载svg图标配置</td><td>string</td><td>-</td><td>-</td></tr><tr><td style="text-align:left;">editIcon</td><td>可配置单元格显示的图标</td><td>string</td><td>-</td><td>edit</td></tr><tr><td style="text-align:left;">isEditRow</td><td>是否可以编辑行</td><td>boolean</td><td>true/false</td><td>false</td></tr><tr><td style="text-align:left;">editRowIndex</td><td>编辑行按钮标识</td><td>string</td><td>-</td><td>-</td></tr><tr><td style="text-align:left;">pagination</td><td>是否显示分页</td><td>boolean</td><td>true/false</td><td>false</td></tr><tr><td style="text-align:left;">currentPage</td><td>当前是第几页的数据</td><td>number</td><td>-</td><td>1</td></tr><tr><td style="text-align:left;">pageSizes</td><td>每页数据的选项</td><td>number[]</td><td>-</td><td>[10,20,30,40]</td></tr><tr><td style="text-align:left;">pageSize</td><td>当前一页多少条数据</td><td>number</td><td>-</td><td>10</td></tr><tr><td style="text-align:left;">total</td><td>数据总数</td><td>number</td><td>-</td><td>-</td></tr><tr><td style="text-align:left;">paginationAlign</td><td>分页的排列方式</td><td>string</td><td>&#39;left&#39; / &#39;center&#39; / &#39;right&#39;</td><td>left</td></tr></tbody></table><h4 id="tableoptions数据格式" tabindex="-1">TableOptions数据格式 <a class="header-anchor" href="#tableoptions数据格式" aria-label="Permalink to &quot;TableOptions数据格式&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">key</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td style="text-align:left;">prop</td><td>表格数据字段名</td><td>string</td></tr><tr><td style="text-align:left;">label</td><td>表格表头名称</td><td>string</td></tr><tr><td style="text-align:left;">width</td><td>表格单元格宽度</td><td>string/number</td></tr><tr><td style="text-align:left;">align</td><td>表格单元格对齐方式</td><td>left/center/right</td></tr><tr><td style="text-align:left;">slot</td><td>自定义列模版的插槽名</td><td>string</td></tr><tr><td style="text-align:left;">action</td><td>是否是编辑选项</td><td>boolean</td></tr><tr><td style="text-align:left;">editable</td><td>单元格是否可编辑</td><td>boolean</td></tr></tbody></table><h4 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td style="text-align:left;">confirm</td><td>可编辑单元格确认事件</td><td>scope:当前行数据</td></tr><tr><td style="text-align:left;">cancel</td><td>可编辑单元格取消事件</td><td>scope:当前行数据</td></tr><tr><td style="text-align:left;">size-change</td><td>分页当前页显示条数改变时触发事件</td><td>val:当前页条数</td></tr><tr><td style="text-align:left;">current-change</td><td>分页当前页改变时触发事件</td><td>val:当前页</td></tr></tbody></table><h4 id="slots插槽" tabindex="-1">slots插槽 <a class="header-anchor" href="#slots插槽" aria-label="Permalink to &quot;slots插槽&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">名称</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">cellEdit</td><td>自定义可编辑单元格内容</td></tr><tr><td style="text-align:left;">editRow</td><td>自定义可编辑行按钮内容</td></tr><tr><td style="text-align:left;">action</td><td>自定义可编辑区域内容</td></tr></tbody></table>`,17),o=[p];function e(r,c,D,F,y,d){return n(),a("div",null,o)}const A=s(t,[["render",e]]);export{C as __pageData,A as default};
