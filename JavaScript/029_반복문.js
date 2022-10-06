for (let i = 0; i < 10; i++) {
    console.log(i);
}
// 밖에서 i를 호출할 수 없는 이유는 블록레벨스코프이기 때문에 밖에서 호출할 수 없다.
if (true){
    var a = '1';
    let b = '2';    //if 밖에서 쓸 수 없습니다.
    const c = '3';  //if 밖에서 쓸 수 없습니다.
}



// airbnb에 컨벤션에 권장
// IE 전부 사용 가능
for(const i in ['one', 'two', 'three']) {
    console.log(i);
}


// airbnb에 컨벤션에 권장
// IE 전부 사용 불가
for(const i of ['one', 'two', 'three']) {
    console.log(i);
}

///

for (let i = 0; i < 10; i++){
    console.log(i);
    if(i>3){
        break
    }
}

///

let data1 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < data1.length; i++){
    console.log(data1[i]);
}

let data2 = [1,3,4,8,13,17,20];
for (let i = 0; i < data1.length; i++){
    console.log(data2[i+1] - data2[i]);
}

let data3 = [1,3,4,8,13,17,20];
for (let i = 0; i < data1.length; i++){
    console.log(data3[i+1] - data3[i]);
}

let data4 = [1,3,4,8,13,17,20];
for (let i = 1; i < data1.length; i++){
    console.log(data4[i] - data4[i-1]);
}

let i = 0;
for(;;) {
    i++;
    console.log(i);
    if(i>5){
        break
    }
}


for(let i = 0;;) {
    i++;
    console.log(i);
    if(i>5){
        break
    }
}

for(let i = 0;; i++) {
    console.log(i);
    if(i>5){
        break
    }
}

// 다음 수학점수의 평균을 구하세요.
let 수학점수 = [10, 99, 88, 85, 21, 35];
let sum = 0;

for (let i in 수학점수){  //for (let i = 0; i < 수학점수.length; i++){
    sum +=  수학점수[i]
}
console.log(sum/수학점수.length);

let s = 0;
foreach()


let user = [
    {
      "_id": "633e5b1711926cc42d1fbb4b",
      "index": 0,
      "guid": "e6ef4abc-a6fc-4ed5-a9b0-8060240c48ab",
      "age": 28,
      "name": "Mai Montoya",
      "gender": "female"
    },
    {
      "_id": "633e5b1718d6c001d2f771c7",
      "index": 1,
      "guid": "9b07b16c-7a4a-4152-83cf-fb64625f52fe",
      "age": 22,
      "name": "Shelley Potts",
      "gender": "female"
    },
    {
      "_id": "633e5b17fecc26a897aa2283",
      "index": 2,
      "guid": "cfb29cc6-8381-4695-8c2f-0c273a9d33c2",
      "age": 22,
      "name": "Hensley Flores",
      "gender": "male"
    },
    {
      "_id": "633e5b17267fe16c24f00591",
      "index": 3,
      "guid": "6e189d90-0981-4086-9ee2-12242fda76d1",
      "age": 20,
      "name": "Holmes Morrow",
      "gender": "male"
    },
    {
      "_id": "633e5b17b30766b9c38594f5",
      "index": 4,
      "guid": "f1505113-9383-4249-bbb3-0e5f8ea634b2",
      "age": 25,
      "name": "Elisa Miller",
      "gender": "female"
    }
];

for (let i =0; i < user.length; i++){
    console.log(user[i]);
}

// let 여성 = 0;
// for (let i =0; i < user.length; i++){
//     if (user[i]['gender'] === 'female'){
//         여성 += 1;
//     } else if (user[i]['gender'] ==='mail'){
//         남성 += 1;
//     }
// }
// console.log(여성);

user.filter(i => i.gender === 'female').length;

// 암기를 부탁드립니다. (재귀함수 할 때 비교할 for문)
//1. 구구단 
for (let  단 = 2; 단 < 10; 단++){
    for (let 곱 = 1; 곱 < 10; 곱++){
        console.log(`${단} X ${곱} = ${단 * 곱}`);
    }
}

// 2. 문자열 뒤집기
// 2-1)
let txt = 'hello world';
let result = '';
for (let i = txt.length - 1; i>= 0; i--){
    result += txt[i];
}
// 2-2)
result = '';
for (let i = 0; i < txt.length; i++){
    result = txt[i] + result;
}

// 3. 시그마
let ss = 0;
for (let i = 1; i < 101; i++){
    ss+=i;
}

// 4. 팩토리얼
let ss2 = 1;
for (let i = 1; i < 6; i++){
    ss2 *=i;
}

// 문제1 : 다음 입역된 숫자들의 합을 구하여라
// input = '12345'
// result : 15

let x10 = '12345';
let result10 = 0;
for (let i =0; i < x10.length; i++) {
    result10 += parseInt(x10[i]);
}