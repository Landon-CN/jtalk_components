
    /* tslint:disable */
    import React from 'react';
    import Button from './Button';import ButtonSize from './ButtonSize';

    class ButtonPage extends React.Component<{}, {}> {
      render() {

        return (
          <div>
          <div dangerouslySetInnerHTML={{__html:` <h1 id="button-">Button 按钮</h1>
<blockquote>
<p>按钮</p>
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
<td>col 3 is</td>
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
<p>可以点击</p>
</blockquote>
<pre><code className="lang-jsx"><span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> {Button} <span class="hljs-keyword">from</span> <span class="hljs-string">'Com'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">return</span> (
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>123<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>
    )
}
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> test;
</code></pre>
`}}></div>
                  <div className="demo-component">
                  <Button />
                  </div>
                </div>
              
                <div className="demo col-md-6">
                <div dangerouslySetInnerHTML={{__html:` <blockquote>
<p>按钮大小</p>
</blockquote>
<pre><code className="lang-jsx"><span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> {Button} <span class="hljs-keyword">from</span> <span class="hljs-string">'Com'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">return</span> (
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>small<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"default"</span>&gt;</span>default<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"large"</span>&gt;</span>large<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>

    )
}
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> test;
</code></pre>
`}}></div>
                  <div className="demo-component">
                  <ButtonSize />
                  </div>
                </div>
              
            </div>
          </div>
        );
      }
    }

    export default ButtonPage;
    