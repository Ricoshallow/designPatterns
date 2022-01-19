//  策略模式：定义一系列算法把他们一个个封装起来，并且使他们可以相互替换
// 使用策略模式计算奖金，根据员工的基础工资和绩效考核等级发放对应奖金

// // 实现每个绩效表现类
// function PerformanceS(){}
// PerformanceS.prototype.calculate = function(salary){
//     return salary*4
// }
// function PerformanceA(){}
// PerformanceA.prototype.calculate = function(salary){
//     return salary*3
// }
// function PerformanceB(){}
// PerformanceB.prototype.calculate = function(salary){
//     return salary*2
// }
// //实现奖金类
// function Bonus(){
//     this.salary = null
//     this.performance = null
// }
// Bonus.prototype.setSalary = function(salary){
//     this.salary = salary
// }
// Bonus.prototype.setPerformance = function(performance){
//     this.performance = performance
// }
// Bonus.prototype.getBonus = function(){
//     return this.performance.calculate(this.salary)
// }

// //test
// let bonusOfCarol = new Bonus()
// bonusOfCarol.setPerformance(new PerformanceS)
// bonusOfCarol.setSalary(20000)
// console.log(bonusOfCarol.getBonus())
// let bonusOfBob = new Bonus()
// bonusOfBob.setPerformance(new PerformanceB)
// bonusOfBob.setSalary(22000)
// console.log(bonusOfBob.getBonus())

// 策略模式实现缓动动画效果
// Tween动画算法 四个参数分别代表动画已进行的时间，物体原始位置，物体位置的变化量和动画持续的总时间
const tween = {
    linear: function(t,b,c,d){
        return c*t/d + b
    },
    easeIn: function(t,b,c,d){
        return c*(t/=d)*t + b
    },
    strongEaseIn: function(t,b,c,d){
        return c*(t/=d)*t*t*t*t + b
    },
    strongEaseOut: function(t,b,c,d){
        return c*((t = t/d -1)*t*t*t*t + 1) + b
    },
    sineaseInt: function(t,b,c,d){
        return c*(t/=d)*t*t + b
    },
    sineaseOut: function(t,b,c,d){
        return c*((t=t/d-1)*t*t +1) + b
    }
}

// 实现animator类，接收一个dom
let Animator = function(dom){
    this.dom = dom 
    this.startTime = 0
    this.startPos = 0
    this.endPos = 0
    this.easing = null
    this.propertyName = null
    this.duration = 0
}
//start方法负责启动动画，记录位置信息
Animator.prototype.start = function(propertyName,endPos,duration,easing){
    this.startTime = +new Date
    this.startPos = this.dom.getBoundingClientRect()[propertyName]
    this.propertyName = propertyName
    this.endPos = endPos
    this.easing = tween[easing]
    this.duration = duration
    // start setInterval
    let self = this
    let timer = setInterval(function(){
        if (+new Date - self.startTime > self.duration){
            clearInterval(timer)
        }
        self.step()
    },20)
}
Animator.prototype.step = function(){
    let curTime = +new Date
    let curPos = this.easing(curTime-this.startTime, this.startPos, this.endPos-this.startPos,this.duration)
    this.update(curPos)
}
Animator.prototype.update = function(curPos){
    this.dom.style[this.propertyName] = curPos + 'px'
}

let div = document.querySelector('#div')
let animate = new Animator(div)
// animate.start('left',500,1500,'linear')
animate.start('right',500,1500,'linear')
// animate.start('top',500,1500,'strongEaseIn')
