// 41.옷가게 할인 받기
// 문제 설명
// 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

function solution(price) {
  if (price >= 500000) {
    return Math.floor(price * 0.8);
  } else if (price >= 300000) {
    return Math.floor(price * 0.9);
  } else if (price >= 100000) {
    return Math.floor(price * 0.95);
  } else {
    return price
  }
}

// 42.문자열 곱하기
// 문제 설명
// 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, k) {
  let answer = '';
  for(let i = 0; i < k; i++){
    answer = answer.concat(my_string);
  }
  return answer;
}
//repeat 를 이용한 풀이
// function solution(my_string, k) {
//   return my_string.repeat(k);
// }

// 43. 잘라서 배열로 저장하기
// 문제 설명
// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
  const strArr = my_str.split('');
  let answer = [];
  while(strArr.length > 0){
    answer.push(strArr.splice(0, n).join(''));
  }
  return answer;
}

// 44. 자릿수 더하기
// 문제 설명
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

function solution(n) {
  let answer = 0;
  const numToArr = String(n).split('');
  numToArr.map(num => answer += parseInt(num));
  return answer;
}

//reduce 를 이용한 풀이
// function solution(n) {
  // return n.toString().split('').reduce((acc, crr) => acc += Number(crr), 0);
// }

// 45.제곱수 판별하기
// 문제 설명
// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}

// 46. 개미 군단
// 문제 설명
// 개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 예를 들어 체력 23의 여치를 사냥하려고 할 때, 일개미 23마리를 데리고 가도 되지만, 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다. 사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.

function solution(hp) {
  return Math.floor(hp/5) + Math.floor((hp%5)/3) + (hp%5)%3;
}

// function solution(hp) {
//     return ~~(hp/5) + ~~((hp%5)/3) + (hp%5)%3;
// }
// ~~ 는 Math.floor() 랑 같은역할. ~~ 가 조금 더 빠르다. 고 했는데 이 풀이에서는 Math.floor 가 더 빠르네.

// 47. 가위 바위 보
// 문제 설명
// 가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

function solution(rsp) {
  let answer = '';
  const rspObj = { 2: 0, 0: 5, 5: 2};
  answer = [...rsp].map(x => rspObj[x]).join('');
  return answer;
}

// 48. 숨어있는 숫자의 덧셈 (1)
// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let answer = 0;
  let arr = my_string.split('');
  arr.map(item => !isNaN(item) ? answer += Number(item) : 0)
  return answer;
}

// my_string.split('') 말고
// [...my_string] 으로 대체해줄 수 있다.

// 49.배열의 유사도
// 문제 설명
// 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(s1, s2) {
  let same = s1.filter(item => s2.includes(item));
  return same.length;
}
