//代理实现图片预加载
let myImg = (function () {
    let imgNode = document.createElement('img')
    document.body.appendChild(imgNode)
    return {
        setSrc: function (src) {
            imgNode.src = src
        }
    }
})()

// myImg.setSrc('./images/231H.jpg')
let proxy = (function () {
    let img = new Image
    img.onload = function () {
        myImg.setSrc(this.src)
    }
    return {
        setSrc: function (src) {
            myImg.setSrc('./images/samsmith_126073086_4081794955170959_3895850117858290185_n.jpg')
            img.src = src
        }
    }
})()
// proxy.setSrc('./images/231H.jpg')

// 代理实现合并HTTP请求
let synchronousFile = function (id) {
    console.log('开始同步文件，id为：' + id);
}

// 等用户全部点完以后两秒再打包发送HTTP请求（相当于防抖）
let proxySynchronousFile1 =( function () {
    let timer
    let cache = []
    return function (id) {
       cache.push(id)
        if (timer) {
            // console.log('clearTimeout');
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(function () {
            synchronousFile(cache.join(','))
            cache=[]
        }, 2000)
    }

})()
// 第一次点击两秒后打包期间所有的HTTP请求（相当于节流）
let proxySynchronousFile2 = (function(){
    let timer
    let cache = []
    return function(id){
        cache.push(id)
        if(timer){
            return 
        }
        timer = setTimeout(function(){
            synchronousFile(cache.join(','))
            timer = null
            cache = []
        },2000)
    }
})()



let checkBox = document.getElementsByTagName('input')
for (let i = 0, c; c = checkBox[i++];) {
    c.onclick = function () {
        if (this.checked == true) {
            
            proxySynchronousFile2(this.id)
        }
    }
}