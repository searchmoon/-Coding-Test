//1. 최댓값과 최솟값
// 문제 설명
// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

function solution(s) {
  let answer = [];
  let arr = s.split(" ").sort((a, b) => a - b);

  answer.push(arr[0]);
  answer.push(arr[arr.length - 1]);

  return answer.join(" ");
}

// Math.min, Math.max를 이용한 풀이:
// function solution(s) {
//   const arr = s.split(" ");

//   return Math.min(...arr) + " " + Math.max(...arr);
// }

//2. 숫자의 표현
// 문제 설명
// Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

// 1 + 2 + 3 + 4 + 5 = 15
// 4 + 5 + 6 = 15
// 7 + 8 = 15
// 15 = 15
// 자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

function solution(n) {
  let answer = 0;
  
  for (let i = 0; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) {
      answer++;
    }
  }
  
  return answer;
}
// n의 약수이면서 홀수인경우를 더하면 된다.


