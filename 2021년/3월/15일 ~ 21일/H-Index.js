'use strict'

function solution(citations) {
    let answer = 0;

    citations.sort((a, b) => a-b);
    console.log(citations);

    return answer;
}

console.log(solution([3, 0, 6, 1, 5]));

