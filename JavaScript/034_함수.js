////////////////////////////함수의 구조///////////////////////////////////
// 1. 파선아실
function 안녕(파라미터){
    console.log(파라미터);
    console.log('hello world');
    return 100;
};

let 아규먼트 = 1000;
console.log(안녕(아규먼트) + 안녕(아규먼트));

// 2. 리턴 용도
// return값이 없다면 return undefined이 생략되어있는 것이다. 리턴되는 값은 undefined이며, 리턴을 만나면 함수는 종료된다. 실행되는 것은 리턴 위의 내용들이다. 리턴은 함수를 종료하는 역할로 많이 사용한다.
function 안녕(파라미터){
    console.log(파라미터);
    console.log('hello world');
    return 100; // 여기서 안녕 함수 종료! 아래 코드 실행 안함!
    console.log('hello world');
    console.log('hello world');
    console.log('hello world');
};



reverse(txt.slice(1)) + txt[0]
// String 함수가 사용되어 리턴값으로 기본값인 undefined가 반환된다. 두 String 함수가 문자열 결합으로 최종적으로 undefinedundefined을 반환한다.
console.log(String(console.log('hello'))+String(console.log('hello')));

////////////////////////////함수를 사용하는 이유//////////////////////////////////

// 1. 재사용성 -> 재사용하지 않을 코드는 함수로 정의하나요? -> 가능하면 함수로 만드는 것을 권합니다.
// 2. 유지보수 -> 3번 사항 + 변수의 스코프 제한
// 3. 구조파악이 용이하다.
// 4. 추상화로 개발하는 것이 객체지향 프로그래밍(OOP)언어의 언어철학에 맞다.

///////////////////////////함수의 다양한 형태/////////////////////////////////////
// 1. 함수의 아규먼트에 따른 반환값
function 함수1 (a, b, c){
    return a + b + c;
}

//콘솔창의 기능이예요. 마지막 라인에 한하여 console.log()를 찍지 않아도 return값을  콘솔창에 출력해줍니다.
함수1(10, 20, 30);
함수1(10, 20, 50);
//80 위의 식을 실행되지 않는다!

// 다음 실행 값은?
console.log(함수1(10, 20, 30));
console.log(함수1(10, 20, 50));
// 60
// 80
// undefined (console.log의 리턴값으로 undefined가 2번 나오지만 한번에 실행했을 경우 하나만 반환한다.)

// 필요 이상의 아규먼트를 넣었을 때
함수1(10, 20, 30, 40); // Error를 뿜지 않습니다. 60

// 필요 이하의 아규먼트를 넣었을 때
함수1(10, 20); // '30undefined'

// 2. 구조분해할당을 이용한 아규먼트 처리
function 함수2(a, b, ...c){
    console.log(c);
    return Math.max(...c);
}

함수2('hello', 'world', 10, 20, 30, 40);

function 함수2([a, b], ...c){
    console.log(a);
    console.log(b);
    console.log(c);
}

함수2([1, 2], 10, 20, 30, 40);

// 3. 기본값 할당
function 함수3(a=10, b=20, c=300){
    return a + b+ c
}

console.log(함수3());
console.log(함수3(100));
console.log(함수3(100, 200));
console.log(함수3(100, 200, 300));

console.log(함수3(c=1000)); //실제로는 c는 a의 값으로 할당되어서 변경된다. 파라미터는 위치가 중요해서 변수명을 같게 해도 순서에 따라 들어갑니다
console.log(함수3(c=1000, a=2000)); //실제로는 c는 a의 값으로, a는 b의 값으로 할당되어서 변경된다. 즉 순서대로 파라미터에 할당된다.

// 4. 함수에서 객체를 아규먼트로 전달받는 방법

// 개선할 여지가 있는 예제
function 함수4(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부){ //회원 등급 권한
    console.log('함수기능');
    return
}

함수4('Gold', true, true, true, '대화방 전체 백업 가능', true);
/////////////////////////// 입력되지 않는 값은 undefined ////////////////
// 개선한 예제(객체)
function 함수4({
    회원등급,
    글쓰기,
    글읽기,
    채널관리,
    백업,
    소셜로그인여부
}){
    console.log('함수기능');
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
    return
}

함수4({
    회원가입: 'Gold', 
    채널관리: false, 
    백업: '부분가능', 
    소셜로그인여부: true
});

/////////////////////////// 초기값 설정 1 /////////////////////////////
function 함수4({
    회원등급 = "Gold",
    글쓰기 = true,
    글읽기 = true,
    채널관리 = true,
    백업 = '부분가능',
    소셜로그인여부 = true
}){
    console.log('함수기능');
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
    return
}

함수4({
    회원가입: 'silver', 
    채널관리: false, 
    백업: '부분가능', 
    소셜로그인여부: true
});
/////////////////////////// 초기값 설정 2 /////////////////////////////
let { vone, vtwo, vthree } = { vone: 10, vtwo: 100, vthree: undefined }; // 작동

//let { v2one: 20, v2two: 30, v2three: 50 } = { v2one: 10, v2two: 100, v2three: undefined };
undefined //error

