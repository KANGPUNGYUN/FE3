// 슈퍼 클래스
function Parent() {
    this.name = '재현';
}
Parent.prototype.rename = function (name) {
    this.name = name;
}
Parent.prototype.sayName = function () {
    console.log(this.name);
}

// 서브 클래스
function Child() {
    Parent.call(this);
}
// Object.create 메서드는 Parent.prototype를 참조하고 있는 새로운 객체를 만들어서 Child.prototype에 할당한다
Child.prototype = Object.create(Parent.prototype, 
    // 프로퍼티 서술자 객체(내장 속성 설정)
    {
        constructor: {
            // 프로퍼티 변경이 가능한가?
            configurable: true,
            // 열거 가능한가?
            enumerable: true,
            // 수정가능한가?
            writable: true,
            value: Child
        }
    }); 
Child.prototype.canWalk = function () {
    console.log('now i can walk!!');
}

const child = new Child();