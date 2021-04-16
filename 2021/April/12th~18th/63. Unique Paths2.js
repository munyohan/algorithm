const uniquePathsWithObstacles = obstacleGrid => {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const arr = new Array(m);

  for (let i = 0; i < arr.length; i++) arr[i] = new Array(n).fill(0);
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (obstacleGrid[i][j] === 1) continue;

      const x = i === 0 ? 0 : arr[i - 1][j];
      const y = j === 0 ? 0 : arr[i][j - 1];

      arr[i][j] = Number(x) + Number(y);

      if (i === 0 && j === 0) arr[i][j] = 1;
    }
  }

  return arr[m - 1][n - 1];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
