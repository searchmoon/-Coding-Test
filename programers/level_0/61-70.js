
//61. 대문자로 바꾸기
// 문제 설명
// 알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 대문자로 변환하여 return 하는 solution 함수를 완성해 주세요.

function solution(myString) {
  let answer = myString.toUpperCase();
  return answer;
}

//62. n 번째 원소까지
// 문제 설명
// 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 n 번째 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
  let answer = num_list.splice(0,n);
  return answer;
}

//63. 접두사인지 확인하기
// 문제 설명
// 어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다. 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
// 문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, is_prefix) {
  return my_string.startsWith(is_prefix) ? 1 : 0;
}

//slice() 메서드를 이용한 풀이
// function solution(my_string, is_prefix) {
//   return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0
// }


//64. 부분 문자열
// 문제 설명
// 어떤 문자열 A가 다른 문자열 B안에 속하면 A를 B의 부분 문자열이라고 합니다. 예를 들어 문자열 "abc"는 문자열 "aabcc"의 부분 문자열입니다.
// 문자열 str1과 str2가 주어질 때, str1이 str2의 부분 문자열이라면 1을 부분 문자열이 아니라면 0을 return하도록 solution 함수를 완성해주세요.

function solution(str1, str2) {
  if(str2.includes(str1)){
    return 1;
  } else {
    return 0;
  }
}

// 삼항연산자 사용한 풀이
// function solution(str1, str2) {
//   return str2.includes(str1) ? 1 : 0;
// }

//65. 정수 부분
// 문제 설명
// 실수 flo가 매개 변수로 주어질 때, flo의 정수 부분을 return하도록 solution 함수를 완성해주세요.

function solution(flo) {
  return Math.floor(flo);
}

//66. 카운트 업
// 문제 설명
// 정수 start와 end가 주어질 때, start부터 end까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(start, end) {
  let answer = [];
  let length = end - start;
  for(let i = start; i <= end; i++){
    answer.push(i);
  }
  return answer;
}

