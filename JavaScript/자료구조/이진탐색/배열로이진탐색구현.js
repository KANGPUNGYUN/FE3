const arr = [1, 1, 5, 124, 400, 599, 1004, 2876, 8712];

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = parseInt((start + end) / 2);

    if (target === arr[mid]) {
      return mid;
    } else {
      if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return -1;
}

console.log(binarySearch(arr, 2876)); // 7
console.log(binarySearch(arr, 1)); // 1
console.log(binarySearch(arr, 500)); // -1
