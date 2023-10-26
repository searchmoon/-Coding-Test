//81. 홀짝에 따라 다른 값 반환하기
//문제 설명
//양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

function solution(n) {
  let answer = 0;

  if (n % 2 === 1) {
    for (let i = 1; i <= n; i += 2) {
      answer = ((n + 1) / 2) * ((n + 1) / 2);
    }
  } else {
    for (let i = 2; i <= n; i += 2) {
      answer += i ** 2;
    }
  }

  return answer;
}

//시간복잡도를 줄이는 코드
function solution(n) {
  if (n % 2 === 1) return ((n + 1) / 2) ** 2;
  else return (n * (n + 1) * (n + 2)) / 6;
}

// n이 홀수일 때는 자연수 거듭 제곱의 합 공식
// n이 짝수일 때는 등차수열의 합 공식. 기본 등차수열의 합 공식은 n*(n+1)/2 인데, 이건 제곱의 합이라 이렇게 된단다.

//82. 조건 문자열
// 문제 설명
// 문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.

// 두 수가 n과 m이라면
// ">", "=" : n >= m
// "<", "=" : n <= m
// ">", "!" : n > m
// "<", "!" : n < m
// 두 문자열 ineq와 eq가 주어집니다. ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.

function solution(ineq, eq, n, m) {
  let answer = 0;

  let str = (n + ineq + eq + m).replace("!", "");

  let func = new Function("return " + str);
  answer = func() ? 1 : 0;
  return answer;
}
//eval(str) 이렇게 해서 연산을 할까 했지만, eval함수는 보안상에 좋지 않으므로 사용을 지양한다.

//이렇게 푸는 방법도 있다.

// function solution(ineq, eq, n, m) {
//     if(ineq === '>') {
//         if(eq === '=') return Number(n >= m);
//         else return Number(n > m);
//     }
//     else {
//         if(eq === '=') return  Number(n <= m);
//         else return  Number(n < m);
//     }
// }

//83. 꼬리 문자열
// 문제 설명
// 문자열들이 담긴 리스트가 주어졌을 때, 모든 문자열들을 순서대로 합친 문자열을 꼬리 문자열이라고 합니다. 꼬리 문자열을 만들 때 특정 문자열을 포함한 문자열은 제외시키려고 합니다. 예를 들어 문자열 리스트 ["abc", "def", "ghi"]가 있고 문자열 "ef"를 포함한 문자열은 제외하고 꼬리 문자열을 만들면 "abcghi"가 됩니다.

// 문자열 리스트 str_list와 제외하려는 문자열 ex가 주어질 때, str_list에서 ex를 포함한 문자열을 제외하고 만든 꼬리 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(str_list, ex) {
  let answer = "";

  for (let i = 0; i < str_list.length; i++) {
    if (!str_list[i].includes(ex)) {
      answer += str_list[i];
    }
  }
  return answer;
}

//84.ad 제거하기
// 문제 설명
// 문자열 배열 strArr가 주어집니다. 배열 내의 문자열 중 "ad"라는 부분 문자열을 포함하고 있는 모든 문자열을 제거하고 남은 문자열을 순서를 유지하여 배열로 return 하는 solution 함수를 완성해 주세요.

function solution(strArr) {
  let answer = [];

  for (let item of strArr) {
    if (!item.includes("ad")) {
      answer.push(item);
    }
  }

  return answer;
}

//85. 가장 큰 수 찾기
// 문제 설명
// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}

//86. 부분 문자열인지 확인하기
// 문제 설명
// 부분 문자열이란 문자열에서 연속된 일부분에 해당하는 문자열을 의미합니다. 예를 들어, 문자열 "ana", "ban", "anana", "banana", "n"는 모두 문자열 "banana"의 부분 문자열이지만, "aaa", "bnana", "wxyz"는 모두 "banana"의 부분 문자열이 아닙니다.
// 문자열 my_string과 target이 매개변수로 주어질 때, target이 문자열 my_string의 부분 문자열이라면 1을, 아니라면 0을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, target) {
  let answer = my_string.includes(target) ? 1 : 0;
  return answer;
}

//87. 조건에 맞게 수열 변환하기 1
// 문제 설명
// 정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.


function solution(arr) {
  return arr.map(a => {
    if(a >= 50 && a % 2 ===0) return a/2
    if(a < 50 && a % 2 === 1) return a*2
    return a
  })
}

//88. n개 간격의 원소들
// 문제 설명
// 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
  let answer = [];

  for(let i = 0; i < num_list.length; i += n){
    answer.push(num_list[i]);
  }
  return answer;
}

// filter를 이용한 풀이
// function solution(num_list, n) {
//     return num_list.filter((_, index) => index % n === 0)
// }

//89. l로 만들기
// 문제 설명
// 알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.

function solution(myString) {
  const result = [];

  for (let i = 0; i < myString.length; i++) {
    result.push(myString[i] < 'l' ? 'l' : myString[i]);
  }

  return result.join('');
}

// map 을 이용한 풀이
// function solution(myString) {
//   return [...myString].map((v) => v < 'l' ? 'l' : v).join('');
// }

//정규표현식, replace를 이용한 풀이
// const solution = myString => myString.replace(/[a-k]/g,'l')

//90.n 번째 원소부터
// 문제 설명
// 정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
  let answer = num_list.slice(n-1);
  return answer;
}
