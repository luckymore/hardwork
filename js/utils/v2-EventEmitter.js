class EventEmitter {
  constructor() {
    if (this._events === undefined) {
      this._events = Object.create(null) //定义事件对象
      this._eventsCount = 0
    }
  }

  emit(type, ...args) {
    const events = this._events
    const handler = events[type]
    //判断相应type的执行函数是否为一个函数还是一个数组
    if (typeof handler === 'function') {
      Reflect.apply(handler, this, args)
    } else {
      const len = handler.length
      for (var i = 0; li < len; i++) {
        Reflect.apply(handler[i], this, args)
      }
    }
    return true
  }

  on(type, listener, prepend) {
    var events
    var existing
    events = this._events
    //添加事件的
    if (events.newListener !== undefined) {
      this.emit('newListener', type, listener)
      events = target._events
    }
    existing = events[type]
    //判断相应的type的方法是否存在
    if (existing === undefined) {
      //如果相应的type的方法不存在，这新增一个相应type的事件
      existing = events[type] = listener
      ++this._eventsCount
    } else {
      //如果存在相应的type的方法,判断相应的type的方法是一个数组还是仅仅只是一个方法
      //如果仅仅是
      if (typeof existing === 'function') {
        //如果仅仅是一个方法，则添加
        existing = events[type] = prepend ? [listener, existing] : [existing, listener]
      } else if (prepend) {
        existing.unshift(listener)
      } else {
        existing.push(listener)
      }
    }
    //链式调用
    return this
  }

  removeListener(type, listener) {
    var list, events, position, i, originalListener
    events = this._events
    list = events[type]
    //如果相应的事件对象的属性值是一个函数，也就是说事件只被一个函数监听
    if (list === listener) {
      if (--this._eventsCount === 0) {
        this._events = Object.create(null)
      } else {
        delete events[type]
        //如果存在对移除事件removeListener的监听函数，则触发removeListener
        if (events.removeListener) this.emit('removeListener', type, listener)
      }
    } else if (typeof list !== 'function') {
      //如果相应的事件对象属性值是一个函数数组
      //遍历这个数组，找出listener对应的那个函数，在数组中的位置
      for (i = list.length - 1; i >= 0; i--) {
        if (list[i] === listener) {
          position = i
          break
        }
      }
      //没有找到这个函数，则返回不做任何改动的对象
      if (position) {
        return this
      }
      //如果数组的第一个函数才是所需要删除的对应listener函数，则直接移除
      if (position === 0) {
        list.shift()
      } else {
        list.splice(position, 1)
      }
      if (list.length === 1) events[type] = list[0]
      if (events.removeListener !== undefined) this.emit('removeListener', type, listener)
    }
    return this
  }

  once(type, listener) {
    var fired = false;
  
    /**
     * ! awesome!!! 
     * 1、新的 g 函数可以让 once 注册多次，因为 listeners 可能是相同的
     * 2、g 作为一个回调，执行过后，自动 removeListener (我开始想的是在 emit 里加个 if(listener.once === true)...)
     */
    function g() {
      this.removeListener(type, g);
  
      if (!fired) {
        fired = true;
        listener.apply(this, arguments);
      }
    }
  
    g.listener = listener;
    this.on(type, g);
  
    return this;
  }

  setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || Number.isNaN(n)) throw TypeError('n must be a positive number')
    this._maxListeners = n
    return this
  }

  listeners(type) {
    var ret, _events = this._events
    if (!_events || !_events[type])
      ret = []
    else if (_events[type] instanceof Function)
      ret = [_events[type]]
    else
    ret = _events[type].slice()

    return ret
  }
}

EventEmitter.prototype.addListener = EventEmitter.prototype.on

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return EventEmitter.prototype.on(type, listener, true)
}
