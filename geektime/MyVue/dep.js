class Dep {
    constructor() {
        //这里负责收集依赖，收集所有依赖于该属性的地方
        //所有依赖于该属性的位置都会创建一个watcher对象
        //所以dep收集的就是依赖于该属性的watcher对象
        this.subs = []
    }
    
    //添加观察者
    addSub(sub) {
        if (sub && sub.update) {
            this.subs.push(sub)
        }
    }
    
    //通知观察者进行视图更新
    notify() {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}
