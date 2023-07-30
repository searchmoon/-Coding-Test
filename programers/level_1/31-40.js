//31.x만큼 간격이 있는 n개의 숫자
// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

function solution(x, n) {
  let answer = [];

  for(let i = 1; i <= n; i++){
    answer.push(x * i);
  }

  return answer;
}

//n 개의 배열에 x개만큼 채우기. 외우기 => Array(n).fill(x)
// function solution(x, n) {
//   return Array(n).fill(x).map((v, i) => (i + 1) * v)
// }

//32. 문자열 내 p와 y의 개수
// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

function solution(s){
  let answer = 0;
  let str = s.toLowerCase();

  for(let spell of str){
    if(spell === 'p'){
      answer++;
    } else if(spell === 'y'){
      answer--;
    }
  }

  return !Boolean(answer);
}

//reduce를 이용한 풀이
// function solution(s){
//   return [...s.toLowerCase()].reduce((acc, cur) => {
//     if(cur ==='p') return acc + 1;
//     else if(cur ==='y') return acc - 1;
//     return acc;
//   }, 0) ? false : true;
// }

//33.문자열을 정수로 바꾸기
// 문제 설명
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

function solution(str) {
  let answer = Number(str);
  return answer;
}

// 문자열에 사칙연산 하면 숫자열로 바뀌는 것을 이용
// function solution(str) {
//     let answer = str/1;
//     return answer;
// }

// function solution(str){
//     let answer = +str;
//     return answer;
// }

//34. 핸드폰 번호 가리기
// 문제 설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

function solution(phone_number) {
  let answer = [];
  let starLength = phone_number.length;

  for(let i = 0; i < starLength; i++){
      if(i < starLength - 4){
          answer.push('*');
      } else {
          answer.push(phone_number[i]);
      }
  }

  return answer.join('');
}

// repeat(), slice() 메소드 이용한 풀이
// function hide_numbers(s){
//     var result = "*".repeat(s.length - 4) + s.slice(-4);
//     return result;
//   }

