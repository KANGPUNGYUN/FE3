// 익명 즉시 실행 함수
(function () {
    let a = 1;
    let b = 2;
    return a + b;
  }());

  // 밖에서 실행하는 변수는 메모리를 그대로 잡아먹는다.
  let 가 = 1;
  let 나 = 2;
  console.log(가+나);
// 하지만 함수에서의 지역변수는 함수가 실행되면 사용한 메모리를 반환한다. 따라서 즉시실행함수를 사용하면 메모리 효율이 좋아진다.
  
  // 기명 즉시 실행 함수
  (function foo() {
    let a = 3;
    let b = 5;
    return a * b;
  }());
  
  foo(); // ReferenceError: foo is not defined
  // 어차피 실행하지 못해서 의미가 없음.
  // 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리

  // 연습문제
let data = [{
    반 : 1, 
    번 : 1, 
    이름 : "호준", 
    중간고사점수 : 55
}, {
    반 : 1, 
    번 : 2, 
    이름 : "길동", 
    중간고사점수 : 60
}, {
    반 : 1, 
    번 : 3, 
    이름 : "영희", 
    중간고사점수 : 30
}, {
    반 : 1, 
    번 : 4, 
    이름 : "철수", 
    중간고사점수 : 20
}, {
    반 : 1, 
    번 : 5, 
    이름 : "규리", 
    중간고사점수 : 100
}]

// 중간고사 점수의 평균을 구하는 코드를 함수로 작성해주세요.

function average(data) {
    let sum = 0;
    for(student of data){
        sum += student["중간고사점수"];
    }
    return sum/data.length;
}

function 평균값구하기(data) {
    중간고사점수 = data.map((x) => x.중간고사점수)
    중간고사점수합 = 중간고사점수.reduce((a, b) => a + b)
    return 중간고사점수합 / data.length
}

function 평균값구하기(data) {
    return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
}

console.log(function () {
    return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
}());

let a = (data) => data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
console.log(a(data));

let b = (data) => { return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length }
console.log(b(data));

// call by value, referlence, sharing
// call by value: 값의 전달
// call by referlence: 참조-주소값의 전달

// array와 같은 convension 자료형을 넘길때에는 함수 안에서 값의 수정이 됩니다. 즉, 원시값은 파라미터에 복사한 값을 저장하고 참조타입은 파라미터에 참조 주소를 복사하여 저장합니다.
// call by reference: 주소값(배열)은 참조타입이라서 변경된다. javascript는 참조값을 넘길 때 참조한 주소값을 '복사'하여 넘깁니다.
// let test = [10, 20, 30];

// function 함수(a) {
//     a[0] = 1000;
// }

// 함수(test);

// call by value: 넘버값은 원시타입이라서 변경이 안된다
// javascript는 참조값을 넘길 때 참조한 주소값을 '복사'하여 넘깁니다. 그래서 call by reference가 아니라 call by value입니다. '복사한 값'인거죠. 주소값도 값이니까요.

// let test = 100;
// function 함수(a){
//     a = 1000;
// }

// 함수(test);

// 면접질문: JS에서의 call by value, referlence을 설명하세요.
// JS는 call by value만 있습니다. JS는 이러한 독특한 점을 설명하기 위해 JS에서는 call by sharing라는 비공식적인 개념을 가지고 있습니다.

// call by reference 반례
var z = {};
function test(y) {
    y = 1000;
}

test(z);
z;

// 클로져: 폐쇠된 공간 안에 데이터에 접근하기 위한 테크닉입니다.
// 사용목적: 변수 은닉과 메모리 효율, 코드 효율(또는 완전성)을 극대화하기 위해 사용합니다.

function 제곱(x) {
    function 승수(y) {
        return y ** x
    }
return 승수 //승수()가 아니라 그냥 승수를 리턴한다.
}

var 제곱2 = 제곱(2); //x에 2의 값이 들어간다. 하지만 y의 값을 주진 않았다.
// 제곱(2)는 승수() 함수 그 자체가 된다. 따라서 '제곱2'라는 함수에 매개변수를 넣었을때 제곱()함수 안의 승수()라는 함수의 라파미터 즉, y로 전달된다.

제곱2; 
// 승수(y) {
//     return y ** x
// }
제곱2(10);
// 100
제곱2(3);
// 9

function makeAdder(x) {
    var y = 1;
    return function(z) {
        y = 100;
        return x + y + z;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2));  // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
//지역스코프에서 값을 찾고, 없으면 그 밖에 있는 스코프에서 찾고, 계속해서 찾아 올라가 전역 스코프까지 찾아보는 것을 스코프체이닝
//어려운 얘기로는 내부 렉시컬 환경에서 찾고 없으면 전역 렉시컬 환경에서 찾는다 얘기함.
//함수가 수행된 이후에도 상위함수의 렉시컬 환경에 접근 가능