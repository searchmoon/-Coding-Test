//101. 홀수 vs 짝수
//문제 설명
//정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.

function solution(num_list) {
  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (i % 2 === 0) {
      evenSum += num_list[i];
    } else {
      oddSum += num_list[i];
    }
  }

  return Math.max(oddSum, evenSum);
}

//102. 배열 비교하기
// 문제 설명
// 이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.

// 두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
// 배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고, 같다면 같습니다.
// 두 정수 배열 arr1과 arr2가 주어질 때, 위에서 정의한 배열의 대소관계에 대하여 arr2가 크다면 -1, arr1이 크다면 1, 두 배열이 같다면 0을 return 하는 solution 함수를 작성해 주세요.

function solution(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return arr1.length > arr2.length ? 1 : -1;
  }

  const sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
  const sum2 = arr2.reduce((acc, cur) => acc + cur, 0);

  return sum1 > sum2 ? 1 : sum1 < sum2 ? -1 : 0;
}

//103. 특별한 이차원 배열 2
// 문제 설명
// n × n 크기의 이차원 배열 arr이 매개변수로 주어질 때, arr이 다음을 만족하면 1을 아니라면 0을 return 하는 solution 함수를 작성해 주세요.
// 0 ≤ i, j < n인 정수 i, j에 대하여 arr[i][j] = arr[j][i]

function solution(arr) {
  let answer = 1;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i][j] !== arr[j][i]) {
        answer = 0;
      }
    }
  }

  return answer;
}

//104. 원하는 문자열 찾기
// 문제 설명
// 알파벳으로 이루어진 문자열 myString과 pat이 주어집니다. myString의 연속된 부분 문자열 중 pat이 존재하면 1을 그렇지 않으면 0을 return 하는 solution 함수를 완성해 주세요.

// 단, 알파벳 대문자와 소문자는 구분하지 않습니다.

function solution(myString, pat) {
  return myString.toUpperCase().includes(pat.toUpperCase()) ? 1 : 0;
}

// 105. 5명씩
// 문제 설명
// 최대 5명씩 탑승가능한 놀이기구를 타기 위해 줄을 서있는 사람들의 이름이 담긴 문자열 리스트 names가 주어질 때, 앞에서 부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 담은 리스트를 return하도록 solution 함수를 완성해주세요. 마지막 그룹이 5명이 되지 않더라도 가장 앞에 있는 사람의 이름을 포함합니다.

function solution(names) {
  let answer = [];

  for (let i = 0; i < names.length; i += 5) {
    answer.push(names[i]);
  }

  return answer;
}

// filter를 사용한 방법.
// 이 방법이 더 효율적일것이라고 생각했는데, 시간복잡도가 조금 더 들더라.
// function solution(names) {
//     let answer = names.filter((item, idx) => (idx%5) === 0);
//     return answer;
// }

//106. 배열에서 문자열 대소문자 변환하기
// 문제 설명
// 문자열 배열 strArr가 주어집니다. 모든 원소가 알파벳으로만 이루어져 있을 때, 배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로, 짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 반환하는 solution 함수를 완성해 주세요.

function solution(strArr) {
  let answer = strArr.map((str, i) => (i % 2 === 0 ? str.toLowerCase() : str.toUpperCase()));
  return answer;
}

//107. 주사위 게임 1
// 문제 설명
// 1부터 6까지 숫자가 적힌 주사위가 두 개 있습니다. 두 주사위를 굴렸을 때 나온 숫자를 각각 a, b라고 했을 때 얻는 점수는 다음과 같습니다.

// a와 b가 모두 홀수라면 a2 + b2 점을 얻습니다.
// a와 b 중 하나만 홀수라면 2 × (a + b) 점을 얻습니다.
// a와 b 모두 홀수가 아니라면 |a - b| 점을 얻습니다.
// 두 정수 a와 b가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

function solution(a, b) {
  let answer = 0;

  if (a % 2 === 1 && b % 2 === 1) {
    answer = a ** 2 + b ** 2;
  } else if (a % 2 === 1 || b % 2 === 1) {
    answer = 2 * (a + b);
  } else {
    answer = Math.abs(a - b);
  }

  return answer;
}

//108. 더 크게 합치기
// 문제 설명
// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.
// 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.

function solution(a, b) {
  let aAddB = Number(a.toString() + b.toString());
  let bAddA = Number(b.toString() + a.toString());

  return aAddB > bAddA ? aAddB : bAddA;
}

// Math.max, Number(`${a}${b}`) 사용한 방법
function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}

//109. 접미사인지 확인하기
// 문제 설명
// 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string과 is_suffix가 주어질 때, is_suffix가 my_string의 접미사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, is_suffix) {
  let answer = 0;
  let strLength = my_string.length;

  for (let i = 0; i < strLength; i++) {
    if (my_string.slice(i, strLength) == is_suffix) {
      return (answer = 1);
    }
  }

  return answer;
}

//endsWith 메서드 사용한 방법

function solution(my_string, is_suffix) {
  let answer = my_string.endsWith(is_suffix) ? 1 : 0;

  return answer;
}
