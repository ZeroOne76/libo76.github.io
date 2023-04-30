import{_ as n,X as s,Y as a,a3 as p}from"./framework-4966486c.js";const t={},c=p(`<p>前面我们说了页面，那现在就来说一下页面中的存储的Data是什么格式的 页面中存储的数据是一个一个的DataItem，所以这样就不会造成数据的混乱</p><h2 id="dataitem" tabindex="-1"><a class="header-anchor" href="#dataitem" aria-hidden="true">#</a> DataItem</h2><p>DataItem是向上层提供的数据对象，上层通过地址，向DM请求到对应的DataItem，再获取到其中的数据 DateItem结构</p><figure><img src="https://cdn.jsdelivr.net/gh/CodeVmore/images/blog/20230429211749.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>记住只要是页面上的数据就都是这种格式</p></blockquote><p>ValidFlag 0 为合法 1 为非法 Size 标识Data长度</p><p>在开始的时候我们就说了DM不仅会管理页面中的数据还会管理日志文件</p><h2 id="logfile" tabindex="-1"><a class="header-anchor" href="#logfile" aria-hidden="true">#</a> LogFile</h2><p>DM在每次对底层数据操作的时候，都会记录一条日志到磁盘上，在数据库崩溃之后可以根据日志的内容恢复数据文件</p><h3 id="日志文件格式" tabindex="-1"><a class="header-anchor" href="#日志文件格式" aria-hidden="true">#</a> 日志文件格式</h3><p>日志文件的格式为</p><p>[XChecksum][log1][log2]...[logn][BadTail]</p><p>XChecksum是一个四字节的整数，是对后续所有日志计算的校验和，log1~logn是常规日志,BadTail是在数据库崩溃时，没有来得及写完的日志数据</p><p>每条日志的格式为 [Size][Checksum][Data] Size占四个字节 Checksum占四个字节 Data所占字节长度就是Size 其中size表示的是这条日志中Data的字段数，Checksum则是该条日志的校验和</p><p>这里可以看到在.db文件中与.log文件中分别保存的是DataItem与Log对象，之所以设置为这种，就是为了后面解析的时候更加方便</p><figure><img src="https://cdn.jsdelivr.net/gh/CodeVmore/images/blog/20230429211811.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="读取日志" tabindex="-1"><a class="header-anchor" href="#读取日志" aria-hidden="true">#</a> 读取日志</h3><p>这里读取日志返回的也是该Log对象，即三个参数都有 读取注意事项</p><ol><li>注意预防边界，避免读取内容数据超过边界所有需要进行判断</li><li>避免文件被修改或其它原因导致数据不一致所有需要进行校验</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">internNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>position <span class="token operator">+</span> <span class="token constant">OF_DATA</span> <span class="token operator">&gt;=</span> fileSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">ByteBuffer</span> tmp <span class="token operator">=</span> <span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">allocate</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            fc<span class="token punctuation">.</span><span class="token function">position</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>
            fc<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Panic</span><span class="token punctuation">.</span><span class="token function">panic</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token class-name">Parser</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>tmp<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>position <span class="token operator">+</span> size <span class="token operator">+</span> <span class="token constant">OF_DATA</span> <span class="token operator">&gt;</span> fileSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">ByteBuffer</span> buf <span class="token operator">=</span> <span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">allocate</span><span class="token punctuation">(</span><span class="token constant">OF_DATA</span> <span class="token operator">+</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            fc<span class="token punctuation">.</span><span class="token function">position</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>
            fc<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Panic</span><span class="token punctuation">.</span><span class="token function">panic</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> log <span class="token operator">=</span> buf<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> checkSum1 <span class="token operator">=</span> <span class="token function">calChecksum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>log<span class="token punctuation">,</span> <span class="token constant">OF_DATA</span><span class="token punctuation">,</span> log<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> checkSum2 <span class="token operator">=</span> <span class="token class-name">Parser</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>log<span class="token punctuation">,</span> <span class="token constant">OF_CHECKSUM</span><span class="token punctuation">,</span> <span class="token constant">OF_DATA</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>checkSum1 <span class="token operator">!=</span> checkSum2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        position <span class="token operator">+=</span> log<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">return</span> log<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：这里还有个方法读取日志即next 可以看出用next方法返回的是Log对象里面其中一个字段即data</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> log <span class="token operator">=</span> <span class="token function">internNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>log <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>log<span class="token punctuation">,</span> <span class="token constant">OF_DATA</span><span class="token punctuation">,</span> log<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日志文件的写入" tabindex="-1"><a class="header-anchor" href="#日志文件的写入" aria-hidden="true">#</a> 日志文件的写入</h3><p>这里和DataItem以及其它的都是一样的即你只需要传入本身的数据，而不用过多的去关注如何封装成一个DataItem或者一个一个的Log对象 日志文件的步骤</p><ol><li>日志文件写入时传入的只有数据，所有我们需要将其包裹成Log对象</li><li>写入日志后还需要修改日志文件中的校验和</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> log <span class="token operator">=</span> <span class="token function">wrapLog</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ByteBuffer</span> buf <span class="token operator">=</span> <span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>
        lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            fc<span class="token punctuation">.</span><span class="token function">position</span><span class="token punctuation">(</span>fc<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            fc<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Panic</span><span class="token punctuation">.</span><span class="token function">panic</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">updateXChecksum</span><span class="token punctuation">(</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

   <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">updateXChecksum</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> log<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>xChecksum <span class="token operator">=</span> <span class="token function">calChecksum</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>xChecksum<span class="token punctuation">,</span> log<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            fc<span class="token punctuation">.</span><span class="token function">position</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            fc<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span><span class="token class-name">Parser</span><span class="token punctuation">.</span><span class="token function">int2Byte</span><span class="token punctuation">(</span>xChecksum<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            fc<span class="token punctuation">.</span><span class="token function">force</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Panic</span><span class="token punctuation">.</span><span class="token function">panic</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">private</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">wrapLog</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> checksum <span class="token operator">=</span> <span class="token class-name">Parser</span><span class="token punctuation">.</span><span class="token function">int2Byte</span><span class="token punctuation">(</span><span class="token function">calChecksum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> size <span class="token operator">=</span> <span class="token class-name">Parser</span><span class="token punctuation">.</span><span class="token function">int2Byte</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Bytes</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>size<span class="token punctuation">,</span> checksum<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以DM中就只管理了页面中的数据DataItem与Log文件中的Log对象</p>`,27),o=[c];function e(u,l){return s(),a("div",null,o)}const k=n(t,[["render",e],["__file","3.html.vue"]]);export{k as default};
