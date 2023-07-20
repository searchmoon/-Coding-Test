//1.평균구하기
//문제 설명 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요. 제한사항 arr은 길이 1 이상, 100
//이하인 배열입니다. arr의 원소는 -10,000 이상 10,000 이하인 정수입니다. 입출력 예 arr return [1,2,3,4] 2.5 [5,5] 5

//풀이 1
  function solution(arr) {
      let answer = 0;
      for(let i = 0; i < arr.length; i++){
          answer += arr[i];
      }
      return answer/arr.length;
  }
//풀이 2
//  function solution(arr) {
//  return arr.reduce((a,b) => a + b)/arr.length;
//  }

//2. 완주하지 못한 선수

//문제 설명
//수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
//마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

  function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for(let i = 0; i < participant.length; i++) {
    if(participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

//3. 짝수와 홀수
//문제 설명
//정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

  function solution(num) {
  if(num % 2 === 0) {
    return("Even");
  } else {
    return("Odd");
  }
}

//풀이2.
//   function solution (num) {
//   return (num % 2 === 0 ? "Even" :"Odd");
// }

//4. 약수의 합
//문제 설명
//정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

function solution(n) {
  let sum = 0;
  for(let i = 1; i >= n; i++){
    if(n % i === 0){
      sum += i;
    }
  }
  return sum;
}

//5.수박수박수박수
//문제설명
//길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

  function solution(n) {
  let answer = '';

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      answer += '수';
    } else {
      answer += '박';
    }
  }
  return answer;
}

// 6.문자열을 정수로 바꾸기
// 문제 설명
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

  function solution (s) {
  return Number(s);
}

// 7.가운데 글자 가져오기
// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

  function solution(s) {
  let answer = '';

  if (s.length % 2 == 0) {
    answer = s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    answer = s[Math.floor(s.length/2)]; //반내림
  }
  return answer;
}
// 8. 두 정수 사이의 합
// 문제 설명
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
//   예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

  function solution(a, b) {
  let answer = 0;
  let num = [];
  if (a === b) {
    answer = a;
  } else {
    num.push(a,b);
    num.sort((a,b)=>a-b);
    for (let i=num[0]; i<num[1]+1; i++) {
      answer += i
    }
  }

  return answer;
}

// 풀이 2. 가우스 계산법이라고도 불리는 등차수열의 합을 구하는 방법.
//   두 항의 차가 일정한 등차수열의 합은 첫 항과 마지막 항을 더한 뒤 항의 개수를 곱하고 2로 나눈 값이 됩니다.
//   function solution(a, b) {
//   return (a + b) * (Math.abs(a -b) + 1) /2;
// }
//
// 풀이 3.
// function solution(a, b) {
//   let sum = 0;
//   for(let i = Math.min(a, b); i <= Math.max(a, b); i++){
//     sum += i;
//   }
//   return sum;
// }

// 9. 자릿수 더하기
// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
//   예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

function solution(n) {
  let answer = 0;
  let str = String(n);

  for (let i = 0; i < str.length; i++) {
    answer += parseInt(str[i]);
  }
  return answer;
}

// 10. 핸드폰 번호 가리기
// 문제 설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

  function solution(phone_number) {
  let answer = phone_number.length - 4;
  return '*'.repeat(answer) + phone_number.substring(answer);
}
