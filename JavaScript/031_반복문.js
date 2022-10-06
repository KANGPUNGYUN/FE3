// while(조건문) {
//     실행문;
// }

// let i = 0;
// while (i < 10){
//     console.log(i);
//     i++;
// }

//구구단은 암기해주세요.
let i = 2;
let j = 1;

while(i < 10) {
    while(j < 10) {
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    j = 1;
    i++;
}

//4단까지 출력하는 방법(break: 해당 블록 반복문 탈출)

while(i < 10) {
    while(j < 10) {
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    j = 1;
    if (i >= 4){
        break
    }
    i++;
}

//무한 반복문
// let i = 2;
// let j = 1;

// while(i < 10) {
//     while(j < 10) {
//         console.log(`${i} X ${j} = ${i * j}`);
//         j++;
//     }
//     j = 1;
//     if (i == 4){
//         continue
//     }
//     i++;
// }


//4단빼고 출력하는 방법(continue: continue문은 반복문의 다음 반복으로 이동한다.)
// let i = 2;
// let j = 1;

// while(i < 9) {
//     i++;
//     if (i == 4){
//         continue
//     }
//     while(j < 10){
//         console.log(`${i} X ${j} = ${i * j}`);
//         j++;
//     }
//     j = 1;
// }

for (let i = 0; i < 10; i++) {
    if (i === 4 || i === 5) {
        continue;
    }
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i === 4 || i === 5) {
        break;
    }
    console.log(i);
}

////

timestable:
for (let x = 2; x < 10; x++) {
    for (let y = 1; y < 10; y++) {
        if (x === 4) break timestable;
        console.log(`${x} X ${y} = ${x * y}`);
    }
}

for (let x = 2; x < 10; x++) {
    for (let y = 1; y < 10; y++) {
        if (x === 4) break;
        console.log(`${x} X ${y} = ${x * y}`);
    }
}

// - 레이블은 반드시 `break`문 또는 `continue`문 위에 있어야 한다.
// - `break`문은 모든 레이블에서 사용할 수 있다.
// - `continue`문은 반복문에서만 사용 가능하다.