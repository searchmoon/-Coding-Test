
//51.인덱스 바꾸기
// 문제 설명
// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, num1, num2) {
  let answer = [...my_string];
  answer.splice(num1, 1, my_string[num2])
  answer.splice(num2, 1, my_string[num1]);
  return answer.join('');
}

//구조분해할당을 이용한 풀이
// function solution(my_string, num1, num2) {
//     my_string = my_string.split('');
//     [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
//     return my_string.join('');
// }

//52. 주사위의 개수
// 문제 설명
// 머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다. 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(box, n){
  return box.reduce((acc, crr)=> acc *= Math.floor(crr/n), 1)
}

// 구조분해 할당을 이용한 풀이
// 배열의 인덱스를 이용해서 풀어도 되지만, 이렇게 하면, 가로, 세로, 높이가 직관적으로 보여 더 좋은것 같다.
// function solution(box, n) {
//     let [width, length, height] = box;
//     return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
// }

//53.문자열 정렬하기 (1)
// 문제 설명
// 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

function solution (my_string) {
  return my_string.split('').map(item =>Number(item)).filter(item=>!isNaN(item)).sort((a,b) => a-b)
}


