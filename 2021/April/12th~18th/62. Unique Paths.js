const uniquePaths = (m, n) => {
  const arr = new Array(m);
  for (let i = 0; i < arr.length; i++) arr[i] = new Array(n).fill(1);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr[0].length; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }

  return arr[arr.length - 1][arr[0].length - 1];
};

console.log(uniquePaths(7, 3));
