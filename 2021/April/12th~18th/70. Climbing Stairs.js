const climbStairs = n => {
  const array = [];
  array[1] = 1;
  array[2] = 2;

  for (let i = 3; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }

  return array[n];
};

console.log(climbStairs(5));
