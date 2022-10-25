function Parent() {
    this.name = '재현';
}
Parent.prototype.rename = function (name) {
    this.name = name;
}
Parent.prototype.sayName = function () {
    console.log(this.name);
}

function Child() {
    Parent.call(this);
}

Child.prototype = Object.create(Parent.prototype); // Object.create 함수는 주어진 인자를 Child.prototype에 연결하는 역할을 합니다. 즉 Parent 객체의 프로토타입을 Child 객체의 프로토타입이 참조하게 합니다.
Child.prototype.canWalk = function () {
    console.log('now i can walk!!');
}

child.rename("풍윤");
child.sayName(); // 풍윤  Object.create(Parent.prototype)로 Parent 객체의 프로토타입을 Child 객체의 프로토타입이 참조하여 Child는 Parent라는 함수를 상속받아 사용할 수 있다.

// tip Object의 __proto__는 null이다.(object는 최상위개념이다)