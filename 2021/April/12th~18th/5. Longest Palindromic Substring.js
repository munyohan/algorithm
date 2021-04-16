const longestPalindrome = s => {
  let answer = s[0];

  for (let i = 0; i < s.length; i++) {
    const base = [i];
    let temp = s[i];

    for (let j = i; j < s.length; j++) {
      if (s[j] === s[j + 1]) {
        base.push(j + 1);
        temp += s[j + 1];
      } else break;
    }

    if (answer.length < temp.length) answer = temp;

    const start = base[0];
    const end = base[base.length - 1];
    let cnt = 1;
    while (true) {
      if (start - cnt < 0 || end + cnt > s.length - 1) break;

      if (s[start - cnt] === s[end + cnt]) {
        temp = s.slice(start - cnt, end + cnt + 1);
        if (answer.length < temp.length) answer = temp;
        cnt++;
      } else break;
    }
  }

  return answer;
};

console.log(longestPalindrome('bacabab'));
