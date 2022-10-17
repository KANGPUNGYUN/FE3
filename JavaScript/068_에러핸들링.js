try {
    //code
} catch(에러메시지) {
    //code
} finally {
    //code
}

//new Error(message);
//new SyntaxError(message);
//new ReferenceError(message);

try {
    let x = 10;
    let y = 20;
    console.log(x+y+z);
} catch(e) {
    console.error(e);
} finally {
    console.log('finally');
}

let x = 10
let y = 20;
console.log(x+y+z);
let z = 30 // z에 값이 할당되지 않는다. 에러가 발생하면서 에러가 발생되기 전까지만 실행되고 에러 이후에는 서비스가 멈추게 됩니다.

try {
    let x = 10;
    let y = 20;
    console.log(x+y+z);
} catch(e) {
    console.error(e);
} finally {
    // 일부 기능이 수행이 안될 수는 있지만 서비스는 정상적으로 작동합니다.
    console.log('finally');
}

// 참고자료 https://ko.javascript.info/try-catch