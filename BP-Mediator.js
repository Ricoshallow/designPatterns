function Member(name){
    this.name = name
    this.chatroom = null
}

Member.prototype = {
    // 发送消息
    send: function (message,toMember) {
        this.chatroom.send(message,this,toMember)
    },
    // 接收消息
    receive: function (message,fromMember) {
        console.log(`${fromMember.name} to ${this.name}: ${message}`);
    }
}


function Chatroom() {
    this.members = {}
}

Chatroom.prototype = {
    // 增加成员
    addMember: function(member) {
        this.members[member.name] = member
        member.chatroom = this
    },
    // 发送消息
    send: function(message,fromMember,toMember) {
        toMember.receive(message,fromMember)
    }
}


// ------------------------------------------------------------------------
const newChatRoom = new Chatroom()
const alex = new Member('Alex')
const smith = new Member('Smith')
newChatRoom.addMember(alex)
newChatRoom.addMember(smith)

alex.send('hello, i am alex',smith)
alex.receive('nice to me you, alex',smith)

