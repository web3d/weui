import{o as a,a as n,z as l}from"./vue-libs.80bc6dc9.js";const p={class:"van-doc-markdown-body"},e=l(`<h1>\u4E3B\u9898</h1><div class="van-doc-card"><h3 id="zi-ding-yi-zhu-ti" tabindex="-1">\u81EA\u5B9A\u4E49\u4E3B\u9898</h3><p>\u5F97\u76CA\u4E8E CSS \u53D8\u91CF\u5F3A\u5927\u800C\u7075\u6D3B\u7684\u80FD\u529B\uFF0C\u81EA\u5B9A\u4E49\u4E00\u5957 WeUI \u7684\u4E3B\u9898\u662F\u975E\u5E38\u7B80\u5355\u7684\uFF0C\u4F60\u4E0D\u9700\u8981\u914D\u7F6E\u4EFB\u4F55\u7F16\u8BD1\u5DE5\u5177\uFF0C\u4E5F\u4E0D\u9700\u8981\u5B89\u88C5\u989D\u5916\u7684\u63D2\u4EF6\uFF0C\u76F4\u63A5\u8986\u76D6 CSS \u53D8\u91CF\u5C31\u53EF\u4EE5\u4E86\uFF1A</p><pre><code class="language-css"><span class="hljs-selector-class">.wx-root</span>,<span class="hljs-selector-tag">body</span> {
    <span class="hljs-attr">--weui-BTN-DEFAULT-BG</span>: <span class="hljs-number">#bb0f0f</span>;
}
</code></pre><blockquote><p>\u6CE8\uFF1AWeUI \u4E2D\u7684\u4E3B\u9898\u53D8\u91CF\u4E0D\u662F\u5728 :root \u4E0B\u58F0\u660E\u7684\uFF0C\u7531\u4E8E\u4F18\u5148\u7EA7\u7684\u95EE\u9898\uFF0C\u901A\u8FC7 .wx-root,body \u663E\u5F0F\u5730\u8BA9\u4F60\u6240\u5199\u5185\u5BB9\u7684\u4F18\u5148\u7EA7\u66F4\u9AD8\u4E00\u4E9B\uFF0C\u4ECE\u800C\u786E\u4FDD\u4E3B\u9898\u53D8\u91CF\u7684\u6210\u529F\u8986\u76D6\u3002</p></blockquote><p>\u5982\u679C\u4F60\u53EA\u662F\u5E0C\u671B\u5BF9\u5C40\u90E8\u7684\u4E3B\u9898\u8FDB\u884C\u8C03\u6574\uFF0C\u4E5F\u53EF\u4EE5\u628A\u4E0A\u9762\u7684 CSS \u53D8\u91CF\u8986\u76D6\u903B\u8F91\u52A0\u5728\u4EFB\u4F55\u4E00\u4E2A\u4F60\u60F3\u8C03\u6574\u7684\u8282\u70B9\u4E0A\uFF0C\u4F8B\u5982\uFF1A</p><pre><code class="language-css"><span class="hljs-selector-class">.purple-theme</span> {
    <span class="hljs-attr">--weui-BTN-DEFAULT-BG</span>: <span class="hljs-number">#a062d4</span>;
}
</code></pre></div><h2 id="hei-an-mo-shi" tabindex="-1">\u9ED1\u6697\u6A21\u5F0F</h2><div class="van-doc-card"><h3 id="darkmode-hei-an-mo-shi" tabindex="-1">DarkMode \u9ED1\u6697\u6A21\u5F0F</h3><p>WeUI <code> v2.2.0</code> \u589E\u52A0\u4E86\u5BF9\u9ED1\u6697\u6A21\u5F0F\u5BF9\u652F\u6301\u3002\u9ED1\u6697\u6A21\u5F0F\u9ED8\u8BA4\u8DDF\u968F\u7CFB\u7EDF\uFF0C</p><p>\u53EF\u5728 <code>body</code> \u6DFB\u52A0\u5C5E\u6027 <code>data-weui-theme</code> \u6765\u63A7\u5236\uFF0C\u503C\u4E3A<code>light</code>/<code>dark</code>\u3002</p><h4 id="qiang-zhi-shi-yong-light-liang-se-mo-shi" tabindex="-1">\u5F3A\u5236\u4F7F\u7528 light \u4EAE\u8272\u6A21\u5F0F</h4><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">body</span> <span class="hljs-attr">data-weui-theme</span>=<span class="hljs-string">&quot;light&quot;</span>&gt;</span>
    ...
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
</code></pre><h4 id="shi-yong-weui-bian-liang-lai-kai-fa-hei-an-mo-shi" tabindex="-1">\u4F7F\u7528 WeUI \u53D8\u91CF\u6765\u5F00\u53D1\u9ED1\u6697\u6A21\u5F0F</h4><pre><code class="language-css"><span class="hljs-selector-class">.body</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">var</span>(--weui-BG-<span class="hljs-number">0</span>);
}
</code></pre></div><h2 id="hu-yan-mo-shi" tabindex="-1">\u62A4\u773C\u6A21\u5F0F</h2><div class="van-doc-card"><h3 id="mo-shi" tabindex="-1">\u6A21\u5F0F</h3><blockquote><p>\u5728 WeUI \u7684\u4EE3\u7801\u4E2D\uFF0C\u53EF\u4EE5\u770B\u5230\u6709\u56DB\u79CD\u4E3B\u9898\u8272\u914D\u7F6E\uFF0C\u4F46\u662F\u6587\u6863\u4E2D\u6CA1\u6709\u4EFB\u4F55\u8BF4\u660E\u3002\u770B\u5355\u8BCD CareColor \u662F&quot;\u62A4\u773C\u8272&quot;\u7684\u610F\u601D\uFF0C\u5927\u6982\u5C31\u660E\u767D\u4E86\u3002\u4E0A\u9762\u7684\u9ED1\u6697\u6A21\u5F0F\u5176\u5B9E\u5E94\u8BE5\u53EB &quot;\u9ED1\u6697\u4E3B\u9898&quot;\uFF0C\u662F\u57FA\u4E8E\u4E3B\u9898\u5B9E\u73B0\u7684\uFF0C\u62A4\u773C\u6A21\u5F0F\u8FD9\u624D\u662F\u771F\u6B63\u7684 mode - &quot;\u6A21\u5F0F&quot;\u3002</p></blockquote><p>\u914D\u7F6E\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">body</span> <span class="hljs-attr">data-weui-theme</span>=<span class="hljs-string">&quot;light&quot;</span> <span class="hljs-attr">data-weui-mode</span>=<span class="hljs-string">&#39;care&#39;</span>&gt;</span>
    ...
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
</code></pre></div><h2 id="zhu-ti-bian-liang" tabindex="-1">\u4E3B\u9898\u53D8\u91CF</h2><div class="van-doc-card"><h3 id="ji-chu-bian-liang" tabindex="-1">\u57FA\u7840\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u662F WeUI \u76EE\u524D\u63D0\u4F9B\u7684\u5168\u5C40\u6027 CSS \u4E3B\u9898\u53D8\u91CF\uFF0C\u5177\u4F53\u8BF4\u660E\u8BF7\u53C2\u9605 <a href="./css-variables" target="_blank">CSS \u53D8\u91CF</a> \u7AE0\u8282\uFF1A</p><pre><code class="language-css"><span class="hljs-selector-class">.wx-root</span>, <span class="hljs-selector-tag">body</span> {
    <span class="hljs-attr">--weui-BG-0</span>: <span class="hljs-number">#ededed</span>;
    <span class="hljs-attr">--weui-BG-1</span>: <span class="hljs-number">#f7f7f7</span>;
    <span class="hljs-attr">--weui-BG-2</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attr">--weui-BG-3</span>: <span class="hljs-number">#f7f7f7</span>;
    <span class="hljs-attr">--weui-BG-4</span>: <span class="hljs-number">#4c4c4c</span>;
    <span class="hljs-attr">--weui-BG-5</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attr">--weui-FG-0</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.9</span>);
    <span class="hljs-attr">--weui-FG-HALF</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.9</span>);
    <span class="hljs-attr">--weui-FG-1</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.5</span>);
    <span class="hljs-attr">--weui-FG-2</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.3</span>);
    <span class="hljs-attr">--weui-FG-3</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.1</span>);
    <span class="hljs-attr">--weui-FG-4</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.15</span>);
    <span class="hljs-attr">--weui-RED</span>: <span class="hljs-number">#fa5151</span>;
    <span class="hljs-attr">--weui-ORANGE</span>: <span class="hljs-number">#fa9d3b</span>;
    <span class="hljs-attr">--weui-YELLOW</span>: <span class="hljs-number">#ffc300</span>;
    <span class="hljs-attr">--weui-GREEN</span>: <span class="hljs-number">#91d300</span>;
    <span class="hljs-attr">--weui-LIGHTGREEN</span>: <span class="hljs-number">#95ec69</span>;
    <span class="hljs-attr">--weui-BRAND</span>: <span class="hljs-number">#07c160</span>;
    <span class="hljs-attr">--weui-BLUE</span>: <span class="hljs-number">#10aeff</span>;
    <span class="hljs-attr">--weui-INDIGO</span>: <span class="hljs-number">#1485ee</span>;
    <span class="hljs-attr">--weui-PURPLE</span>: <span class="hljs-number">#6467f0</span>;
    <span class="hljs-attr">--weui-WHITE</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attr">--weui-LINK</span>: <span class="hljs-number">#576b95</span>;
    <span class="hljs-attr">--weui-TEXTGREEN</span>: <span class="hljs-number">#06ae56</span>;
    <span class="hljs-attr">--weui-FG</span>: <span class="hljs-number">#000</span>;
    <span class="hljs-attr">--weui-BG</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attr">--weui-TAG-TEXT-ORANGE</span>: <span class="hljs-number">#fa9d3b</span>;
    <span class="hljs-attr">--weui-TAG-BACKGROUND-ORANGE</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">250</span>, <span class="hljs-number">157</span>, <span class="hljs-number">59</span>, <span class="hljs-number">0.1</span>);
    <span class="hljs-attr">--weui-TAG-TEXT-GREEN</span>: <span class="hljs-number">#06ae56</span>;
    <span class="hljs-attr">--weui-TAG-BACKGROUND-GREEN</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">6</span>, <span class="hljs-number">174</span>, <span class="hljs-number">86</span>, <span class="hljs-number">0.1</span>);
    <span class="hljs-attr">--weui-TAG-TEXT-BLUE</span>: <span class="hljs-number">#10aeff</span>;
    <span class="hljs-attr">--weui-TAG-BACKGROUND-BLUE</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">16</span>, <span class="hljs-number">174</span>, <span class="hljs-number">255</span>, <span class="hljs-number">0.1</span>);
    <span class="hljs-attr">--weui-TAG-TEXT-BLACK</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.5</span>);
    <span class="hljs-attr">--weui-TAG-BACKGROUND-BLACK</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.05</span>);
}
</code></pre></div><div class="van-doc-card"><h3 id="zu-jian-bian-liang" tabindex="-1">\u7EC4\u4EF6\u53D8\u91CF</h3><p>\u6B64\u5916\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u4E5F\u6709\u81EA\u5DF1\u5BF9\u5E94\u7684 CSS \u5168\u5C40\u53D8\u91CF\uFF0C\u4F60\u53EF\u4EE5\u5728\u5B83\u4EEC\u7684\u6587\u6863\u9875\u9762\u4E2D\u627E\u5230\u3002</p></div>`,9),c=[e],j={__name:"theming",setup(h,{expose:s}){return s({frontmatter:{}}),(r,u)=>(a(),n("div",p,c))}};export{j as default};
