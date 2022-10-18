/*
async function request() {
  const response = await fetch('url 기입',
  {
    method: "GET", //POST, DELETE, PUT
    headers: {
      "Content-type": "콘텐츠 형태",
      //application/json, text/plain 등
    },
    body: JSON.stringify(
        서버에 전달할 데이터
    );
  });
  const data = await response.json();
  console.log(data);
}
request();
*/

// function 안의  await 비동기: 실행이 안됩니다.
// async function 안의  await 비동기: 실행 됩니다.
// 예외적으로 awiat가 밖에 감싸여진 함수 없이 사용될 수 있는 것을 top-level-awiat라고 하며, 이건 작동합니다.(생긴지 얼마 안되서 언급하는 책이 거의 없을겁니다.)

fetch('https://jsonplaceholder.typicode.com/users/3')
    .then(response => response.json());

const userData = fetch('https://jsonplaceholder.typicode.com/users/3')
    .then(response => response.json()); //pending 값이 들어가게 된다

const userData2 = await fetch('https://jsonplaceholder.typicode.com/users/3')
    .then(response => response.json())
    console.log(userData)

async function printImg(){
    const response = await fetch(`https://picsum.photos/200`);
    const blobImg= await(response.blob());
    //blob을 담을 img 태그를 만든다.
    const img = document.createElement('img');
    //html body에 위에서 만든 img 태그를 삽입한다.
    document.body.append(img);
    //img 태그의 주소를 설정한다.
    img.src = URL.createObjectURL(blobImg);
}
printImg()

// get 요청
async function get() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
    method: "GET",
    });
    const data = await response.json();
    console.log(data);
}
get();

// post 요청 - 생성
// JSON.stringify() 메서드는 배열이나 객체를 JSON 포맷의 문자열로 변환해준다. 
async function post() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
    method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
          body: JSON.stringify({ //문자열로 변환하지 않으면 에러발생
            "title": "오늘의 간식",
            "body": "고소미",
            "userId": 3
        })
    }
    );
    const data = await response.json();
    console.log(data);
}
post();

// delete - 삭제
async function delete() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/3',
    { method: "DELETE"}
    );
    const data = await response.json();
    console.log(data);
}
delete();


// put - 수정
async function put() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1',
    {
    method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            "title" : "오늘의 간식",
            "body" : "마카다미아 쿠키",//업데이트할 내용
            "userId" : 1 //1번 user
        })
    }
    );
    const data = await response.json();
    console.log(data);
}
put();

// 렉시컬 환경으로 인해 스코프체인이 일어난다
// const z = 100
// function sum(a, b){return a + b + z} //스코프체인이란 내부 스코프안에 매개변수가 없다면, 외부 스코프 주소를 찾는다.
// console.dir(sum)
// 함수가 끝나면 함수의 lexical 환경이 반환된다()
// [[Scopes]]
// : 
// Scopes[2]
// 0
// : 
// Script {z: 100}
// 1
// : 
// Global {window: Window, self: Window, document: document, name: '', location: Location, …}

// ------------------------------------------------------------------------- //
// 전역 코드 - 전역 실행 컨텍스트
// 함수 코드 - 함수 실행 컨텍스트
// eval 코드 - eval 실행 컨텍스트
// 모듈 코드 -  모듈 실행 컨텍스트(모듈 내부에 함수가 있다면 함수 실행 컨텍스트)
// 공식 문서 https://262.ecma-international.org/13.0/#sec-types-of-source-code
// lexical 환경

// 변수들이 저장할 공간이 생성된다.


// - 실행 컨텍스트(Execution context) : 작성한 코드 실행 환경
//     - variable 환경 - 외부 Scope의 주소 참조(최초 값), 컨텍스트 내부의 식별자 정보(최초 값)
//     - lexical 환경 - 외부 Scope의 주소 참조(변경 값), 컨텍스트 내부의 식별자 정보(변경 값)
//     - thisBinding - 컨텍스트가 바라보는 this

// 1. (생성) 전역 실행 컨텍스트 생성
// 2. (등록) x, y, z, sum를 먼저 전역 실행 컨텍스트에 등록(variable 환경 lexical 환경 구성)
// 3. (실행) x, y, z에 각각 값을 할당(lexical 환경 값 변경), sum을 호출
// 4. (생성) sum의 함수 실행 컨텍스트 생성
// 5. (등록) a, b를 함수 실행 컨텍스트에 등록(렉시컬 환경 구성)
// 6. (실행) a와 b에 각각 값을 할당, a+b+z를 연산하여 return 해야 하는데 z값이 내부 스코프에 없음 → 스코프 체인을 타고 올라가 z라는 변수가 상위에 있는지 확인하여 가져옴

function sum(a, b){return a + b + z} // 스코프 체이닝 발생
let x;
let y;
let z;
x = 10;
y = 20;
z = 100;
console.log(sum(x, y));
// ---------------------- //
// js 코드
function one(){ two(); }
function two(){ three(); }
function three(){ console.log('end'); }

// (호출 스택) 쌓이면서 하나씩 빠짐)
three()
two()
one()
anonymous // 가상 전역 컨텍스트, 이것도 마지막에 빠짐

// 백드라운드 환경은  멀티스레드 브라우저의 환경
// 백그라운드 환경에서 마치면 테스트큐로 이동
// 테스트큐에서 마치면 호출스택에서 anonymous함수까지 마무리되어 꺼내진다면 그 이후에 값이 호출스책으로 들어간다.

// 비동기 핵심포인트 3가지
// 1. 함수의 동작 순서를 알 수 있다.
// 2. setTimeout의 실행 시간을 보장하기 힘들다.(비동기 함수의 실행 순서를 알 수 있다.)
// 3. JavaScript는 싱글쓰레드이지만 브라우저는 멀티쓰레드이다. 백그라운드(Web APIs - DOM-document, AJAX-XMLHttpRequest, Timeout-setTimeout…)로 넘어가면 멀티로 작동한다.