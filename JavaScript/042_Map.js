//오브젝트의 단점을 보안하기 위해서 map을 사용한다.

let m = new Map();

m.set('하나', 1) // 메서드 체이닝
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)
    .set(true, '트루')
    .set([1, 2], '리얼리?'); //이렇게는 호출되지 않습니다.

console.log(m)

console.log(m.get('하나'))
console.log(m.get(true)) // object에서 가능하지 않습니다.
console.log(m.get([1, 2])) // 이렇게는 호출되지 않습니다.

//각 객체가 다른 주소값을 가진다(어느 언어든)
// Python Vs JavaScript 
// 1. Python
// python에서 아래 값은 다르게 나옵니다.
// x = [1, 2]
// id(x)

// y = [1, 2]
// id(y)

// x == y // python에서는 true
// x is y // python에서는 false

// 2. JavaScript
// [1, 2] === [1, 2] //false
// [1, 2] == [1, 2] // false
// let x = [1, 2]
// let y = [1, 2]
// x == y // false
// x === y // false

// 밖에 있는 객체를 그대로 사용하면 같은 주소값을 가지게 되어 표현이 가능하기도 하다.

let map = new Map();
let test = [1,2];

map.set('하나', 1)// 메서드 체이닝
.set(true, '트루')
.set(test, '리얼리?');// 이렇게는 호출됩니다.

console.log(map.get(test));

// Map에 해당 Key값이 있는지 확인하기
m.has('하나');

// Map에 값을 제거하기
m.delete('하나');
m.has('하나');

// 크기구하기
m.size

// Map 사용가능한 형태 알아보기

let data1 = new Map([['one', 1], ['two',2]]) // O
let data2 = new Map(Object.entries({'one':1, 'two':2})) // O
let data3 = new Map({'one':1, 'two':2}) // X
// let data4 = new Map('hello world') // X
// let data5 = new Map([10, 20, 30, 40]) // X

// 직접 순회가 가능한 Map!(제일 중요한 개념)
let data6 = {'one':1, 'two':2};
for (const i of data6) { // 작동되지 않습니다.
    console.log(i)
}

let data7 = {'one':1, 'two':2};
for (const i of Object.entries(data7)) { 
    console.log(i);
}

let map1 = new Map();

map1.set('하나', 1) // 메서드 체이닝
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4);

for (const i of map1) {
    console.log(i);
}

for (const [i, j] of map1) { // 구조분해할당
    console.log(i, j);
}

map1.keys();
map1.values();
map1.entries();

// Map - Object 간의 형변환(IE 호환이슈 외엔 잘 사용하지 않음, Map을 사용하길 권장하지만 IE에서 사용이 필요한 경우 Object를 사용)
let 맵 = new Map(Object.entries({'one':1, 'two':2}));
let 오브젝트 = Object.fromEntries(맵);

// Map은 바벨을 사용하면 IE에서도 사용가능합니다.
// 바벨 https://ko.javascript.info/polyfills