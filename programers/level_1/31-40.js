//31.x만큼 간격이 있는 n개의 숫자
// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

function solution(x, n) {
  let answer = [];

  for(let i = 1; i <= n; i++){
    answer.push(x * i);
  }

  return answer;
}

//n 개의 배열에 x개만큼 채우기. 외우기 => Array(n).fill(x)
// function solution(x, n) {
//   return Array(n).fill(x).map((v, i) => (i + 1) * v)
// }

//32. 문자열 내 p와 y의 개수
// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

function solution(s){
  let answer = 0;
  let str = s.toLowerCase();

  for(let spell of str){
    if(spell === 'p'){
      answer++;
    } else if(spell === 'y'){
      answer--;
    }
  }

  return !Boolean(answer);
}

//reduce를 이용한 풀이
// function solution(s){
//   return [...s.toLowerCase()].reduce((acc, cur) => {
//     if(cur ==='p') return acc + 1;
//     else if(cur ==='y') return acc - 1;
//     return acc;
//   }, 0) ? false : true;
// }

//33.문자열을 정수로 바꾸기
// 문제 설명
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

function solution(str) {
  let answer = Number(str);
  return answer;
}

// 문자열에 사칙연산 하면 숫자열로 바뀌는 것을 이용
// function solution(str) {
//     let answer = str/1;
//     return answer;
// }

// function solution(str){
//     let answer = +str;
//     return answer;
// }

//34. 핸드폰 번호 가리기
// 문제 설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

function solution(phone_number) {
  let answer = [];
  let starLength = phone_number.length;

  for(let i = 0; i < starLength; i++){
      if(i < starLength - 4){
          answer.push('*');
      } else {
          answer.push(phone_number[i]);
      }
  }

  return answer.join('');
}

// repeat(), slice() 메소드 이용한 풀이
// function hide_numbers(s){
//     var result = "*".repeat(s.length - 4) + s.slice(-4);
//     return result;
//   }

//35. 제일 작은 수 제거하기
// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

function solution(arr) {
  let result = [];

  if(arr.length === 1) {
    return [-1];
  } else {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    result = arr;
  }

  return result;
}

//36.하샤드 수
// 문제 설명
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

function solution(x) {
  let sum = 0;
  let arr = String(x).split('');

  for(let i = 0; i < arr.length; i++){
    sum += Number(arr[i]);
  }
  return (x % sum === 0) ? true : false;
  // 삼항연산자를 사용하지않아도 조건문에 대한 결과가 나오기때문에 return (x % sum === 0) 만 써줘도된다.
}

//37. 내적
// 문제 설명
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

function solution(a, b) {
  let sum = 0;
  for(let i = 0; i < a.length; i++){
    sum += a[i] * b[i];
  }
  return sum;
}

// reduce를 이용한 풀이. 근데 위에꺼가 더 빠르다.
// let sum = a.reduce((acc,_,idx) => acc += a[idx]*b[idx], 0);
// return sum;

//38.문자열 다루기 기본
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;

  for (let i = 0; i < s.length; i++) {
    if (isNaN(Number(s[i]))) return false;
  }

  return true;
}

//39. 부족한 금액 계산하기
// 문제 설명
// 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
// 단, 금액이 부족하지 않으면 0을 return 하세요.

function solution(price, money, count) {
  let needMoney = 0;

  for(let i = 1; i <= count; i++){
    needMoney += i*price;
  }

  return needMoney > money ? needMoney - money : 0;
}
