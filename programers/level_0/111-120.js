//111.배열의 원소 삭제하기
// 문제 설명
// 정수 배열 arr과 delete_list가 있습니다. arr의 원소 중 delete_list의 원소를 모두 삭제하고 남은 원소들은 기존의 arr에 있던 순서를 유지한 배열을 return 하는 solution 함수를 작성해 주세요.

//filter, includes 를 이용한 풀이
function solution(arr, delete_list) {
  const answer = arr.filter((element) => !delete_list.includes(element));
  return answer;
}

//112. 진료 순서 정하기
// 문제 설명
// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(emergency) {
  //원본 배열의 불변성을 유지하기 위해, slice()로 새로운 배열을 생성한 후, sort() 해주기. sort는 원본 배열을 변경시키기 때문
  const sortArr = [...emergency].sort((a, b) => b - a);
  const answer = emergency.map((value) => sortArr.indexOf(value) + 1);

  return answer;
}

// 원본 배열을 변경하지 않고 새로운 배열을 생성하는 방법:
// arr.slice(), 전개연산자 [...arr], arr.concat(), Array.from(arr) 등

//113. 부분 문자열 이어 붙여 문자열 만들기
// 문제 설명
// 길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가 매개변수로 주어집니다. parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다. 각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_strings, parts) {
  let answer = "";
  for (let i = 0; i < my_strings.length; i++) {
    answer += my_strings[i].slice(parts[i][0], parts[i][1] + 1);
  }
  return answer;
}

//114. 배열의 길이에 따라 다른 연산하기
// 문제 설명
// 정수 배열 arr과 정수 n이 매개변수로 주어집니다. arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을, arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(arr, n) {
  const answer = [];
  const isOddArr = arr.length % 2 === 1;
  for (let i = 0; i < arr.length; i++) {
    let isOddIdx = i % 2;
    if ((isOddArr && !isOddIdx) || (!isOddArr && isOddIdx)) {
      answer.push(arr[i] + n);
    } else {
      answer.push(arr[i]);
    }
  }
  return answer;
}

//map 을 사용한 깔끔하고 간단한 방식.
const solution = (arr, n) => 
  arr.map((num, idx) => (arr.length % 2 !== idx % 2 
  ? num + n 
  : num
));

//115. x 사이의 개수
// 문제 설명
// 문자열 myString이 주어집니다. myString을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ myString의 길이 ≤ 100,000
// myString은 알파벳 소문자로 이루어진 문자열입니다.

function solution(myString) {
  let answer = myString.split("x").map((item) => item.length);
  return answer;
}

//116. 두 수의 연산값 비교하기
// 문제 설명
// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.

// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 2 * a * b 중 더 큰 값을 return하는 solution 함수를 완성해 주세요.

// 단, a ⊕ b와 2 * a * b가 같으면 a ⊕ b를 return 합니다.

function solution(a, b) {
  let answer = 0;
  const attachNum = String(a) + String(b);
  answer = 2 * a * b > attachNum ? 2 * a * b : Number(attachNum);
  return answer;
}
//string 으로 변환할때, String(a) a.toString(),a+"" 이렇게 하는 다양한 방법이 있다.

// 117. 최댓값 만들기 (2)
// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  const arrLength = numbers.length;

  numbers.sort((a, b) => a - b);
  //정렬해서 맨앞 두개 곱한값과 맨뒤 두개 곱한값중에 최대값
  return Math.max(numbers[arrLength - 1] * numbers[arrLength - 2], numbers[0] * numbers[1]);
}

// 118.가까운 1 찾기
// 문제 설명
// 정수 배열 arr가 주어집니다. 이때 arr의 원소는 1 또는 0입니다. 정수 idx가 주어졌을 때, idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환하는 solution 함수를 완성해 주세요.

// 단, 만약 그러한 인덱스가 없다면 -1을 반환합니다.

function solution(arr, idx) {
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) {
      return i;
    }
  }
  return -1;
}