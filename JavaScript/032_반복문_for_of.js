// let data = {
//     'one': '하나',
//     'two': '둘',
//     'three': '셋',
//     'four': '넷'
// };

//키 값 호출
for (const i in data) {
    console.log(i);
}

//키 값과 벨류 값 호출
for (const i in data) {
    console.log(i);
    console.log(data[i]);
}

let data2 = [10, 20, 30, 40];

for (const i in data2){
    console.log(i);
}
// result
// 0
// 1
// 2
// 3

// 이렇게 호출하는 이유는 data2는 배열이지만 사실 키와 벨류 형태로 이루어져 있기 때문이다.
// console.log(data2);를 통해 data2가 어떤 형식으로 구성되는지를 확인해보자

// 일반적인 객체 리터럴은 반복 가능한(iterable) 객체로 인식되지 않는다. 반복 가능한 객체가 아니라면 for of 문을 쓸 수 없다. 그 경우, 객체 리터럴에 쓸 수 있는 방법은 for .. in  문이다. for in 문은 기본적으로 키 값만 출력하는 반복문이다.

let data3 = {
    0:10,
    1:20,
    2:30,
    3:40,
}
for (const i in data3) {
    console.log(i);
}

for (const i in 'hello world') {
    console.log(i);
}

for (const i of data2) {
    console.log(i);
}

for (const i of 'hello world') {
    console.log(i);
}

let s = 0;
for (const i of '12345') {
    s += parseInt(i);
}

const seat = [['피카츄' , '라이츄', '파이리' ],
              ['꼬부기' , '버터플', '야도란' ],
              ['피죤투' , '또가스', '메타몽' ]];

//for 문 사용
for (let i = 0; i < seat.length; i++) {
    const row = seat[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

//for of 문 사용
for (let row of seat) {
    for (let pocketmon of row) {
        console.log(pocketmon);
    }
}

////// 질의응답

for (const i in data) {
    console.log(data[i]);
}

let data = {
    'one':'하나',
    'two':'둘',
    'three':'셋',
    'four':'넷',
}
for (const i in data) {
    console.log(i)
    console.log(data)
    console.log(data.i); // error
}