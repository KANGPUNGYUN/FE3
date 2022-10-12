function a(){ 
    console.log(this); 
}

a();

function b(){ 
    console.log("hello wolrd"); 
}

b();
window.b();

let test = {
    one: 1,
    two: 2,
    three: function(){
        console.log(this);
    }
}

test.three;

let test2 = test.three // test를 실행하는 것이 window이기 때문에 window를 호출한다.

// window, object, 
// function과 var은 window에 등록이 되지만, let과 const는 window에서 등록되지 않는다.

// this는 호출한 순간 나 자신을 호출한 녀석입니다.
// * this *//
function sayName(){
  console.log(this.name);
}

var name = 'Hero'; 
// 전역으로 선언한 name 변수의 앞에는 window 가 생략되어 있습니다. 
// 때문에 window.name === "Hero" 가 성립합니다.
let peter = {
  name : 'Peter Parker',
  sayName : sayName
}

let bruce = {
  name : 'Bruce Wayne',
  sayName : sayName
}

sayName(); // this.name = window.name (var는 window에서 호출하기 때문)
peter.sayName(); // this.name = peter.name
bruce.sayName(); // this.name = bruce.name

//================다른 예시=====================//

function a(){
    console.log(this.name);
    function b() {
        console.log(this.name);
    }
    b(); // 빈 값
}
a(); // 빈 값

function a(){
    console.log(this);
    function b() {
        console.log(this);
    }
    b(); // window {} , 함수 안의 함수이지만 실행시키는 주체가 없어 dept가 아무리 깊어져도 window를 호출한다.
}
a(); // window {}

//멤버 참조 연산자(dot 연산자)
one.two.three.four()

