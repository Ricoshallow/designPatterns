/**
 * 结构型模式--外观模式
 */

/**
 * 应用：封装一个统一的DOM元素事件绑定/取消方法，用于兼容不同版本的浏览器和更方便的调用
 * author: rico
 * refrence: https://segmentfault.com/a/1190000022396503?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly
 */

// 绑定事件
function addEvent(target,event,handler) {
    if (target.addEventListener) {
        target.addEventListener(event,handler)
    } else if (target.attachEvent) {
        target.attachEvent('on' + event, handler)
    } else {
        target['on'+event] = handler
    }
}

//取消绑定事件
function removeEvent(target,event,handler) {
    if (target.removeEventListener) {
        target.removeEventListener(event,handler)
    } else if (target.detachEvent) {
        target.detachEvent('on' + event, handler)
    } else {
        target['on'+event] = null
    }    
}

// -----------------------------------------------
/**
 * 事件监听的三种方法：

1、直接在html上添加事件（不建议）

强耦合，不利用代码复用

2、DOM 0级

一个元素只能绑定一个事件的限制

如果绑定了多个事件，后面的会覆盖掉前面的

2、DOM 2级

一个事件可以绑定多个监听函数

还可以定义事件捕获和事件冒泡
 */