// 被观察者
function Subject (){
    this.observers = []
}

Subject.prototype = {
    //订阅
    subscribe: function (observer) {
        this.observers.push(observer)
    },
    // 取消订阅
    unsubscribe: function(observerTORemove) {
        this.observers = this.observers.filter((item)=>{
            return item !== observerTORemove
        })
    },
    // 事件触发
    fire: function() {
        this.observers.forEach(item => {
            item.call()
        })
    }

}

// --------------------------------------------------

const subject = new Subject()

function observer1(){
    console.log('observer1 firing');
}
function observer2(){
    console.log('observer2 firing');
}
// 订阅
subject.subscribe(observer1)
subject.subscribe(observer2)
subject.fire()
// 取消订阅
subject.unsubscribe(observer1)
subject.fire()