// 생성
const obj1 = new Object();
const obj2 = {};
const obj3 = { name: "풍윤", age: 27 };
console.log(obj1); // {}
console.log(obj2); // {}
console.log(obj3); // { name: '풍윤', age: 27}

// 객체 요소 추가
const obj = { name: "풍윤", age: 27 };
obj["email"] = "zkdvnd@naver.com";
obj.phone = "01012345678";
console.log(obj); // { name: '풍윤', age: 27, email: 'zkdvnd@naver.com', phone: '01012345678'}

// 객체 요소 삭제
delete obj.phone;
console.log(obj); // { name: '풍윤', age: 27, email: 'zkdvnd@naver.com' }

// 객체 특정 키 확인
console.log("email" in obj); // true
console.log("phone" in obj); // false

// 객체 전체 키 확인
console.log(Object.keys(obj)); // ['name', 'age', 'email']

// 객체 전체 값 확인
console.log(Object.values(obj)); // ['풍윤', 27, 'zkdvnd@naver.com']

// 객체 순회(for in)
for (const key in obj) {
  console.log(key, obj[key]);
}
// name 풍윤
// age 27
// email zkdvnd@naver.com
