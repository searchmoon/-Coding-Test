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

