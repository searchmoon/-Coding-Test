//11. 서울에서 김서방 찾기

//문제 설명
//String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

function solution(seoul) {
  for (let i = 0; seoul.length > i; i++) {
    if (seoul[i] === "Kim") {
      return`김서방은 ${i}에 있다`;
    }
  }
}

// 풀이2.
//   function solution(seoul) {
//     let idx = seoul.indexOf("Kim");
//     return `김서방은 ${idx}에 있다`;
//   }

// 12. 두 개 뽑아서 더하기
//
// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  const answer = [];

  for(let i = 0; i < numbers.length - 1; i++){
    for(let j = i+1; j < numbers.length; j++){
      const sum = numbers[i] + numbers[j];

      if(answer.indexOf(sum) < 0){
        answer.push(sum);
      }
    }
  }

  answer.sort((a,b)=>a-b);
  return answer;
}

// 13. 음양더하기
// 문제 설명
// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

function solution(absolutes, signs) {
  let answer = 0;

  for(let i = 0; i < absolutes.length; i++){
    if(signs[i] === true) {
        answer += absolutes[i];
    } else {
        answer -= absolutes[i];
    }
  }

  return answer;
}

// 풀이 2. reduce를 이용한 풀이
// function solution(absolutes, signs) {
//     return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
// }

// 14. x만큼 간격이 있는 n개의 숫자
// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

function solution(x, n) {
  let answer = [];

  for (let i = 1; n >= i; i++){
      answer.push(x * i);
  }

  return answer;
}
// 15. 문자열 다루기 기본
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

function solution(s) {
  let answer = true;

  if(s.length === 4 || s.length === 6) {
      for(let i = 0; i < s.length; i++) {
          if(isNaN(s[i])){
              return false;
          }
          return answer;
      }
  } else {
      return false;
  }
}

// 16. 이상한 문자 만들기
// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

function solution(s) {
  let answer = '';
  const arr = s.split(' ');

  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
          if (j % 2 === 0) {
              answer += arr[i][j].toUpperCase();
          } else {
              answer += arr[i][j].toLowerCase();
          }
      }

      if (i < arr.length - 1) {
          answer += ' ';
      }
  }

  return answer;
}
// 17.정수 제곱근 판별
// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다. n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

function solution(n) {
  let answer = 0;
  let sqrt = Math.sqrt(n);

  if(sqrt % 1 !== 0) {
      answer = -1;
  } else {
      answer = Math.pow(sqrt+1,2);
  }

  return answer;
}

// 18.시저 암호
// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

function solution(s, n) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  let answer = '';

  for(let i = 0; i < s.length; i++) {
    if(s[i] === ' ') {
      answer += ' ';
    }

    const upperOrLower = upper.includes(s[i]) ? upper : lower;
    let index = upperOrLower.indexOf(s[i]) + n;

    if(index >= upperOrLower.length) index -= upperOrLower.length;
    answer += upperOrLower[index]
  }

  return answer;
}

// 19.제일 작은수 제거하기
// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

function solution(arr) {
  if (arr.length === 1) return [-1];

  let i = 0;
  for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] > arr[j]) i = j;
  }
  arr.splice(i, 1);
  return arr;
}

// 20.자연수 뒤집어 배열로 만들기
// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

function solution(n) {
  return n.toString().split("").map(x => Number(x)).reverse();
}
