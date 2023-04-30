const t=JSON.parse('{"key":"v-b563f102","path":"/my-world/personal-project/Java%E5%AE%9E%E7%8E%B0%E7%9A%84%E7%AE%80%E6%98%93%E6%95%B0%E6%8D%AE%E5%BA%93/5.html","title":"VM中的对象以及死锁检测","lang":"zh-CN","frontmatter":{"title":"VM中的对象以及死锁检测","order":6,"date":"2022-12-08T00:00:00.000Z","category":["个人项目"],"tag":["Java","数据库"],"description":"前面我们已经讲了DM中DataItem与Log对象现在我们就讲一下VM中的对象和什么是事务抽象 前面DM与TM都是比较简单的都是基于文件的操作，而VM就比较难，在VM层实现了死锁的检测、两种隔离级别(读已提交与可重复读) 所以我们先从简单的讲起 VM中的对象 VM中的对象是一个Entry结构，每个Entry对象的结构为 [xmin][xmax][Data] xim 八个字节是创建该记录的事务编号 xmax 八个字节是删除该条记录的事务编号 data 持有的数据","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/my-world/personal-project/Java%E5%AE%9E%E7%8E%B0%E7%9A%84%E7%AE%80%E6%98%93%E6%95%B0%E6%8D%AE%E5%BA%93/5.html"}],["meta",{"property":"og:title","content":"VM中的对象以及死锁检测"}],["meta",{"property":"og:description","content":"前面我们已经讲了DM中DataItem与Log对象现在我们就讲一下VM中的对象和什么是事务抽象 前面DM与TM都是比较简单的都是基于文件的操作，而VM就比较难，在VM层实现了死锁的检测、两种隔离级别(读已提交与可重复读) 所以我们先从简单的讲起 VM中的对象 VM中的对象是一个Entry结构，每个Entry对象的结构为 [xmin][xmax][Data] xim 八个字节是创建该记录的事务编号 xmax 八个字节是删除该条记录的事务编号 data 持有的数据"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-30T15:44:42.000Z"}],["meta",{"property":"article:author","content":"CodeVmore"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:published_time","content":"2022-12-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-30T15:44:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VM中的对象以及死锁检测\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-30T15:44:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CodeVmore\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"VM中的对象","slug":"vm中的对象","link":"#vm中的对象","children":[{"level":3,"title":"Entry对象的包裹","slug":"entry对象的包裹","link":"#entry对象的包裹","children":[]},{"level":3,"title":"Entry对象的读取","slug":"entry对象的读取","link":"#entry对象的读取","children":[]}]},{"level":2,"title":"事务抽象","slug":"事务抽象","link":"#事务抽象","children":[{"level":3,"title":"isInSnapshot","slug":"isinsnapshot","link":"#isinsnapshot","children":[]}]},{"level":2,"title":"死锁检测","slug":"死锁检测","link":"#死锁检测","children":[{"level":3,"title":"LockTable","slug":"locktable","link":"#locktable","children":[]},{"level":3,"title":"isList","slug":"islist","link":"#islist","children":[]},{"level":3,"title":"add","slug":"add","link":"#add","children":[]},{"level":3,"title":"死锁检测","slug":"死锁检测-1","link":"#死锁检测-1","children":[]}]}],"git":{"createdTime":1682869482000,"updatedTime":1682869482000,"contributors":[{"name":"李博","email":"libo04@rd.netease.com","commits":1}]},"readingTime":{"minutes":4.03,"words":1209},"filePathRelative":"my-world/personal-project/Java实现的简易数据库/5.md","localizedDate":"2022年12月8日","excerpt":"<p>前面我们已经讲了DM中DataItem与Log对象现在我们就讲一下VM中的对象和什么是事务抽象\\n前面DM与TM都是比较简单的都是基于文件的操作，而VM就比较难，在VM层实现了死锁的检测、两种隔离级别(读已提交与可重复读)\\n所以我们先从简单的讲起</p>\\n<h2> VM中的对象</h2>\\n<p>VM中的对象是一个Entry结构，每个Entry对象的结构为</p>\\n<p>[xmin][xmax][Data]</p>\\n<p>xim 八个字节是创建该记录的事务编号<br>\\nxmax 八个字节是删除该条记录的事务编号<br>\\ndata  持有的数据</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/CodeVmore/images/blog/20230429212206.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{t as data};
