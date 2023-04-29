const n=JSON.parse('{"key":"v-9fd7a58c","path":"/my-world/balabala/a.html","title":"sss","lang":"zh-CN","frontmatter":{"sidebar":"heading","title":"sss","order":2,"description":"二分查找/排序 二分查找-I 给定一个元素升序的、无重复数字的整型数组 nums 和一个目标值 target ， 写一个函数搜索 nums 中的 target，如果目标值存在返回下标（下标从 0 开始），否则返回 -1 public class Solution { public int search (int[] nums, int target) { int l = 0, r = nums.length-1; while(l &lt;= r){ int mid = (l + r)/2; if(nums[mid] == target) return mid; else if(nums[mid] &gt; target){ r = mid - 1; }else{ l = mid + 1; } } return -1; } }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/my-world/balabala/a.html"}],["meta",{"property":"og:title","content":"sss"}],["meta",{"property":"og:description","content":"二分查找/排序 二分查找-I 给定一个元素升序的、无重复数字的整型数组 nums 和一个目标值 target ， 写一个函数搜索 nums 中的 target，如果目标值存在返回下标（下标从 0 开始），否则返回 -1 public class Solution { public int search (int[] nums, int target) { int l = 0, r = nums.length-1; while(l &lt;= r){ int mid = (l + r)/2; if(nums[mid] == target) return mid; else if(nums[mid] &gt; target){ r = mid - 1; }else{ l = mid + 1; } } return -1; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-28T18:14:04.000Z"}],["meta",{"property":"article:author","content":"CodeVmore"}],["meta",{"property":"article:modified_time","content":"2023-04-28T18:14:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sss\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-28T18:14:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CodeVmore\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"二分查找/排序","slug":"二分查找-排序","link":"#二分查找-排序","children":[{"level":3,"title":"二分查找-I","slug":"二分查找-i","link":"#二分查找-i","children":[]}]},{"level":2,"title":"aaa","slug":"aaa","link":"#aaa","children":[{"level":3,"title":"aaaa","slug":"aaaa","link":"#aaaa","children":[]}]},{"level":2,"title":"bnbb","slug":"bnbb","link":"#bnbb","children":[]},{"level":2,"title":"ccc","slug":"ccc","link":"#ccc","children":[{"level":3,"title":"xxxx","slug":"xxxx","link":"#xxxx","children":[]}]}],"git":{"createdTime":1682705644000,"updatedTime":1682705644000,"contributors":[{"name":"李博","email":"libo04@rd.netease.com","commits":1}]},"readingTime":{"minutes":0.43,"words":128},"filePathRelative":"my-world/balabala/a.md","localizedDate":"2023年4月28日","excerpt":"<h2> 二分查找/排序</h2>\\n<h3> 二分查找-I</h3>\\n<p>给定一个元素升序的、无重复数字的整型数组 nums 和一个目标值 target ，\\n写一个函数搜索 nums 中的 target，如果目标值存在返回下标（下标从 0 开始），否则返回 -1</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Solution</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">int</span> search <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> nums<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> target<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">int</span> l <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> r <span class=\\"token operator\\">=</span> nums<span class=\\"token punctuation\\">.</span>length<span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">while</span><span class=\\"token punctuation\\">(</span>l <span class=\\"token operator\\">&lt;=</span> r<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">int</span> mid <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>l <span class=\\"token operator\\">+</span> r<span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">/</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">[</span>mid<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">==</span> target<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span> mid<span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">[</span>mid<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&gt;</span> target<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n                r <span class=\\"token operator\\">=</span> mid <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span><span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">{</span>\\n                l <span class=\\"token operator\\">=</span> mid <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>  \\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
