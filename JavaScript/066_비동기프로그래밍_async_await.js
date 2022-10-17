// 모던 자바스크립트 예제
async function f() {
    return 100;
}

f().then(alert); // 100

async function f() {
    return 'hello world';
}

f().then(메시지 =>{
    alert(메시지);
    return 메시지.split(" ")[0]
})
   .then(메시지 =>{
    alert(메시지);
    return 메시지[0]
});

//////////////////

async function f() {
    return 'hello world';
}
console.log('!');
f().then(메시지 =>{
    alert(메시지);
    return 메시지.split(" ")[0]
})
   .then(메시지 =>{
    alert(메시지);
    return 메시지[0]
});
console.log('!!');
// 실행순서
// !
// !!
// hello world
// hello

////////////////////

// 기다린 것
async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000)
    });

    let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)
    alert(result); // "완료!"
}

f();

/////////////////

// 기다리지 않은 것
async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000)
    });

    let result = promise;// 위의 프로미스 함수보다 먼저 실행됨 따라서 [object Promise] 객체를 반환함
    console.log(result);
    alert(result);
}

f();

/////////////////

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 10000)
    });

    let result = promise;
    console.log(result);
    alert(result); //Promise {<pending>}
    return 'hello'
}

f(); // Promise {<fulfilled>: 'hello'}



////////////////

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            alert("완료")
            resolve("완료!")
        }, 1000)
    });

    let result = promise;
    console.log(result);
    return 'hello'
}

f(); // Promise {<fulfilled>: 'hello'}

// fetch와 await 동시 사용이 가능합니다.
// 최근에 top level await라는 기능이 추가되어서 함수 밖에서도 사용이 가능합니다. 단순히 async이 promise의 문법적 설탕이라고 할 수 없습니다.(새로운 기능이 추가되었기 때문에)
// const productData = await fetch('http://test.api.weniv.co.kr/mall').then((data) => data.json())