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