function randArray(k) {
  const arr = [];
  for (i = 0; i > k; i++) {
    arr[i] = Math.floor(Math.random() * 500) + 1;
  }

  console.log(arr);
}

randArray(5);
