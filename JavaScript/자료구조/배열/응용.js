const arr = [1, 2, 3, 4, 5, 6];

// join(배열 요소 합치기)
console.log(arr.join(", ")); // 1, 2, 3, 4, 5, 6
console.log(arr); // [1,2,3,4,5,6]

// reverse(배열 순서 바꾸기, 원본 수정)
console.log(arr.reverse()); // [6,5,4,3,2,1]
console.log(arr); // [6,5,4,3,2,1]

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 10];

// concat (배열 합치기)
console.log(arr1.concat(arr2)); // [1,2,3,4,5,6,7,8,9,10]
console.log(arr1);

// push, pop (마지막 요소 추가, 삭제)
arr1.push(7);
arr1.push(7, 8, 9);
console.log(arr1); // [1,2,3,4,5,6,7,7,8,9]
arr1.pop(); // 9
arr1.pop(); // 8
console.log(arr1.pop()); // 7
console.log(arr1); // [1,2,3,4,5,6,7]

// shift, unshift (첫 번째 요소 삭제, 추가)
arr1.shift();
arr1.shift();
console.log(arr1); // [3,4,5,6,7]
arr1.unshift(10);
console.log(arr1); // [10,3,4,5,6,7]

// slice (중간 요소 추출, 원본 유지)
console.log(arr1.slice(2, 4)); // [4,5]
console.log(arr1); // [10,3,4,5,6,7]

// splice (중간 요소 삭제, 원본 수정)
arr1.splice(2, 2);
console.log(arr1); // [10,3,6,7]

// 배열의 순회 (for of)
for (const item of arr) {
  console.log(item);
}
