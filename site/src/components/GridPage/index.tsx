
    /* tslint:disable */
    import React from 'react';
    import Grid from './Grid';

    class GridPage extends React.Component<{}, {}> {
      render() {

        return (
          <div>
          <div dangerouslySetInnerHTML={{__html:` <h1 id="grid-">Grid 栅格</h1>
<blockquote>
<p>栅格</p>
</blockquote>
<table class="table table-bordered table-hover" style="width:auto;">
<thead>
<tr>
<th>Tables</th>
<th style="text-align:center">Are</th>
<th style="text-align:right">Cool</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>col 3 is</code></td>
<td style="text-align:center">right-aligned</td>
<td style="text-align:right">$1600</td>
</tr>
<tr>
<td>col 2 is</td>
<td style="text-align:center">centered</td>
<td style="text-align:right">$12</td>
</tr>
<tr>
<td>zebra stripes</td>
<td style="text-align:center">are neat</td>
<td style="text-align:right">$1</td>
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
    }
</style>`}}></div>
                  <div className="demo-component">
                  <Grid />
                  </div>
                </div>
              
            </div>
          </div>
        );
      }
    }

    export default GridPage;
    