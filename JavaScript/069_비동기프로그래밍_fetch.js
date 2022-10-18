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
// 5. (등록) a, b를 함수 실행 컨텍스트에 등록(variable 환경 lexical 환경 구성)
// 6. (실행) a와 b에 각각 값을 할당(lexical 환경 값 변경), a+b+z를 연산하여 return 해야 하는데 z값이 내부 스코프에 없음 → 스코프 체인을 타고 올라가 z라는 변수가 상위에 있는지 확인하여 가져옴

// 스코프 체인, 호이스팅 등 변수의 값이 어떻게 진행되고 어떤 결과를 전달하는지 확인해보자

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

// ***환경 레코드(environment recode) :식별자와 식별자에 바인딩된 값을 기록해두는 객체
// 호이스팅에는 변수 호이스팅과 함수 호이스팅가 존재

//변수 호이스팅 예시(var)
console.log(TVChannel); // undefined
var TVChannel = "Netflix";
console.log(TVChannel); // Netflix

//변수 호이스팅 예시(const, let)
console.log(TVChannel); // Reference Error
const TVChannel = "Netflix";
console.log(TVChannel); // Netflix

// 변수 호이스팅
// 우선 자바스크립트로 실행할 코드를 스캔하면서 전역 실행 컨텍스트에 한칸 생성해서 콜스택에 넣습니다.
// 자바스크립트 코드에 선언문을 먼저 읽어 실행 컨택스트 안에 있는 환경레코드에 새로운 식별자를 기록합니다. 만약 var 키워드로 선언했다면 TVChannel라는 변수명을 기록하고, 그 값을 undefined로 초기화할 수 있습니다.
// 이렇게 본격적인 실행에 앞서 스캔하고 준비하는 단계를 생성단계라고 합니다.
// 즉, 선언문만 실행해서 환경레코드에 기록하는 과정을 생성단계라고 합니다.

// 실행단계에서는 선언문외 나머지 코드를 순차적으로 실행하는데 생성과정에서 기록해둔 환경레코드를 참조하거나 업데이트합니다.
// 자바스크립트엔진은 현재 활성화된 실행 컨텍스트 내에 환경레코드를 보고 이미 기록된 TVChannel의 값을 참조해서 문제없이 값을 출력합니다.
// 변수 호이스팅 예시의 2번째 코드라인에서는 실행컨텍스트의 바인딩된 값 undefined에서 실행단계로 환경레코드의 값을 "Netflix"로 새롭게 업데이트(할당)합니다.
// 변수 호이스팅 예시의 3번째 코드라인에서는 실행단계를 거쳐 기록된 환경레코드  TVChannel의 값 "Netflix"로 결정해냅니다.

// ES6이후에 생긴 const, let과 같은 키워드로 선언하면 생성단계에서 TVChannel라는 식별자를 기록하지만, 해당하는 값을 초기화하진 않습니다.
// 읽어올 수 있는 값이 아무것도 없으니 변수 호이스팅 예시의 1번째 코드라인에서는 Reference Error이 납니다.

// 이렇게 let 이나 const으로 선언했을 때, 선언 이전에 식별자를 참조할 수 없는 구역을 일시적 사각지대(Temporal Dead Zone)이라고 합니다.

// 함수 호이스팅(함수표현식과 함수선언문)
// 1. 함수표현식: 변수에 함수를 담아서 함수를 선언하는 방식(변수 호이스팅과 동일하게 동작)
//함수표현식 예시(var)
study(); // undefined을 참조하지만 함수에서는 변수와 달리 호출할 수 없는 값이기 때문에 type error가 발생한다.(Type Error: undefined is not function)
var study = () => {
    //code
};

//함수표현식 예시(const, let)
study(); // 참조하는 값이 없어 Reference Error가 발생한다.(Reference Error: Cannot read its value yet)
const study = () => {
    //code
};

// 2. 함수선언문: 선언과 동시에 함수가 생성되어 선언 전에도 함수를 실행 할 수 있음
//함수표현식 예시(const, let)
study(); // study() 정상 작동
function study(){
    //code
};

// ***외부환경참조(Outer Environment Reference): 바깥 Lexical Environment를 가리킴
// 환경 레코드와 외부환경참조를 묶어 Lexical Environment이라고 한다
// 식별자 결정(Identifier Resolution): 코드에서 변수나 함수의 값을 결정하는 것
// 변수 섀도잉(Variable Shadowing): 동일한 식별자로 인해 상위 스코프에서 선언된 식별자의 값이 가려지는 현상
// 스코프 체인: 식별자를 결정할 때 활용하는 스코프들의 연결리스트

// 외부환경참조 예시
let lamp = false;
function goTo2F(){
    let lamp = true;
    console.log(lamp); //위의 goTo2F에서 lamp 식별자와 전역스코프에 있는 lamp 식별자 사이에서 어떤 식별자의 값을 결정해야하는지 결정해내는 것을 식별자 결정이라고 합니다.

    function goTo3F() {
        let pet = "puppy";

        console.log(pet); //puppy
        console.log(playstation); // 현재 활성화된 실행컨텍스트의 환경레코드에서 playstation라는 식별자를 먼저 살핀다. 이 안에 없으면 자바스크립트 엔진은 outer가 가리키는 바깥 렉시컬 환경으로 가서 playstation라는 식별자를 찾기 시작한다. 바깥 렉시컬 환경에서 찾지 못하면 그 바깥 렉시컬 환경에서 찾게되고 최종적으로 전역 실행 컨텍스트의 렉시컬 환경(최상위 실행 컨텍스트)에서 찾으며 여기서 찾지 못했을 경우 자바 스크립트 엔진은 playstation라는 식별자를 찾는 것을 멈추고 playstation는 없다는 결론을 내립니다. 그리고 없는 식별자를 참조하려고 했기 때문에 Reference Error를 반환합니다.
        console.log(lamp); // 현재 활성화된 실행컨텍스트의 환경레코드에서 lamp라는 식별자를 먼저 살핀다. 이 안에 없으면 자바스크립트 엔진은 outer가 가리키는 바깥 렉시컬 환경으로 가서 lamp라는 식별자를 찾기 시작한다. 바로 바깥 렉시컬 환경인 goTo2F() 함수에서 식별자를 찾아 true라는 값을 반환합니다. 여기서 다음 바깥 렉시컬 환경인 전역 실행 컨텍스트의 같은 식별자인 lamp의 값을 찾지 않고 값을 전달하기 때문에 전역 실행 컨텍스트의 같은 식별자인 lamp의 값을 알 수 없는 현상이 나타나는데 이를 변수 섀도잉이라고 합니다.
    }

    goTo3F();
}

goTo2F();