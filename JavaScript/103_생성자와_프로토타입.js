function NewFactory(name){
    this.name = name;
    this.sayYourName = function(){
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}

let robot1 = new NewFactory('게리');
let robot2 = new NewFactory('뮤라');
let robot3 = new NewFactory('알리');

robot1.sayYourName === robot2.sayYourName // false 참조하는 메모리 주소가 다르다.
// 위에 결과는 우리가 100개의 객체(인스턴스)를 생성할때마다 역시 100개의 함수를 새로 만들고 있는것 입니다. 이러한 자원의 낭비를 해결하기 위해 등장한 것이 바로 프로토타입.

// prototype은 특정 객체에 대한 참조입니다. 즉 어떠한 공간을 가르키고 있습니다.

// robot1의 결과

// NewFactory {name: '게리', sayYourName: ƒ}
// name
// : 
// "게리"
// sayYourName
// : 
// ƒ ()
// [[Prototype]]
// : 
// Object

// 안에 [[Prototype]]이라는 프로퍼티가 존재한다.


//[[Prototype]]이라는 프로퍼티 접근방식

//robot1.[[Prototype]] // Uncaught SyntaxError: Unexpected token '[' 이렇게 접근하는 것이 아니라
robot1.__Proto__ // 이런 식으로 접근할 수 있다.


function Test(){};
const obj = new Test();
obj.__proto__ === Test.prototype //true
// prototype은 오직 function안에 존재하는 참조값입니다. __proto__  는 객체(인스턴스) 안에 존재하는 숨겨진 프로퍼티입니다. 인스턴스는 __proto__를 통해 생성자 함수의 prototype에 접근하여 필요한 여러가지 값과 메서드를 사용할 수 있습니다.


function NewFactory2(name){
    this.name = name;
}

NewFactory2.prototype.sayYourName = function(){
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
}

// 프로토타입이란 프로퍼티를 통해 같은 생성자로 만들어진 인스턴스들이 공유할 수 있는 공간을 만들 수 있습니다. 프로토타입은 모든 인스턴스가 하나의 메서드를 공유하도록 만들어 자원을 더 효율적으로 사용하도록 도와줍니다


// 실습 1: 우리가 만들었던 음식 로봇객체의 메서드를 프로토타입으로 분리해보세요, 그리고 객체의 메서드가 서로 동일한 주소를 참조하는지 확인해보세요.

function FoodPicker(foodNames) {
    this.menu = foodNames;
    // this.sayMenu = function () {
    //     console.log(this.menu[Math.floor(Math.random() * this.menu.length)]);
    // }
}

FoodPicker.prototype.sayMenu = function () {
    console.log(this.menu[Math.floor(Math.random() * this.menu.length)]);
}

let menuBot1 = new FoodPicker(['짜장면', '청국장', '김치찌게']);
let menuBot2 = new FoodPicker(['라면', '치킨', '피자']);

// 실습2: 우리가 객체지향 개념에서 만들었던 ‘나’ 와 ‘대상’ 객체를 생성자를 통해서 만들어 볼 수 있도록 코드를 수정해봅시다.

// const me = {
//     name : 'pung',
//     team : 16,
//     running: function(weight){
//         weight.down();
//     },
//     eating : function(weight){
//         weight.up();
//     }
// }

// const weight = {
//     kg: 76,
//     up : function(){
//         this.kg++;
//     },
//     down : function(){
//         this.kg--;
//     }
// }

// me.running(weight);

function Me(name, team){
    this.name = name;
    this.team = team;
}

Me.prototype.running = function (weight) {
    weight.down();
}
Me.prototype.eating = function (weight) {
    weight.up();
}

function Weight(kg) {
    this.kg = kg;
}

Weight.prototype.up = function() {
    this.kg++;
}

Weight.prototype.down = function() {
    this.kg--;
}