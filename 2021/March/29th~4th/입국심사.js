'use strict';

function solution(n, times) {
  let answer = Number.MAX_SAFE_INTEGER; // 모든 사람이 입국심사를 마치기까지 걸린 시간

  times.sort((a, b) => a - b); // 이진탐색을 하기 위해 오름차순 정렬을 해준다
  let left = times[0]; // 최소로 걸리는 시간
  let right = times[times.length - 1] * n; // 최대로 걸리는 시간

  // left가 right를 넘어가면 종료
  while (left <= right) {
    const mid = parseInt((left + right) / 2); // 중간 값
    let count = 0;

    // 각 입국심사관마다 제한시간동안 몇 명 처리 가능한지 세어주고 count에 더해준다
    times.forEach(time => {
      count += parseInt(mid / time);
    });

    // count가 입국심사 대기자들보다 많거나 같으면 차고 넘침이 있는 것이므로 최대 값을 줄여서 다시 테스트한다.
    // 같을 때도 하는 것은 정확한 하나의 값을 찾기 위해 줄이는 것이다.
    // 각각 -1과 +1을 해주는 것은 해당 mid값은 이미 검사했기 때문이다.
    if (count >= n) right = mid - 1;
    else if (count < n) left = mid + 1; // 작을 때는 최소 값을 늘려서 테스트한다.

    // 설정된 mid값으로 모든 인원이 검사가 가능하면 기존 값과 비교해 작은 값으로 대체한다.
    if (count >= n) {
      answer = Math.min(answer, mid);
    }
  }

  return answer;
}

// console.log(solution(6, [7, 10])); // 정답: 28
console.log(solution(1000, [1, 1, 1000]));
