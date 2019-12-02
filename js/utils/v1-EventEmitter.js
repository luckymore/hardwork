// basic
class EventEmitter{
  constructor() {
    this.handler = {}
  }

  on(event, callback) {
    if (this.handler[event]) {
      this.handler[event]
      .push(callback)
    } else {
      this.handler[event] = [callback];
    }
  }

  once(event, callback) {
    if (this.handler[event]) {
      this.handler[event].push(callback)
    } else {
      this.handler[event] = [callback]
    }
  }

  emit(event, ...args) {
    if (this.handler[event]) {
      this.handler[event].forEach(cb => {
        cb(...args)
      })
    }
  }

  off(event, callback) {
    const listeners = this.handler[event]
    if (listeners.length === 1) this.handler[event] = undefined
    else listeners.splice(listeners.indexOf(callback), 1)
  }

  removeAllListeners() {
    this.handler = {}
  }
}

let event=new EventEmitter();
event.on('say',function(){
  //  console.log(str);
});
event.emit('say','hello Jony yu');
//输出hello Jony yu
<<<<<<< HEAD
event.emit('say','hello Jony yu0');
=======
event.emit('say','hello Jony yu1');
>>>>>>> develop
