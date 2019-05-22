#（译）[命名的艺术](https://hackernoon.com/the-art-of-naming-variables-52f44de00aad)

## Arrays

数组通常是包含相同类型项的可迭代列表，所以，`pluralizing`复数化更有意义。

```js
// bad
const fruit = ['apple', 'banana', 'cucumber']
// okay
const fruitArr = ['apple', 'banana', 'cucumber']
// good
const fruits = ['apple', 'banana', 'cucumber']
// great - "names" implies strings
const fruitNames = ['apple', 'banana', 'cucumber']
// great
const fruits = [
  {
    name: 'apple',
    genus: 'malus',
  },
  {
    name: 'banana',
    genus: 'musa',
  },
  {
    name: 'cucumber',
    genus: 'cucumis',
  },
]
```

## Booleans

鉴于 Booleans 只能承载两个值, `true` 或 `false`, 使用`is`，`has`和`can`等前缀将有助于读者推断变量的类型。

```js
// bad
const open = true
const write = true
const fruit = true
const drink = true

// good
const isOpen = true
const canWrite = true
const hasFruit = true
const allowDrink = true
```

那谓语函数(返回 booleans 的函数)的命名, 该怎样和布尔值区分呢？
可以使用谓语动词做前缀呀~

```js
// bad
const user = {
  fruits: ['apple'],
}
const hasFruit = (user, fruitName) => user.fruits.includes(fruitName)
// what do we name this boolean?
const x = hasFruit(user, 'apple')

// good
const user = {
  fruits: ['apple'],
}
const checkHasFruit = (user, fruitName) => user.fruits.includes(fruitName)
const hasFruit = checkHasFruit(user, 'apple')
```

## Numbers
描述数字的词语可以用, `maximum`, `minimum`, `total`等。
```js
// bad
const pugs = 3;

// good
const minPugs = 1;
const maxPugs = 5;
const totalPugs = 3;
```

## Functions
函数命名应该使用一个动词和一个名词。当对资源执行某种类型的操作时，可以用 `actionResource`这种格式命名。比如，`getUser`

```js
// bad
userData(userId)
userDataFunc(userId)
totalOfItems(items)

// good
getUser(userId);
calculateTotal(items);
```

我见过用于转换值的常见约定是，用 `to` 作为函数名的前缀。

```js
// I like it!
toDollars('euros', 20);
toUppercase('a string');
```

另一个我喜欢的常见命名模式是，遍历数组时, 内部函数接收的参数名用数组的单数形式。

```js
// bad
const newFruits = fruits.map(x => {
    return doSomething(x);
});

// good
const newFruits = fruits.map(fruit => {
    return doSomething(fruit);
});

```

## 总结
我们在上面那些小例子中，使用了一些命名约定。统一的命名比如何命名更重要。如果有统一的命名模式，你的代码更容易推理，也就更容易被后来的开发者理解。


---
<zhangningning@xiaomi.com>
