//71.n보다 커질 때까지 더하기
// 문제 설명
// 정수 배열 numbers와 정수 n이 매개변수로 주어집니다. numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.

function solution(numbers, n) {
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
    if (answer > n) {
      return answer;
    }
  }
}

// while 을 이용한 풀이
// function solution(numbers, n) {
//   let answer = 0;
//   let i = 0;
//   while(answer <= n) {
//       answer += numbers[i++]
//   }
//   return answer;
// }

//72. 길이에 따른 연산
// 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  let answer = 0;
  if(num_list.length >= 11){
    answer = num_list.reduce((acc, crr) => acc + crr, 0);
  } else {
    answer = num_list.reduce((acc, crr) => acc * crr, 1);
  }
  return answer;
}

//73. 공배수
// 문제 설명
// 정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.

function solution(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}
