'use strict';

function solution(gift_cards, wants) {
  let answer = 0;
  const fixed = new Array(gift_cards.length); // 갖고 싶은 거 가진 상태면 true로 만들어서 변경불가하게 처리하기 위함

  for (let i = 0; i < gift_cards.length; i++) {
    // 본인이 갖고싶은 거랑 다른 것을 갖고 있으면 찾아서 바꿔주기
    if (gift_cards[i] !== wants[i]) {
      for (let j = 0; j < gift_cards.length; j++) {
        if (!fixed[i] && wants[i] === gift_cards[j]) {
          let temp = gift_cards[j];
          gift_cards[j] = gift_cards[i];
          gift_cards[i] = temp;
          fixed[i] = true;
          break;
        }
      }
    }
  }

  for (let i = 0; i < gift_cards.length; i++) {
    if (gift_cards[i] !== wants[i]) answer++;
  }

  return answer;
}

// worst case에 상당히 오래 걸림..
const gift_cards = new Array(100000).fill(2);
const wants = new Array(100000).fill(1);

console.log(solution(gift_cards, wants));
