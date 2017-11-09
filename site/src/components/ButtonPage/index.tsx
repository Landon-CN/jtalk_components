
    /* tslint:disable */
    import React from 'react';
    import Button from './Button';import ButtonSize from './ButtonSize';

    class ButtonPage extends React.Component<{}, {}> {
      render() {

        return (
          <div>
            <h1 id="button-">Button 按钮</h1>
<blockquote>
<p>你好啊</p>
</blockquote>

            <div className="demo-list row">
            
                <div className="demo col-md-6">
                  <blockquote>
<p>可以点击</p>
</blockquote>
<pre><code className="lang-jsx"><div dangerouslySetInnerHTML={{__html:`<span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> {Button} <span class="hljs-keyword">from</span> <span class="hljs-string">'Com'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">return</span> (
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>123<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>
    )
}
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> test;`}}></div>
</code></pre>

                  <div className="demo-component">
                  <Button />
                  </div>
                </div>
              
                <div className="demo col-md-6">
                  <blockquote>
<p>按钮大小</p>
</blockquote>
<pre><code className="lang-jsx"><div dangerouslySetInnerHTML={{__html:`<span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> {Button} <span class="hljs-keyword">from</span> <span class="hljs-string">'Com'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">return</span> (
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>small<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"noraml"</span>&gt;</span>noraml<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"big"</span>&gt;</span>big<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>

    )
}
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> test;`}}></div>
</code></pre>

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
    