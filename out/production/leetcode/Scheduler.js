class Scheduler {
  max = 2
  list = []
  task = []
  async add(promiseFunc){
      return new Promise(resolve => {
         promiseFunc.resolve = resolve
         if (this.task.length < this._max) {
           this.run(promiseFunc)
         } else {
             this.list.push(promiseFunc)
         }
      })

  }

  run (promiseFunc) {
      this.task.push(promiseFunc)
      promiseFunc().then(() => {
          promiseFunc.resolve()
          this.task.splice(this.task.indexOf(promiseFunc), 1)
          if (this.list.length) {
              this.run(this.list.shift())
          }
      })
  }

}
const scheduler = new Scheduler()
const timeout = (time) => {
  return new Promise(r => setTimeout(r, time))}
const addTask = (time, order) => {
  let res = scheduler.add(() => timeout(time))
   // console.log(res, '<<<')
   res.then(() => {
       // console.log(1111)
       console.log(order)
   })
}
addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)