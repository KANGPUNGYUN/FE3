// 빈 Array를 생성할 수 있습니다.
let arr1 = [];
console.log(arr1);

// 미리 초기화된 Array를 생성할 수 있습니다.
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2);

// 많은 값을 같은 값으로 초기화할 경우 fill을 쓸 수 있습니다.
let arr3 = Array(10).fill(0);
console.log(arr3);

// 특정 로직을 사용하여 초기화할 경우 from을 사용할 수 있습니다.
let arr4 = Array.from({ length: 100 }, (_, i) => i);
console.log(arr4);
