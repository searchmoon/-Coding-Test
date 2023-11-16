// 91. 글자 이어 붙여 문자열 만들기
// 문제 설명
// 문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다. my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, index_list) {
  let answer = "";

  for (let i = 0; i < index_list.length; i++) {
    answer += my_string[index_list[i]];
  }

  return answer;
}

// forEach 사용한 풀이
// function solution(my_string, index_list) {
//     let answer = '';

// index_list.forEach(x => {
//   answer += my_string[x]
// });

//     return answer;
// }

// reduce 를 사용한 풀이

// function solution(my_string, index_list) {
//   return index_list.reduce((result, i) => result + my_string[i], '');
// }

// 92. 카운트 다운
// 문제 설명
// 정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(start, end_num) {
  let answer = [];
  for (i = start; end_num <= i; i--) {
    answer.push(i);
  }
  return answer;
}

// 93.공백으로 구분하기 2
// 문제 설명
// 단어가 공백 한 개 이상으로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string) {
  let answer = my_string.split(" ").filter((item) => item);
  return answer;
}

// 94.뒤에서 5등 위로
// 문제 설명
// 정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  let answer = num_list.sort((a, b) => a - b).slice(5);
  return answer;
}

//94. 뒤에서 5등까지
// 문제 설명
// 정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  let answer = num_list.sort((a, b) => a - b).slice(0, 5);
  return answer;
}

//95.특정한 문자를 대문자로 바꾸기
// 문제 설명
// 영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때, my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, alp) {
  return [...my_string].map((word) => (word === alp ? word.toUpperCase() : word)).join("");
}

// replaceAll 을 이용한 풀이
// function solution(my_string, alp) {
//     return my_string.replaceAll(alp, alp.toUpperCase());
// }

//96. 배열의 원소만큼 추가하기
// 문제 설명
// 아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 양의 정수 배열 arr가 매개변수로 주어질 때, arr의 앞에서부터 차례대로 원소를 보면서 원소가 a라면 X의 맨 뒤에 a를 a번 추가하는 일을 반복한 뒤의 배열 X를 return 하는 solution 함수를 작성해 주세요.

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// 조금 더 간단한 for문
// function solution(arr) {
//   const answer = [];
//
//   for (const num of arr) {
//     for (let i = 0; i < num; i++) {
//       answer.push(num);
//     }
//   }
//
//   return answer;
// }

// reduce() 를 이용한 풀이
// function solution(arr) {
//   return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
// }

//97.0 떼기
// 문제 설명
// 정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(n_str) {
  let answer = String(Number(n_str));
  return answer;
}

// 98. 대문자와 소문자
// 문제 설명
// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let answer = "";
  let arr = [...my_string];
  for (let spell of arr) {
    if (spell.toUpperCase() === spell) {
      answer += spell.toLowerCase();
    } else {
      answer += spell.toUpperCase();
    }
  }
  return answer;
}

// 99. n의 배수 고르기
// 문제 설명
// 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n, numlist) {
  let answer = [];
  for (let num of numlist) {
    if (num % n === 0) {
      answer.push(num);
    }
  }
  return answer;
}

//filter 를 이용한 풀이

// function solution(n, numlist) {
//   return numlist.filter((num) => num % n === 0);
//}
