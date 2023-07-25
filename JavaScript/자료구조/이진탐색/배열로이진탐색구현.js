// const arr = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
// 만약 탐색할 배열의 값이 정렬되어 있지 않는 경우, 이진 탐색을 하기 전에 sort((a,b)=>a-b)로 정렬해야 됩니다.

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = parseInt((low + high) / 2);

    if (target === arr[mid]) {
      return true; // 탐색하고자 하는 값의 인덱스를 리턴하는 경우 return mid로 수정
    } else {
      if (target < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  return false; // 탐색하고자 하는 값이 없을 경우를 -1로 리턴하는 경우 return -1로 수정
}

// binarySearch(arr, 37) // true
// binarySearch(arr, 1) // true
// binarySearch(arr, 2) // false
