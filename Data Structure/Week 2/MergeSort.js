function merge(leftArray, rightArray) {
  const sortedArray = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray];
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

const arr = [4, 2, 3, 4, 6, 8, -5];

console.log(mergeSort(arr));

// function mergeSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }

//   let mid = Math.floor(arr.length / 2);
//   let leftArray = arr.slice(0, mid);
//   let rightArray = arr.slice(mid);
//   return sort(mergeSort(leftArray),mergeSort(rightArray));
// }

// function sort(leftArray, rightArray) {
//   const sortedArray = [];
//   while (leftArray.length && rightArray.length) {
//     if (leftArray[0] <= rightArray[0]) {
//       sortedArray.push(leftArray.shift());
//     } else {
//       sortedArray.push(rightArray.shift());
//     }
//   }
//   return [...sortedArray, ...leftArray, ...rightArray];
// }

// const arr = [8, 20, -2, 4, -6];
// console.log(mergeSort(arr));
