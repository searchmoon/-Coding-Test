// 11. 짝수 홀수 개수
// 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(num_list) {
  let even = num_list.filter(n => n % 2 == 0).length;
  let odd = num_list.filter(n => n % 2 == 1).length;
  return [even, odd];
}

// for of를 이용한 풀이
// function solution11(num_list) {
//     let answer = [0,0];

//     for(let a of num_list){
//         answer[a%2] += 1
//     }

//     return answer;
// }

//12. 짝수의 합
// 문제 설명
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

function solution(n) {
  let answer = 0;
  for(let i = 1; i <= n; i++){
    if(i % 2 == 0){
      answer += i;
    }
  }
  return answer;
}

//13. 배열의 평균값
//문제 설명
//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let answer = 0;
  for(let i = 0; i < numbers.length; i++){
    answer += numbers[i];
  }
  let average = answer/numbers.length;
  return average;
}

//14. 양꼬치
// 문제 설명
// 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.

function solution(n, k) {
  return (n * 12000) + (k * 2000) - parseInt(n/10) * 2000;
}

//15.배열 뒤집기
// 문제 설명
// 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  let answer = [];
  for(let i = num_list.length - 1; i >= 0; i--){
    answer.push(num_list[i]);
  }
  return answer;
}
// 간단하게 하려면 reverse 메소드 사용.
// function solution(num_list) {
//     return num_list.reverse();
// }

//16. 배열 두배 만들기
// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let answer = [];
  for(let i = 0; i < numbers.length; i++){
    answer.push(numbers[i] * 2);
  }
  return answer;
}
// reduce() 를 사용한 풀이
// function solution(numbers) {
//     return numbers.reduce((acc, crr) => [...acc, crr * 2], []);
// }

//17. 배열 자르기
// 문제 설명
// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(numbers, num1, num2) {
  let answer = [];
  for(let i = num1; i <= num2; i++){
    answer.push(numbers[i]);
  }
  return answer;
}

// splice() 를 이용한 풀이
// function solution(numbers, num1, num2) {
//     return numbers.splice(num1, num2 - num1 +1);
// }

//18. 중복된 숫자 개수
// 문제 설명
// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

// function solution(array, n) {
//     let answer = 0;
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === n) {
//             answer += 1;
//         }
//     }
//     return answer;
// }

// filter() 를 사용한 풀이
function solution(array, n) {
  let answer = 0;
  answer = array.filter((number) => number === n).length;
  return answer;
}

//18. 점의 위치 구하기
// 문제 설명
// 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.

function solution(dot) {
  let answer = 0;
  if(dot[0] >= 0){
    return answer = dot[1] >= 0 ? 1 : 4
  } else {
    return answer = dot[1] >= 0 ? 2 : 3
  }
  return answer;
}