let { v3one = 20, v3two = 30, v3three = 50 } = { v3one: 10, v3two: 100, v3three: undefined };
undefined //error
/////////////////////////// 초기값 설정 3 /////////////////////////////
function 함수({
    a = 2, 
    b = 1, 
    c = 3
} = {}) {
    console.log(a, b, c);
    return a + b + c;
}

함수();

// 예시1: 일반함수는 기본값 작동
function 함수(a=10, b=20, c=30){
    return a + b + c
}
함수(); 
// 예시2: 일반함수 중 기본값이 객체로 표현되는 경우 Error
function 함수({a=10, b=20, c=30}){
    return a + b + c
}
함수(); // TypeError: Cannot read properties of undefined (reading 'a')

// 예시3: 아규먼트없이 실행
function 함수({a=10, b=20, c=30}={}){
    return a + b + c
}
함수();

// 참고삼아서만 알아두세요.
// let {one = 1, two = 2} = {one:100}    one이 맵핑되어 변경된 값을 반환할 수 있다.
// let {one = 1, two = 2} = {}           맵핑되는 값이 없어 초기화된 것처럼 사용할 수 있다.(예시3)
// let {a=10, b=20, c=30}                는 let {a=2, b=1, c=3}를 그냥 실행시키는 것과 같다. 이는 아무 값도 없는 것이다.(예시2)

/////////////////////////// 재귀함수 /////////////////////////////////

// 재귀함수(top-down, 분할정복, 락드릴) <-> 반복문(Bottom-up)
function factorial(n) {
    //종료조건이 없으면 무한반복합니다.
    //종료조건
    if(n <= 1){
        return 1
    }
    //실행문(증감식)
    return n * factorial(n-1)
}

factorial(5)
/*
5! = 5 * 4 * 3 * 2 * 1

                n       n <= 1      return
factorial(5)    5       false       5 * factorial(4) = 120
factorial(4)    4       false       4 * factorial(3) = 24
factorial(3)    3       false       3 * factorial(2) = 6
factorial(2)    2       false       2 * factorial(1) = 2
factorial(1)    1       true        1
*/

//반복문
let result = 1;
for (let i = 2; i < 6; i++){
    result *= i;
}
console.log(result);


// 누적합은 아래 코드들이 좋은 코드는 아닙니다. 우리가 수식을 알고 있다면 순회하지 않고 해결할 수 있기때문에 좋은 코드를 만들 수 있습니다.
function 누적합(n) {
    if(n <= 1){
        return 1
    }
    return n + 누적합(n - 1)
}

누적합(100);

//반복문
let result2 = 1;
for (let i = 2; i < 100; i++){
    result2 += i;
}
console.log(result2);

// 수식을 활용한 누적합(순회X)
let n = 100;
console.log(n*(n + 1) / 2);

// 재귀함수로 문자열을 뒤집는 코드를 작성하세요.
// 재귀함수로 표현한 reverse() 
function reverse(txt){
    if (txt.length <= 1) {
        return txt
    }
    return reverse(txt.slice(1)) + txt[0]
}
reverse('hello');
/*
참고사항
'hello'.slice(1)
'ello'

n                   txt.length <= 1         return
reverse('hello')    false                   reverse(txt.slice(1)) + 'h' = 'olleh'
reverse('ello')     false                   reverse(txt.slice(1)) + 'e' = 'olle'               
reverse('llo')      false                   reverse(txt.slice(1)) + 'l' = 'oll'            
reverse('lo')       false                   reverse(txt.slice(1)) + 'l' = 'ol'                      
reverse('o')        true                    'o'                      
*/

// 반복문으로 표현한 reverse() 
txt = 'hello'
result = ''
for (const i of txt) {
    result = i + result;
}

console.log(result);

// 지역변수와 전역변수

// 블록레벨스코프 //for문도 마찬가지
if(true){
    let x = 10;
    const y = 10;
}
console.log(x, y); //Uncaught ReferenceError: x is not defined

// 밖에서 선언된 x는 함수 내부에서도 접근가능합니다.
let x = 100;
function xplus() {
    x = x + 10;
}

xplus();
console.log(x);

// 함수가 종료된 다음에는 선언된 변수는 휘발됩니다.
function xplus() {
    let x = 100;
    x = x + 10;
}

xplus();
console.log(x);

//함수 안에 함수
function a() {
    console.log('a 실행');
    function b() {
        console.log('b 실행');
    }
    b();
}

a();

// 스코프 정리 참고사이트 https://velog.io/@bico/JavaScript-%EB%A0%89%EC%8B%9C%EC%BB%AC-%EC%8A%A4%EC%BD%94%ED%94%84lexical-scope

// 화살표 함수
// 참고사이트  https://ko.javascript.info/arrow-functions-basics
function 함수1(x, y) {
    return x + y
}

let 함수2 = (x, y) => x + y;

함수1.name;
//'함수1'
함수2.name;
//'함수2'
console.dir(함수1);

// function 함수1(x, y) {
//     let z = x + y;
//     return z 
// }

// function 함수2 = (x, y) => {
//     let z = x + y;
//     return z 
// }

// 호이스팅이 다릅니다.
// 35번 파일로 이어집니다.   