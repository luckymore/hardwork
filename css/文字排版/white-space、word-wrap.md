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
  任意两个字符之间都插入分隔符，除 `Chinese/Japanese/Korean (CJK)` text
- keep-all
  CJK不会强制换行，非CJK遵循默认规则，即normal
- break-word 👎
  作用和 word-break: normal; 、overflow-wrap: anywhere; 一样，并忽略 `overflow-wrap` 属性的值。


### overflow-wrap (word-wrap微软定义的，相当于别名)
> 可以理解为，为了防止文本溢出，允许单词断行

主要有三个值：`normal | break-word | anywhere`，实测不支持 `anywhere`，chrome 会直接忽略这个属性。。。

## 使用
最常见的使用场景，大概是中英混排，两端对齐

```html
<div class="justify">
Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
        次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉
</div>

<style>
.justify {
  text-align: justify;
  hyphens: auto;  // 换行连字符
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
}
</style>
```


## 趣闻 🤣

- [论洁癖](https://darksair.org/blog/p/2014/web-type/)
- [為什麼你們就是不能加個空格呢？](https://chrome.google.com/webstore/detail/%E7%82%BA%E4%BB%80%E9%BA%BC%E4%BD%A0%E5%80%91%E5%B0%B1%E6%98%AF%E4%B8%8D%E8%83%BD%E5%8A%A0%E5%80%8B%E7%A9%BA%E6%A0%BC%E5%91%A2%EF%BC%9F/paphcfdffjnbcgkokihcdjliihicmbpd)


### 这个一定要单独贴出来，，，检查了下我竟然已经下意识的给空格了，为啥我的感情路还这么坎坷，，，
> 如果你跟我一樣，每次看到網頁上的中文字和英文、數字、符號擠在一塊，就會坐立難安，忍不住想在它們之間加個空格。這個 Google Chrome 的外掛正是你在網路世界走跳所需要的東西，它會自動替你在網頁中所有的中文字和半形的英文、數字、符號之間插入空白。

> 漢學家稱這個空白字元為「盤古之白」，因為它劈開了全形字和半形字之間的混沌。另有研究顯示，打字的時候不喜歡在中文和英文之間加空格的人，感情路都走得很辛苦，有七成的比例會在 34 歲的時候跟自己不愛的人結婚，而其餘三成的人最後只能把遺產留給自己的貓。畢竟愛情跟書寫都需要適時地留白。

> 與大家共勉之。
