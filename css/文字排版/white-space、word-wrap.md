## 文字排版相关的属性
> 今天用到 word-break: break-all; 知道这么用可以，属性挨个试一遍，总能完成任务，但是无从分析它生效的原因，之前一直都是得过且过，现在给自己下了降头 :cry:，要搞清楚，心里才有底气。

### white-space
> white-space CSS 属性是用来设置如何处理元素中的 空白(Whitespace)。[HTML Living Standard](https://html.spec.whatwg.org/)指定五个字符为ASCII码空白: U+0009 TAB, U+000A LF, U+000C FF, U+000D CR, and U+0020

主要有五个值：`normal | nowrap | pre | pre-wrap | pre-line`

```html
<div id="box">
  Hi&nbsp;&nbsp;,
  This   is a incomprehensibilities long word.
  </br>
  你好&nbsp;&nbsp;，
  这   是一个不可思议的长单词
</div>

<style>
#box {
  margin: 100px;
  width: 100px;
  border: 1px solid black;

  /* 永不换行 - 空格被合并，只有</br>才能导致换行！ */
  white-space: nowrap;

  /* preserve 保留空格、换行符，不自动换行 */
  white-space: pre;

  /* pre + wrap 保留空格、换行符，会自动换行 */
  white-space: pre-wrap;
}
</style>
```






<!-- 作者：顾二凡
链接：https://juejin.im/post/5b8905456fb9a01a105966b4
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 -->
