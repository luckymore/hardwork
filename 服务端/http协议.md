# 常见http问题
一般会先问，http1.0 1.1 2区别，与https的区别，他们属于七层协议的哪一层？那如何把http迁移到https呢？

## http1.0 1.1 2的区别
- 1.0 协议缺陷:
  - 无法复用链接，完成即断开，重新慢启动和 TCP 3次握手
  - head of line blocking: 线头阻塞，导致请求之间互相影响 [http1.1才有的？？？](https://github.com/bagder/http2-explained/blob/master/zh/part2.md)

- 1.1 改进:
  - 长连接(默认 keep-alive)，复用
  - 新增 `host` 字段指定对应的虚拟站点: HTTP/1.1 的所有请求报文中必须包含一个Host头字段。如果一个 HTTP/1.1 请求缺少 Host 头字段或者设置了超过一个的 Host 头字段，一个400（Bad Request）状态码会被返回。
  - 新增功能:
    - 断点续传：请求头引入了range/If-Range头域，它允许只请求资源的某个部分，即返回码是206（Partial Content）
    - ~~身份认证: SSL???~~
    - 状态管理：简单理解为，描述了两个头字段：Cookie和Set-cookie，用于携带服务端和客户端之间的状态信息
    - 缓存
      Cache-Control
      Expires/Date/Age  1.0
      Last-Modified
      Etag

- 2.0:
  - 多路复用: 原来是同一个 TCP 连接里面，上一个回应（response）发送完了，服务器才能发送下一个，现在可以多个回应一起发送
  - ~~二进制分帧层: 应用层和传输层之间~~
  - 首部压缩: 头信息（header）原来是直接传输文本，现在是压缩后传输。
  - 服务端推送: 是 HTTP/2 协议里面，唯一一个需要开发者自己配置的功能。其他功能都是服务器和浏览器自动实现，不需要开发者关心

## http 与 https 的区别
- https很安全
  网络安全，一般考虑三个方面 CIA,（confidentiality, integrity, availability）
  - confidentiality 安全性 
    用协商的对称加密算法和密钥加密传输，不会有代理缓存或被中间代理解密，中间还有一个协商加密算法的过程，随机在浏览器支持的加密方式中选一个
  - integrity 完整性 内容采用SHA等hash算法不会被篡改
  - availability 几乎无区别
- 默认端口分别为80、443
- 加密过程对性能有一定影响

### http、https 协议属于应用层，准确的说是运行在TCP协议上的协议
<details>
  <summary>七层协议及其配合过程</summary>

  #### 七层协议 
  七层协议只是概念模型：“开放式系统互联通信参考模型”（英语：Open System Interconnection Reference Model，缩写为 OSI），简称为OSI模型（OSI model）
  现行网络通信模型：TCP/IP协议族
  ![七层协议](https://pic4.zhimg.com/80/12450251a3d61033e5a4bbdecebbf374_hd.jpg)
  
  #### 七层协议的配合过程
  ![七层协议的配合过程](https://pic2.zhimg.com/80/v2-88808b48a5cc682c2a59d10eecf9974f_hd.jpg)
</details>

### 如何迁移到https
使用[Certbot](https://certbot.eff.org/)工具，选择服务器和系统
- 安装免费证书
- 服务器配置, nginx示例
```shell
# 配置 nginx 、验证域名所有权
location ^~ /.well-known/acme-challenge/ {
   default_type "text/plain";
   root     /home/wwwroot/linuxstory.org/;
}

location = /.well-known/acme-challenge/ {
   return 404;
}

# 使用 SSL 证书
listen 443 ssl;
server_name linuxstory.org www.linuxstory.org;
index index.html index.htm index.php;
root  /home/wwwroot/linuxstory.org;
 
ssl_certificate      /etc/letsencrypt/live/linuxstory.org/fullchain.pem;
ssl_certificate_key  /etc/letsencrypt/live/linuxstory.org/privkey.pem;

# 访问请求自动重定
server {
    listen 80;
    server_name linuxstory.org www.linuxstory.org;
    return 301 https://$server_name$request_uri;
}
```

如果还往细了问，，对不起大哥，我是个前端 at present，或者向对方请教请教😂


## 缓存机制
### 对于浏览器来说，有三种表现形式
- `Status Code: 200  (from disk cache)` 重启浏览器后，内存释放了，再查看资源则是从硬盘中获取，同时读取到浏览器进程的内存中，刷新页面又变成从内存中读取
- `Status Code: 200  (from memory cache)` 直接从内存中读取
- `Status Code: 304` 询问服务器，未过期返回304，过期返回200和新的资源

### 协商缓存，由多个请求头控制：
> 强缓存，设置缓存的过期时间，优先级 `Cache-Control > Expires`
- `Expires`: ~~一说与 `date` 比较~~
  ```
  Expires: Fri, 30 Oct 1998 14:19:41 GMT

  HTTP date 的值为 Greenwich Mean Time (GMT格林威治时间) ,其它格式均代表已过期
  ```
- `Cache-Control`
  <details>
  <summary>取值说明</summary>

  `max-age=[seconds]` 指定表示被认为是新鲜的最长时间。与Expires类似，这个指令是相对于请求的时间的，而不是绝对的。[秒]是您希望表示为其刷新的请求的时间间隔的秒数。

  `s-maxage=[seconds]` 类似于max-age，但它只适用于共享(例如代理)缓存。
  `public` 将经过验证的响应标记为可缓存;通常，如果需要HTTP身份验证，响应将自动成为私有的。

  `private` 允许特定于一个用户的缓存(例如，在浏览器中)存储响应;共享缓存(例如，在代理中)可能没有。无缓存强制缓存每次在释放缓存副本之前将请求提交给源服务器进行验证。这有助于确保身份验证得到尊重(与public结合)，或者在不牺牲缓存的所有好处的情况下保持严格的新鲜度。

  `no-store` 指示缓存在任何条件下都不要保存表示形式的副本。

  `must-revalidate` 告诉缓存，它们必须遵守关于表示的任何新鲜信息。HTTP允许缓存在特殊条件下为陈旧的表示提供服务;通过指定这个头，您告诉缓存您希望它严格遵循您的规则。

  `proxy-revalidate` 类似于必须重新验证，只是它只适用于代理缓存。
  </details>


> 已过期，与服务器协商，根据以下头信息，验证是否更新本地缓存,优先级 `Etag > Last-Modified`
- Last-Modified / If-Modified-Since
- Etag / If-None-Match

一般由web server自动生成，适用于静态资源，但是无法处理动态内容(like CGI, ASP or database sites)


## 参考
- [Caching Tutorial](https://www.mnot.net/cache_docs/#CACHE-CONTROL)
- [https建立连接的过程【知乎-车小胖】](https://www.zhihu.com/question/19577317/answer/103091361)
