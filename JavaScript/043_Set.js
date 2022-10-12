// 집합, 합집합, 교집합, 차집합

let s = new Set('abcdeeeeeee');

console.log(s);
console.log(s.size);

// 문제
회사게시판 = ['이호준','이호준','이호준','김은하','김은하','이준근'];

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요?
new Set(회사게시판).size;

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of new Set(회사게시판)){
    console.log(i, 회사게시판.filter(e => e === i).length);
}

//다른 답압
let map = new Map();
for (const i of 회사게시판) {
  map.set(i, (map.get(i) || 0) + 1);
}

//Map은 키값이 중복되지 않음을 활용하여 푼 답안이다.

// Set을 순회하기
for (let variable of s){
    console.log(variable);
}

// 값이 배열인 경우
let ss = new Set('abcdeeeeeee'.split(''));
console.log(ss);

let a = new Set('abc');
let b = new Set('cde');
// 교집합
let cro = [...a].filter(value => b.has(value))
// 합집합
let union = new Set([...a].concat(...b))
// 차집합
let dif = new Set([...a].filter(x => !b.has(x)));