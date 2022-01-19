var makeSound = function(animal){
    console.log(animal.sound());
}

var Duck = function(){
}
var Dog = function(){
}
Duck.prototype.sound = function(){
    return 'ggg'
}
Dog.prototype.sound = function(){
    return 'www'
}

makeSound(new Dog())
makeSound(new Duck())