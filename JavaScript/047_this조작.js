// call(): 인수에 this 로 사용할 값을 전달할 수 있습니다.
var peter = {
name : 'Peter Parker',
sayName : function(){    
        console.log(this.name);
    }
}

var bruce = {
name : 'Bruce Wayne',
}
peter.sayName.call(bruce); //Bruce Wayne //sayName를 호출하는 것이 call을 통해 bruce로 바뀌기 때문이다.

  // call()은 재사용성을 위해 사용되는 메서드입니다. 하지만 가독성이 나빠질 수 있으니 주의할 필요가 있습니다.

  // call()은 아규먼트를 전달해줄 수 있습니다.
var peter = {
name : 'Peter Parker',
sayName : function(감탄사){    
        console.log(this.name + 감탄사);
    }
}

var bruce = {
name : 'Bruce Wayne',
}
peter.sayName.call(bruce, '!');


// apply(): 인수에 this 로 사용할 값을 전달할 수 있으며, 배열의 형태로도 전달. 아규먼트가 배열로 바뀐 call과 동일
var peter = {
name : 'Peter Parker',
sayName : function(is, is2){    
        console.log(this.name+ ' is '+ is + ' or ' + is2);
    }
}

var bruce = {
name : 'Bruce Wayne',
}

peter.sayName.apply(bruce, ['batman', 'richman']); // sayName를 호출하는 것이 apply을 통해 bruce로 바뀌기 때문이다.

// bind(): this가 고정된 새로운 함수를 반환합니다.
function sayName(){
console.log(this.name);
}

var bruce = {
name: 'bruce',
sayName : sayName
}

var peter = {
name : 'peter',
sayName : sayName.bind(bruce) // sayName를 호출하는 것이 bind를 통해 bruce로 바뀌기 때문이다.
}

peter.sayName();
bruce.sayName();