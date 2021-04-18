const minPathSum = grid => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i - 1 < 0 && j - 1 < 0) continue;
      else if (i - 1 < 0) grid[i][j] += grid[i][j - 1];
      else if (j - 1 < 0) grid[i][j] += grid[i - 1][j];
      else {
        const upSum = grid[i][j] + grid[i - 1][j];
        const leftSum = grid[i][j] + grid[i][j - 1];

        if (upSum < leftSum) grid[i][j] = upSum;
        else grid[i][j] = leftSum;
      }
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
