let value =[10, 1, 100, 200, 300, 10];
let value2 = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
};

Object.keys(value);
Object.keys(value2);

for (i of value2){ // of로 순회를 돌아야 key와 value를 한꺼번에 출력하고 싶은 것입니다. -> error
    console.log(i)
}

Object.entries(value);
Object.entries(value2);

for (i of Object.entries(value2)){ 
    console.log(i);
}

// i와 j처럼 구조문 할당을 할 수 있다.
for ([i, j] of Object.entries(value2)){ 
    console.log(`key는 ${i}고 value는 ${j}입니다.`);
}
// key는 one고 value는 1입니다.
// key는 two고 value는 2입니다.
// key는 three고 value는 3입니다.
// key는 four고 value는 4입니다.

// 구조문 할당을 하지 않으면 아래처럼 표현해야 한다.
for (i of Object.entries(value2)){ 
    console.log(`key는 ${i[0]}고 value는 ${i[1]}입니다.`);
}
// key는 one고 value는 1입니다.
// key는 two고 value는 2입니다.
// key는 three고 value는 3입니다.
// key는 four고 value는 4입니다.

for ([i, j] of [[10, 20], [30, 40]]){ 
    console.log(i, j)
}

for ([i, j] of [[10, 20, 300], [30, 40, 500]]){ 
    console.log(i, j) // 300과 500을 받지 못했습니다.
}

for ([i, j, ...k] of [[10, 20, 300, 1, 2], [30, 40, 500, 1]]){ // 몇 개 들어올지 모르는 경우
    console.log(i, j, k) 
}

for ([[i, j], k] of [[[10, 20], 300], [[30, 40], 500]]){
    console.log(i, j, k) 
}

// [10, 20]과 [30, 40]이 i, 300과 500이 j가 되는 형태
for ([i, j] of [[[10, 20], 300], [[30, 40], 500]]){
    console.log(i, j) 
}

// 일반 변수 선언의 구조분해할당

// let a, b, c;
// [a, b] = [10, 20];

let one, two, three;
[one, two, three] = '010-1234-5678'.split('-');

let one1, two1, three1, four1;
[one1, two1, three1, four1] = '010-1234-5678-9012'.split('-');
[one1, two1, three1, ...four1] = '010-1234-5678-9012-01-02-03'.split('-');

// 구조분해할당문제입니다.
data = [10, 20, 30, 40, 50];

// 문제 1
// a, b, c로 각각을 분해할 것입니다.
// a에는 10, b에는 20, c에는 30, 40, 50을 할당해보세요.
[a, b, ...c] = data;

// Object 구조분해할당 객체와 같은 경우 순서가 바뀌어도 상관없음
let data = {
    name : 'pungyun',
    money : 100,
    age : 10,
    company: 'weniv'
};

let {name, age, ...rest} = data;
//name 'pungyun'
//age 10
//rest {money: 100, company: 'weniv'}

//RORO 기법 등의 디자인 패턴에서도 구조분해할당을 많이 사용합니다.

let a2 = [10, 20, 30];
a2.push(100);
a2.unshift(1000);

let a3 = [10, 20, 30];
a3 = [1000, ...a3, 100];

let a4 = [1, 2, 3];
let b4 = [10, 20, 30];
let c4 = [...a4, ...b4]; // 이렇게 합쳐진 값을 다시 구조분해할당 [1, 2, 3, 10, 20, 30]

let str1 = 'hello world';
console.log([str1]); //['hello world']

let str2 = 'hello world';
console.log([...str2]); //['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

'!'.repeat(10); //'!!!!!!!!!!'
[...'!'.repeat(10)]; //['!', '!', '!', '!', '!', '!', '!', '!', '!', '!']