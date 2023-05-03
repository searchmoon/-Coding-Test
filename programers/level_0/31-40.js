//31.문자열을 정수로 변환하기
// 문제 설명
// 숫자로만 이루어진 문자열 n_str이 주어질 때, n_str을 정수로 변환하여 return하도록 solution 함수를 완성해주세요.

function solution(n_str) {
  return Number(n_str);
}

//32. 문자열 앞의 n글자
//문제 설명
//문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, n) {
  return my_string.slice(0,n);;
}

//33.첫 번째로 나오는 음수
// 문제 설명
// 정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.

function solution(num_list) {
  return num_list.findIndex(a => a < 0);
}

//34. 순서쌍의 개수
// 문제 설명
// 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  let answer = 0;
  for(let i = 0; i <= n; i++){
    if(n % i === 0){
      answer += 1;
    }
  }
  return answer;
}

//35. 중앙값 구하기
// 문제 설명
// 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
  return array.sort((a,b) => a-b)[Math.floor(array.length/2)];
}
