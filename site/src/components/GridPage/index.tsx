
    /* tslint:disable */
    import React from 'react';
    import Dynamic from './Dynamic';import Grid from './Grid';

    class GridPage extends React.Component<{}, {}> {
      render() {

        return (
          <div>
          <div dangerouslySetInnerHTML={{__html:` <h1 id="grid-">Grid 栅格</h1>
<blockquote>
<p>API</p>
</blockquote>
<h4 id="col">Col</h4>
<p>使用Col必须被Row包裹</p>
<table class="table table-bordered table-hover" style="width:auto;">
<thead>
<tr>
<th>参数</th>
<th style="text-align:center">说明</th>
<th style="text-align:right">类型</th>
<th style="text-align:right">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>unit</td>
<td style="text-align:center">栅格占位格数</td>
<td style="text-align:right">number</td>
<td style="text-align:right">-</td>
</tr>
<tr>
<td>offset</td>
<td style="text-align:center">栅格左侧的间隔格数，间隔内不可以有栅格</td>
<td style="text-align:right">number</td>
<td style="text-align:right">-</td>
</tr>
<tr>
<td>xs</td>
<td style="text-align:center"><code>&lt;768px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
<td style="text-align:right">number &#124; object</td>
<td style="text-align:right">-</td>
</tr>
<tr>
<td>sm</td>
<td style="text-align:center"><code>≥768px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
<td style="text-align:right">number &#124; object</td>
<td style="text-align:right">-</td>
</tr>
<tr>
<td>md</td>
<td style="text-align:center"><code>≥992px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
<td style="text-align:right">number &#124; object</td>
<td style="text-align:right">-</td>
</tr>
<tr>
<td>lg</td>
<td style="text-align:center"><code>≥1200px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
<td style="text-align:right">number &#124; object</td>
<td style="text-align:right">-</td>
</tr>
</tbody>
</table>
`}}></div>

           
      <div className="demo-list row">
      
          <div className="demo col-md-6">
          <div dangerouslySetInnerHTML={{__html:` <blockquote>
<p>栅格</p>
</blockquote>
<pre><code className="lang-jsx"><span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> {Row, Col} <span class="hljs-keyword">from</span> <span class="hljs-string">'jtalk_components'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">return</span> (
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"demo-type"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Row</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">Col</span> <span class="hljs-attr">unit</span>=<span class="hljs-string">{4}</span>&gt;</span>column<span class="hljs-tag">&lt;/<span class="hljs-name">Col</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">Col</span> <span class="hljs-attr">xs</span>=<span class="hljs-string">{2}</span> <span class="hljs-attr">offset</span>=<span class="hljs-string">{2}</span>&gt;</span>column<span class="hljs-tag">&lt;/<span class="hljs-name">Col</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">Row</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>

    )
}
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> test;
</code></pre>
<style>
    .demo-type .jtalk-col {
        background:#00A0E9;
        color:#fff;
        text-align:center;
        line-height:30px;
    }
</style>`}}></div>
            <div className="demo-component">
            <Grid />
            </div>
          </div>
        
          <div className="demo col-md-6">
          <div dangerouslySetInnerHTML={{__html:` <blockquote>
<p>响应式布局</p>
</blockquote>
<pre><code className="lang-jsx"><span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> {Row, Col} <span class="hljs-keyword">from</span> <span class="hljs-string">'jtalk_components'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">return</span> (
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"demo-type"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Row</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">Col</span> <span class="hljs-attr">sm</span>=<span class="hljs-string">{8}</span> <span class="hljs-attr">lg</span>=<span class="hljs-string">{5}</span>&gt;</span>column<span class="hljs-tag">&lt;/<span class="hljs-name">Col</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">Col</span> <span class="hljs-attr">sm</span>=<span class="hljs-string">{2}</span> <span class="hljs-attr">lg</span>=<span class="hljs-string">{5}</span> <span class="hljs-attr">offset</span>=<span class="hljs-string">{2}</span>&gt;</span>column<span class="hljs-tag">&lt;/<span class="hljs-name">Col</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">Row</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Row</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{marginTop:</span> <span class="hljs-attr">10</span>}}&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">Col</span> <span class="hljs-attr">sm</span>=<span class="hljs-string">{{unit:5}}</span> <span class="hljs-attr">lg</span>=<span class="hljs-string">{5}</span>&gt;</span>column<span class="hljs-tag">&lt;/<span class="hljs-name">Col</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">Col</span> <span class="hljs-attr">sm</span>=<span class="hljs-string">{{unit:5,offset:2}}</span> <span class="hljs-attr">lg</span>=<span class="hljs-string">{{offset:0,unit:7}}</span>&gt;</span>column<span class="hljs-tag">&lt;/<span class="hljs-name">Col</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">Row</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>

    )
}
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> test;
</code></pre>
<style>
    .demo-type .jtalk-col {
        background:#00A0E9;
        color:#fff;
        text-align:center;
        line-height:30px;
    }
</style>`}}></div>
            <div className="demo-component">
            <Dynamic />
            </div>
          </div>
        
      </div>
      
          </div>
        );
      }
    }

    export default GridPage;
    