/**
 * `Class` 和 `构造函数` 的不同点
 * 1、使用 new 调用构造函数 _classCallCheck
 * 2、继承父类静态方法 Child.__proto__ === Parent
 * 3、Class 内部为严格模式 'use strict'
 */
'use strict'

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass)
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
  })
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass)
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

var Parent = function Parent(name) {
  _classCallCheck(this, Parent)

  this.name = name
}

var Child = (function(_Parent) {
  _inherits(Child, _Parent)

  function Child(name, age) {
    _classCallCheck(this, Child)

    // super - 调用父类的 constructor(name)
    var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, name))

    _this.age = age
    return _this
  }

  return Child
})(Parent)

var child1 = new Child('kevin', '18')

console.log(child1)
