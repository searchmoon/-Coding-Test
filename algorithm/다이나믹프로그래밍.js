
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


// 예시 2.  n이 정수일 때, 3* n의 크기의 벽을 2*1, 1*2 크기의 타일로 채우는 경우의 수를 구하기

function countTileCombinations(n) {
  // 벽의 크기가 0이거나 음수인 경우 경우의 수는 0입니다.
  if (n <= 0) {
    return 0;
  }

  // dp 배열을 초기화합니다.
  const dp = new Array(n + 1).fill(0);

  // 벽의 크기가 0일 때는 경우의 수가 1입니다.
  dp[0] = 1;

  // 벽의 크기가 1일 때는 경우의 수가 0입니다.
  dp[1] = 0;

  // 벽의 크기가 2일 때는 경우의 수가 3입니다.
  dp[2] = 3;

  // 벽의 크기가 3 이상일 때 경우의 수를 계산합니다.
  for (let i = 4; i <= n; i += 2) {
    dp[i] = dp[i - 2] * 3; // 2*1 크기의 타일을 추가하는 경우
    for (let j = 4; j <= i; j += 2) {
      dp[i] += dp[i - j] * 2; // 1*2 크기의 타일을 추가하는 경우
    }
  }

  return dp[n];
}

// 예시로 n = 6인 경우의 경우의 수를 출력합니다.
console.log(countTileCombinations(6)); //41
console.log(countTileCombinations(4)); //11
console.log(countTileCombinations(5)); //0 3을 제외하고 홀수일 경우에는 경우의수는 0이다.
console.log(countTileCombinations(7)); //0

