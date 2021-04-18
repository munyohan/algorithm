const isMatch = (s, p) => {
  let answer = 0;

  if (s.length === p.length) {
  }

  return answer;
};

// console.log(isMatch('aa', 'a'));

const test = () => {
  const str = 'woiejoijwbbwoece';
  const check = str.match(/.b*ce/g);

  console.log(check);
};

test();
