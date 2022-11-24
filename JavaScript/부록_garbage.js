let me = { age:30 }; 
let you = me; //참조 카운트 : 2 // me랑 you가 객체를 가르키고 있음

me = null; // 참조카운트 : 1
you = null; // 참조카운트 : 0 // 객체가 더이상 참조하지 않는다면 가비지 컬렉터의 대상이 됩니다.

let x = {
    y:{
        z: 1
    }
}

// x가 참조하는 객체를 object1, y가 참조하고 있는 객체를 object2라고 하겠습니다.

let a = x; // object1의 참조 카운트는 2 ( x, a )
x = 1; // object1의 참조 카운트는 1 ( a )

let b = a.y; // object2 의 참조 카운트는 2 ( a.y, b )
a = 2; // object1의 참조 카운트는 0
// object1의 참조 카운트는 0이지만 그 안의 object2가 참조하는 것이 남아있기 때문에 가비지 컬렉터의 대상이 아닙니다.
// 이렇게 불필요하게 남아있는 object1 객체가 존재하는 경우 메모리 누수(memory leak)가 발생했다고 표현합니다.

// 자바스크립트 메모리 관리 https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management#mark-and-sweep_algorithm

function outer() {
    let privateVal = ['test'];

    function getPrivate() {
        return privateVal
    }

    return getPrivate
}

const getPrivateData = outer();
const secretVal = getPrivateData();

console.log(secretVal);

// 클로저의 경우 외부로 연결된 대상을 null이나 undefined 해제해주어야지 메모리 누수가 발생하지 않습니다.
secretVal = null;
secretVal = undefined;