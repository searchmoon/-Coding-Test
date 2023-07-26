// 21. 같은 숫자는 싫어
//
// 문제 설명
// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,
//   arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다. arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
//   배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

function solution(arr) {
  let answer = [];

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === arr[i+1]){

    } else {
      answer.push(arr[i]);
    }
  }

  return answer;
}

// 풀이2.
//   function solution(arr) {
//   return arr.filter((x,idx) => x !== arr[idx+1]);
// }

// 22. k번째 수
// 문제 설명
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
//   예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면 array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다. 2에서 나온 배열의 3번째 숫자는 5입니다.
//   배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

function solution(array, commands) {
  let answer = [];

  for(let i = 0; i<commands.length; i++){
    let list = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b)=> a-b);
    answer.push(list[commands[i][2]-1]);
  }

  return answer;
}

// 23. 문자열 내 p와 y의 개수
// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
//   예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

function solution(s){
  let str= s.toLowerCase();
  let count = 0;

  for(let i = 0; i <s.length; i++){
    if(str[i]==="p") count++;
    else if(str[i]=== "y") count--;
  }

  return count === 0 ? true : false;
}

// 24.나누어 떨어지는 숫자 배열
// 문제 설명
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
//   divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

function solution(arr, divisor) {
  let answer = [];

  for(let i = 0; i < arr.length; i++){
    if(arr[i] % divisor === 0){
      answer.push(arr[i]);
    }
  }

  if(answer.length === 0){
    answer.push(-1);
  }

  return answer.sort((a, b) => a - b);
}
//
// 풀이 2. filter를 이용한 풀이
// function solution(arr, divisor){
//   let answer = arr.filter(int => int%divisor === 0);
//   return answer.length === 0 ? [-1]: answer.sort((a, b) => a - b);
// }

//25. 최소 직사각형
// 문제 설명
// 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

//   아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.
//   명함 번호	가로 길이	세로 길이
// 1	60	50
// 2	30	70
// 3	60	30
// 4	80	40

// 가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 이때의 지갑 크기는 4000(=80 x 50)입니다.
//   모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

function solution(sizes) {
  let w = 0;
  let h = 0;

  for(let i = 0; i < sizes.length; i++){
    let tempW = Math.max(sizes[i][0], sizes[i][1])
    let tempH = Math.min(sizes[i][0], sizes[i][1])

    w = Math.max(w, tempW)
    h = Math.max(h, tempH)
  }

  return w*h;
}

//26. 문자열 내림차순으로 배치하기
// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
//   s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

function solution(s) {
  return s.split("").sort().reverse().join("");
}

//27. 나머지가 1이 되는 수 찾기
// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

function solution(n) {
  for(let i = 2; i < n; i++){
    if(n % i === 1){
      return i;
    }
  }
}


//28. 콜라츠 추측
// 문제 설명
// 1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될 때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.
//
// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 예를 들어, 주어진 수가 6이라면 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution을 완성해 주세요. 단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.

function solution(num) {
  let count = 0;

  while(num !== 1){
    if(num%2 === 0){
      num = num / 2;
    } else {
      num = num * 3 +1;
    }
    count ++;
  }

  if (count >= 500) {
    return -1;
  } else {
    return count;
  }
}



//29.조건에 맞게 수열 변환하기 3
// 문제 설명
// 정수 배열 arr와 자연수 k가 주어집니다.
// 만약 k가 홀수라면 arr의 모든 원소에 k를 곱하고, k가 짝수라면 arr의 모든 원소에 k를 더합니다.
// 이러한 변환을 마친 후의 arr를 return 하는 solution 함수를 완성해 주세요.

function solution(arr, k) {
  if(k % 2 === 1){
    answer = arr.map(num => num * k);
  } else if (k % 2 === 0) {
    answer = arr.map(num => num + k);
  }

  return answer;
}
// 삼항연산자를 이용한 간단한 풀이
// function solution(arr, k) {
// return arr.map((num) => k%2 ? num * k : num + k);
// }


//30. 정수 제곱근 판별
// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제곱급 구하기: Math.sqrt()
// 정수인지 확인하는 방법:
// Number.isInteger() 로 boolean 값을 판단. 또는 나머지 연산자 % 로 1을 나누어 값이 0인지 아닌지 확인하기.

function solution(n) {
  let answer = 0;
  let sqrt = Math.sqrt(n);

  if(sqrt % 1 === 0){
    answer = (sqrt + 1) ** 2;
  } else {
    answer = -1;
  }

  return answer;
}

