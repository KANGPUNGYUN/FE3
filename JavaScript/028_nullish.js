//모던 자바스크립트 nullish 병합 연산자 : https://ko.javascript.info/nullish-coalescing-operator

let firstName = null;
let lastName = null;
let nickName = "바이올렛";

// null이나 undefined가 아닌 첫 번째 피연산자 출력
alert(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛

// let a = 10;
// let b = 20;
// let c = 30;

// let a = null;
// let b = 20;
// let c = null;

// let a;
// let b;
// let c;
// d //undefined

// let d = a ?? b ?? c;

//카카오톡
let 실명;
let 별명 = licat;
let 기본값 = '프로도';

let 채팅창아이디 = 실명 ?? 별명 ?? 기본값;

// ??와 || 차이점
let height = 0;

console.log(height || 100); // 100   or 연산자에서는 0을 false로 판단하여 다음 값을 출력
console.log(height ?? 100); // 0     nullish에서는 0은 값이 있다고 판단하여 0을 출력

// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined