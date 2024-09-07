const arr = [4, 2, 3, 4, 6, 8, -5];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
}

console.log(arr)