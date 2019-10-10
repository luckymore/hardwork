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

### word-break
> 是否在文本溢出内容边框的时候断行

主要有四个值：`normal | break-all | keep-all | break-word`
- break-all
  
- 
- 

### overflow-wrap (word-wrap微软定义的，相当于别名)
> 可以理解为，为了防止文本溢出，允许单词断行

主要有三个值：`normal | break-word | anywhere`，实测不支持 `anywhere`，chrome会直接忽略这个属性。。。

## 使用
最常见的使用场景，大概是中英混排，两端对齐

```html
<div class="justify">
Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
        次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉
</div>

<style>
.justify {
  
}
</style>
```
