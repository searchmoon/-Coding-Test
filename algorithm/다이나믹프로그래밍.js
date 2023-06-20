
// 다이나믹 프로그래밍(DP): 하나의 문제는 단 한번만 풀게 하도록 하는 알고리즘

// 에시 1. 피보나치수열 계산하기

function fibonacci(n) {
  // 계산된 결과를 저장할 배열
  const memo = [];

  // 피보나치 수열을 계산하는 재귀함수
  function fibHelper(n) {
    //이미 계산된 결과가 있다면 그 값을 반환
    if(memo[n] !== undefined) {
      return memo[n];
    }

    // 기저 사례: n이 0이나 1일 때
    if(n === 0 || n === 1){
      return n;
    }

    // 계산 결과를 저장하고 반환
    memo[n] = fibHelper(n - 1) + fibHelper(n - 2);
    return memo[n];
  }

  return fibHelper(n);
}

// 예시: 피보나치 수열의 10번째 항 출력
console.log(fibonacci(10)); // 55
