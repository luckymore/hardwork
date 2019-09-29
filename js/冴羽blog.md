## 原型与原型链

### 个人理解
  原型链的存在，隔离了属性的添加，共享了属性的访问
  
### 原型
  - 每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性
  - 有两种方式访问原型对象：
    - 构造函数与原型: Person.prototype
    - 实例与实例原型: 
      - person.__proto__ === Person.prototype
      - Object.getPrototypeOf(person)

### __proto__
  - 不是一个属性，而是 getter/setter, 来自于 Object.prototype。当访问 a.__proto__ 时，其实调用了 a.__proto__.getter
  - console打印，是虚的
  - new 实现的时候？？

### 创建对象是继承吗？
  - 继承意味着复制操作，然而JavaScript 只是在两个对象之间创建一个关联


### 其他问题
  #### Function.__proto__===Function.prototype
    我认为有两种可能：一是为了保持与其他函数一致，二是就是表明一种关系而已。
    简单的说，我认为：就是先有的Function，然后实现上把原型指向了Function.prototype，但是我们不能倒过来推测因为Function.__proto__ === Function.prototype，所以Function调用了自己生成了自己。

![关系图](https://user-images.githubusercontent.com/17822028/57208736-e9bbed00-7007-11e9-9d2e-aa3332327c06.png)


### 其他
  - [Object.prototype.toString方法的原理](https://www.cnblogs.com/ziyunfei/archive/2012/11/05/2754156.html)
