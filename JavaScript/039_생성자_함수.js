let book = {
    책이름: '완전정복 JavaScript',
    책가격: 1000,
    저자: '홍길동',
    출판일: '22.10.11'
}

let newBook = {};

newBook['책이름'] = 'JavaScript';
newBook['책가격'] = 1000000;
newBook['저자'] = '세원, 석규, 슬기';
newBook['출판일'] = '22.10.30'

// 위에 코드가 간결하지 않다
function Book(책이름, 책가격, 저자, 출판일) {

    // this = {}      this라는 값을 배열형태로 받을 수 있도록 함
    this.책이름 = 책이름;
    this.책가격 = 책가격;
    this.저자 = 저자;
    this.출판일 = 출판일;
    // return this    마지막에 this를 리턴해주는 역할
}

let data = Book('CSS', 10, '유진', '22.12.30');
console.log(data); // undefined return값이 없기 때문에 

let book1 = new Book('HTML', 10, '유진', '22.12.30');
let book2 = new Book('CSS', 20, '유진', '23.12.30');
let book3 = new Book('JS', 30, '유진', '24.12.30');
console.log(book1, book2, book3);

// new 키워드를 사용했을 경우
// this = {}
// return this가 생략된 것으로 보면된다.

// 생성자 함수(new)를 사용하는 이유는 객체를 찍어내기 위해서 입니다(객체 생성)