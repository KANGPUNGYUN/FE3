// callback function

function sum(x, y, 콜백함수) {
    콜백함수(x+y);
    // return x + y
}

function documentWriter(s) {
    document.write('콜백함수', s);
}

//sum(10, 20, console.log);
sum(10, 20, documentWriter);
// 콜백함수는 아규먼트로 함수에 전달하는 것

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 구문 : arr.map(callback(currentValue[, index[, array]])[, thisArg])



function 제곱(x){
    return x **2
}    // x => x**2 (화살표함수)

let arr = [10, 20, 30, 40, 50];
arr.map(제곱);

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
// https://caniuse.com/mdn-api_nodelist_foreach // 노드에서의 forEach는 IE에서 작동하지 않습니다.

arr.map(x => x**2); //화살표 함수로 함수로 사용되고 함수이기 때문에 호이스팅이 가능하여 미리 선언한 함수처럼 사용할 수 있다.

function 두배(x){
    console.log(x * 2);
}

let arr2 = [10, 20, 30, 40, 50];
arr2.forEach(두배);

// 문제: 화살표 함수를 사용해서 아래 map과 동일한 기능을 하는 forEach문을 완성해주세요.
let arr3 = [10, 20, 30, 40, 50];
arr3.map(제곱);

let result = [];
arr.forEach(e=>{
    result.push(e ** 2);
})

console.log(result);