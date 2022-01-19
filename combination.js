// 组合模式：用小的子对象构建更大的对象，这些子对象本身可能由更小的孙对象构成
let closeDoor = {
    excute: function(){
        console.log('close the door');
    }
}
let openPcCommand = {
    excute: function(){
        console.log('open my pc');
    }
}
let openWechat = {
    excute: function(){
        console.log('open the wechat');
    }
}

let macroCommand = function(){
    return {
        commandList: [],
        addCommand: function(command){
            this.commandList.push(command)
        },
        excuteCommand: function(){
            this.commandList.forEach((item)=>{
                item.excute()
            })
        }
    }
}

let myMacroCommand = macroCommand()
myMacroCommand.addCommand(closeDoor)
myMacroCommand.addCommand(openPcCommand)
myMacroCommand.addCommand(openWechat)
myMacroCommand.excuteCommand()