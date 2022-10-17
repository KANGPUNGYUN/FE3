/*
new Promise((resolve, reject) => {
        //code
    })
    .then(result => result)
    .then(result => result)
    .catch(err => err)
    .finally(result => result)
*/

// - pending(대기상태) - resolve(해결) - fulfilled(성공)
// - pending(대기상태) - reject(거부) - rejected(실패)

// resolve
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    resolve('hello world') // 성공

}).then(메시지 => {
    alert(메시지);
    return 메시지.split(' ')[0];
}).then(메시지 => {
    alert(메시지);
    return 메시지[0];
}).then(메시지 => {
    alert(메시지);
    return 메시지;
}).catch(메시지 =>{
    alert('catch 실행!!');
})

console.log(p);

// reject
let p2 = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    reject('hello world');

}).then(메시지 => {
    alert(메시지);
    return 메시지.split(' ')[0];
}).then(메시지 => {
    alert(메시지);
    return 메시지[0];
}).then(메시지 => {
    alert(메시지);
    return 메시지;
}).catch(메시지 =>{
    alert('catch 실행!!');
})

console.log(p2);
// Promise {<rejected>: 'hello world'}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "rejected"
// [[PromiseResult]]
// : 
// "hello world"

// rejected(실패)된 Promise를 catch로 받으면 fulfilled 반환
let p22 = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    reject('hello world')
}).catch(메시지 => {
    alert('catch 실행!!')
})
console.log(p22)
// Promise {<fulfilled>: undefined}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// undefined

// resolve인데 중간에 에러 발생. 중간에 에러를 만들면 다음 then을 실행하지 않고 catch가 잡아낸다.

let p3 = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    resolve('hello world');

}).then(메시지 => {
    alert(메시지);
    return 메시지.split(' ')[0];
}).then(메시지 => {
    alert(메시지);
    throw Error('Error 발생! 경고경고!');
    return 메시지[0];
}).then(메시지 => {
    alert(메시지);
    return 메시지;
}).catch(메시지 =>{
    alert('catch 실행!!');
})

console.log(p3);

// 예제를 위한 예제, 이런식으로 처리하지 않습니다.
let p4 = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    resolve('hello world')
}).then(메시지 => {
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지)
    throw Error('Error 발생! 경고경고!')
    return 메시지[0]
}).then(메시지 => {
    alert(메시지)
    return 메시지
}).catch(메시지 => {
    console.log(메시지)
    alert('catch 실행!!')
}).then(메시지=>{
    alert('catch 이후에 then')
    throw Error('Error 발생! 경고경고!')
}).catch(메시지 => {
    console.log(메시지)
    alert('catch 이후에 then 이후에 catch 실행!!')
})

console.log(p4)

// 일부러 시간을 좀 걸리게 작업을 해보도록 하겠습니다.
let p5 = new Promise(function(resolve, reject){
    setTimeout(()=>resolve('끝났다!'), 5000);
})

console.log(p5);

// p5를 실행 후 5초 안에 console.log(p5);를 하면 아래의 결과가 나타나고,
// Promise {<pending>}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// "끝났다!"

// p5를 실행 후 5초 후에 console.log(p5);를 하면 아래의 결과가 나타난다.
// Promise {<fulfilled>: '끝났다!'}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// "끝났다!"

// 우리가 뒤에서 배울 async나 fetch도 Promise를!?
let test = async function(){
    return 'hello world'
}

test
test() // Promise {<fulfilled>: 'hello world'}

let data = fetch('http://test.api.weniv.co.kr/mall')
data


fetch('http://test.api.weniv.co.kr/mall')
    .then(메시지 => {
        console.log(메시지)
        return 메시지.json()
    })
    .then(메시지 => {
        console.log(메시지)
    })
    .catch(메시지 =>{
        // alert(메시지)
        alert('홈페이지가 정상적으로 작동하지 않고 있습니다. 조치중이오니 잠시만 기다려주시기 바랍니다.')
        console.log(메시지)
    })


// 프로미스 체이닝의 다른 형태
let pm = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 10000); // (*)
});
  console.log('hello world');
  
let pm2 = pm.then(function(result) { // (**)

console.log(result); // 1
return result * 2;

});
console.log('hello world2');
let pm3 = pm2.then(function(result) { // (***)

console.log(result); // 2
return result * 2;

});
console.log('hello world3');
let pm4 = pm3.then(function(result) {

console.log(result); // 4
return result * 2;

});

// 프라미스 체이닝이 아님!
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});