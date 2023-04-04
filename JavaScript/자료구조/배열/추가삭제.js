const arr = [1, 2, 3];
console.log(arr);
// [1,2,3]

// 4가 끝에 추가됩니다.
arr.push(4); // O(1)
console.log(arr);
// [1,2,3,4]

// 여러 개를 한 번에 추가할 수 있습니다.
arr.push(5, 6); // O(1)
console.log(arr);
// [1,2,3,4,5,6]

// 3번 인덱스에 128을 추가합니다.
arr.splice(3, 0, 128); // O(n)
console.log(arr);
// [1,2,3,128,4,5,6]

// 3번 인덱스 값을 제거합니다.
arr.splice(3, 1); // O(n)
console.log(arr[3]);
// 4
