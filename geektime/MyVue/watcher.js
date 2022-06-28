class Watcher {
    constructor({vm, key, cb}) {
        this.vm = vm
        //key=>data中的属性名称
        this.key = key
        //回调函数负责更新视图
        this.cb = cb
        //把watcher对象记录到Dep类的静态属性target
        Dep.target = this
        //触发get方法，在get方法当中会调用addSub将watcher添加到dep当中
        this.oldValue = vm[key]
        Dep.target = null
    }
    
    update() {
        //新旧对比 操作DOM 因此watcher实例的创建要在compile当中进行
        const newValue = this.vm[this.key]
        if (newValue === this.oldValue) {
            return
        }
        this.cb(newValue)
        console.log("更新视图")
    }
    
}
