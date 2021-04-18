const minPathSum = grid => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const cur = grid[i][j];
      let up = 0;
      let left = 0;

      if (i - 1 >= 0) up = grid[i - 1][j];
      if (j - 1 >= 0) left = grid[i][j - 1];

      const upSum = cur + up;
      const leftSum = cur + left;

      if (i - 1 < 0 && j - 1 < 0) continue;
      else if (i - 1 < 0) grid[i][j] = leftSum;
      else if (j - 1 < 0) grid[i][j] = upSum;
      else {
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
