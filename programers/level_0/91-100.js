// 91. 글자 이어 붙여 문자열 만들기
// 문제 설명
// 문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다. my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, index_list) {
  let answer = '';

  for(let i = 0; i < index_list.length; i++){
    answer += my_string[index_list[i]];
  }

  return answer;
}

// forEach 사용한 풀이
// function solution(my_string, index_list) {
//     let answer = '';

// index_list.forEach(x => {
//   answer += my_string[x]
// });

//     return answer;
// }

// reduce 를 사용한 풀이

// function solution(my_string, index_list) {
//   return index_list.reduce((result, i) => result + my_string[i], '');
// }

// 92. 카운트 다운
// 문제 설명
// 정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(start, end_num) {
  let answer = [];
  for(i = start; end_num <= i; i--){
    answer.push(i);
  }
  return answer;
}

// 93.공백으로 구분하기 2
// 문제 설명
// 단어가 공백 한 개 이상으로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string) {
  let answer = my_string.split(' ').filter((item) => item);
  return answer;
}

// 94.뒤에서 5등 위로
// 문제 설명
// 정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  let answer = num_list.sort((a, b) => a - b).slice(5)
  return answer;
}
