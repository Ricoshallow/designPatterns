

// function Singleton(name){
//     this.name = name
//     this.instance = null
// }
// Singleton.prototype.getName = function(){
//     return this.name
// }
// Singleton.getInstance = function(name){
//     if (!this.instance){
//         this.instance = new Singleton(name)
//     }
//     return this.instance
// }

// let loginA = Singleton.getInstance('A')
// let loginB = Singleton.getInstance('B')
// console.log(loginA === loginB);

// let CreateDiv = (function(){
//     let instance 
//     let CreateDiv = function(html){
//         if (instance){return instance}
//         this.html = html
//         this.init()
//         return instance = this
//     }
//     CreateDiv.prototype.init = function (){
//         let div = document.createElement('div')
//         div.innerHTML = this.html
//         document.body.appendChild(div)
//     }
//     return CreateDiv
// })()
// // console.log(CreateDiv('d'));
// let divA = new CreateDiv('A')
// let divB = new CreateDiv('B')
// console.log(divA === divB)
// console.log(CreateDiv('c'));


// createLoginDiv = (function(){
//     let div
//     return function(){
//         if(!div){
//             div = document.createElement('div')
//             div.style.display = 'none'
//             document.body.appendChild(div)
//         }
//         return div 
//     }  
// })()

// document.getElementById('loginButton').onclick = function(){
//     var loginLayer = createLoginDiv()
//     loginLayer.style.display = 'block'
// }

// 单例模式：保证一个类仅有一个实例，并提供一个访问它的全局访问点
// 将创建对象和管理单例分离
let getSingle = function(fn){
    let result 
    return function(){
        return result || (result = fn.apply(this,arguments))
    }
}
let createLoginDiv = function(){
    let loginDiv = document.createElement('div')
    loginDiv.style.display = 'none'
    document.body.appendChild(loginDiv)
}

document.getElementById('loginButton').onclick = function(){
    let loginDiv = getSingle(createLoginDiv)()
    loginDiv.style.display = 'block'
}