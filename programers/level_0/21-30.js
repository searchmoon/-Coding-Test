//21. 문자열 뒤집기
// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  return my_string.split('').reverse().join('');
}

// 스프레드 연산자를 이용한 풀이

// 예를 들면 const my_string = 'justdoit' 이라면
//[...my_string]
// 결과가 ['j', 'u', 's', 't', 'd', 'o', 'i', 't'] 이렇게 나온다.

//22.최댓값 만들기 (1)
// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}

//23.특정 문자 제거하기
// 문제 설명
// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string, letter) {
  let answer = '';
  for(let i = 0; i < my_string.length; i++){
    if(my_string[i] !== letter){
      answer += my_string[i];
    };
  }
  return answer;
}

// split(), join() 을 이용한 방법
// function solution(my_string, letter) {
//    const answer = my_string.split(letter).join('')
//    return answer;
// }

// replaceAll() 을 이용한 방법
// function solution(my_string, letter){
//     return my_string.replaceAll(letter, '');
// }

