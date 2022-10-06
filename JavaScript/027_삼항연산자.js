// 조건식 ? 참일경우 실행되는 표현식 : 거짓일 경우 실행되는 표현식

let item = true ? 100 : 200;
console.log(item);

// 삼항연산자의 중첩
let price = 5000;

let message = (price>6000) ? '비싸요!' : 
			  (price<3000) ? '엄청싸요!' : '적당해요!';

// 위의 코드는 아래와 같다.
// let price = 5000;
// let message = '';

// if (price > 6000) {
// 		message = '비싸요!';
// } else if (price < 3000) {
// 		message = '엄청싸요!';
// } else {
// 		message = '적당해요!';
// }