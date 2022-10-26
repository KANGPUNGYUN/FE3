// 모듈 + 사용자 정의 혼합패턴(비공개 프로퍼티가 없던 과거에 사용한 클로저 개념을 이용한 비공개 프로퍼티 접근방식)

function Person() {
    let age = 30; // 비공개 프로퍼티로

    function innerPerson() {}

    innerPerson.prototype.getAge = function () {
        return age;
    }

    return innerPerson;
}

// PersonFunc이란 생성자 함수를 만듭니다.
const PersonFunc = Person();
const person = new PersonFunc();

person.getAge(); // 30

// 함수에는 선언과 실행식이 나뉘어있는데 나누지 않고 선언하자마자 실행하기를 원한다면 IIFE를 사용한다.
// (function () {
//     console.log('IIFE');
// })();

// IIFE를 활용한 클로저 비공개 프로퍼티

const NewPerson = (
    function () {
        let age = 30;

        function innerPerson() { }

        innerPerson.prototype.getAge = function () {
            return age;
        }
    
        return innerPerson
    }
)();

const personWithSecret = new NewPerson();

personWithSecret.getAge(); // 30