const longestValidParentheses = s => {
  let answer = 0;
  const stack = [];
  if (s.length === 0) return answer;

  return answer;
};

console.log(longestValidParentheses('()(()'));

// (를 만나면 stack에 푸쉬
// )를 만나면 stack에서 팝
// )로 닫을 때 stack의 길이가 0이면 연속
// 아니면 비연속적
