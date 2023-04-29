const n=JSON.parse('{"key":"v-7290b227","path":"/computer-basic/network/transport-layer.html","title":"传输层","lang":"zh-CN","frontmatter":{"title":"传输层","description":"二分查找/排序 二分查找-I 给定一个元素升序的、无重复数字的整型数组 nums 和一个目标值 target ， 写一个函数搜索 nums 中的 target，如果目标值存在返回下标（下标从 0 开始），否则返回 -1 publicclassSolution { publicint search (int[] nums,inttarget){ intl = 0, r = nums.length-1; while(l &lt;= r){ intmid = (l + r)/2; if(nums[mid] == target) return mid; elseif(nums[mid] &gt; target){ r = mid -1; }else{ l = mid +1; } } return-1; } }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/computer-basic/network/transport-layer.html"}],["meta",{"property":"og:title","content":"传输层"}],["meta",{"property":"og:description","content":"二分查找/排序 二分查找-I 给定一个元素升序的、无重复数字的整型数组 nums 和一个目标值 target ， 写一个函数搜索 nums 中的 target，如果目标值存在返回下标（下标从 0 开始），否则返回 -1 publicclassSolution { publicint search (int[] nums,inttarget){ intl = 0, r = nums.length-1; while(l &lt;= r){ intmid = (l + r)/2; if(nums[mid] == target) return mid; elseif(nums[mid] &gt; target){ r = mid -1; }else{ l = mid +1; } } return-1; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-28T18:14:04.000Z"}],["meta",{"property":"article:author","content":"CodeVmore"}],["meta",{"property":"article:modified_time","content":"2023-04-28T18:14:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"传输层\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-28T18:14:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CodeVmore\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"二分查找/排序","slug":"二分查找-排序","link":"#二分查找-排序","children":[{"level":3,"title":"二分查找-I","slug":"二分查找-i","link":"#二分查找-i","children":[]}]}],"git":{"createdTime":1682705644000,"updatedTime":1682705644000,"contributors":[{"name":"李博","email":"libo04@rd.netease.com","commits":1}]},"readingTime":{"minutes":0.38,"words":114},"filePathRelative":"computer-basic/network/transport-layer.md","localizedDate":"2023年4月28日","excerpt":"<h2> 二分查找/排序</h2>\\n<h3> 二分查找-I</h3>\\n<p>给定一个元素升序的、无重复数字的整型数组 nums 和一个目标值 target ，</p>\\n<p>写一个函数搜索 nums 中的 target，如果目标值存在返回下标（下标从 0 开始），否则返回 -1</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code>\\npublicclassSolution <span class=\\"token punctuation\\">{</span>\\n\\n    publicint search <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> nums<span class=\\"token punctuation\\">,</span>inttarget<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\n        intl <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> r <span class=\\"token operator\\">=</span> nums<span class=\\"token punctuation\\">.</span>length<span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token keyword\\">while</span><span class=\\"token punctuation\\">(</span>l <span class=\\"token operator\\">&lt;=</span> r<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\n            intmid <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>l <span class=\\"token operator\\">+</span> r<span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">/</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">;</span>\\n\\n            <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">[</span>mid<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">==</span> target<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span> mid<span class=\\"token punctuation\\">;</span>\\n\\n            <span class=\\"token function\\">elseif</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">[</span>mid<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&gt;</span> target<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\n                r <span class=\\"token operator\\">=</span> mid <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n\\n            <span class=\\"token punctuation\\">}</span><span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">{</span>\\n\\n                l <span class=\\"token operator\\">=</span> mid <span class=\\"token operator\\">+</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n\\n            <span class=\\"token punctuation\\">}</span>  \\n\\n        <span class=\\"token punctuation\\">}</span>\\n\\n        <span class=\\"token keyword\\">return</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token punctuation\\">}</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
