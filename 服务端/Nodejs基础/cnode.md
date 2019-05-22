#### 背景
  看到狼叔的[如何正确的学习Node.js](https://cnodejs.org/topic/5ab3166be7b166bb7b9eccf7)里有一句话，对我现在的处境特别贴切。
  > 很多是从前端转过来的，对数据库，架构方面知识欠缺，对系统设计也知之不多，这是很危险的，有种麻杆打狼两头害怕的感觉。
  
  接触egg的第12天，，，egg某种程度上屏蔽了对初学者node基础的要求，而我对node的了解也几乎只是`fs`，麻杆打狼? 或许现在的我连麻杆都没有。
  特此整下这些天看到的名词（持续添加）
  欠的债迟早要还的，加紧学node，深夜码文，其实就是发发牢骚，希望得到鼓励和认同，啵。

- `BFF` 在蚂蚁金服，服务端层我们更多把 Node 定位为 BFF 层实现，BFF 是 [Backend For Frontend](https://mp.weixin.qq.com/s/IYddaaw2ps1wR2VT1dZWPg) 的缩写，翻译成用户体验适配层。

- `SLB` 负载均衡（Server Load Balancer，简称SLB）是对多台云服务器进行流量分发的负载均衡服
务。SLB可以通过流量分发扩展应用系统对外的服务能力，通过消除单点故障提升应用系统的可用性

- `tdd | bdd` 学习 Node.js 的三个境界: 打日志：console.log; 断点调试：node debugger 或node inspector 或vscode; 测试驱动开发（tdd | bdd）;

- `DIRT` 《Node.js in action》一书里说，Node.js 所针对的应用程序有一个专门的简称：DIRT。它表示数据密集型实时（data-intensive real-time）程序。因为 Node.js 自身在 I/O 上非常轻量，它善于将数据从一个管道混排或代理到另一个管道上，这能在处理大量请求时持有很多开放的连接，并且只占用一小部分内存。它的设计目标是保证响应能力，跟浏览器一样。

- `RPC` （remote progress call）是指远程过程调用,也就是说两 ,台服务器A , B ,一个应用部署在A服务器上,想要调用B服务器上应用提供的函数/方法,由于不在一个内存空间,不能直接调用,需要通过网络来表达调用的语义和传达调用的数据。

k8s
