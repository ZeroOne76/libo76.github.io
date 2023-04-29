import{_ as n,X as s,Y as a,a3 as e}from"./framework-4966486c.js";const t={},p=e(`<h2 id="二分查找-排序" tabindex="-1"><a class="header-anchor" href="#二分查找-排序" aria-hidden="true">#</a> 二分查找/排序</h2><h3 id="二分查找-i" tabindex="-1"><a class="header-anchor" href="#二分查找-i" aria-hidden="true">#</a> 二分查找-I</h3><p>给定一个元素升序的、无重复数字的整型数组 nums 和一个目标值 target ，</p><p>写一个函数搜索 nums 中的 target，如果目标值存在返回下标（下标从 0 开始），否则返回 -1</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
publicclassSolution <span class="token punctuation">{</span>

    publicint search <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span>inttarget<span class="token punctuation">)</span><span class="token punctuation">{</span>

        intl <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> r <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span><span class="token punctuation">(</span>l <span class="token operator">&lt;=</span> r<span class="token punctuation">)</span><span class="token punctuation">{</span>

            intmid <span class="token operator">=</span> <span class="token punctuation">(</span>l <span class="token operator">+</span> r<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> mid<span class="token punctuation">;</span>

            <span class="token function">elseif</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>

                r <span class="token operator">=</span> mid <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>

                l <span class="token operator">=</span> mid <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>  

        <span class="token punctuation">}</span>

        <span class="token keyword">return</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[p];function c(l,o){return s(),a("div",null,i)}const r=n(t,[["render",c],["__file","link-layer.html.vue"]]);export{r as default};
