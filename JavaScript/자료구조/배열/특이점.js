// 자바스크립트의 Array는 다른 언어의 Array와 조금 다릅니다.
// 자바스크립트의 Array는 동적입니다.(배열의 크기 고정x)
const arr = [];
console.log(arr); // []
arr.push(1);
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr); // [1,1,2,3]

// 자바스크립트의 Array는 HashMap에 가깝습니다.
console.log(arr.length); // 4
// index가 number가 아니어도 됩니다.(불린값도 가능)
arr["string"] = 10;
arr[false] = 0;
console.log(arr);
console.log(arr.length); // 4
arr[4] = 5;
console.log(arr.length); // 5

// 이러한 특이점이 발생하는 이유는 자바스크립트의 배열은 객체이기 때문입니다. 하지만 일반 객체와 다르게 length를 내부적으로 관리합니다.
// 인덱스와 무관한 값을 인덱스로 사용할 경우, 길이에 영향을 미치지 않습니다.
