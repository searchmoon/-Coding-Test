
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

//54. 문자열 정수의 합
// 문제 설명
// 한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(num_str) {
  let answer = 0;

  for(let i = 0; i <num_str.length; i++){
    answer += Number(num_str[i]);
  }

  return answer;
}
// reduce() 를 이용한 풀이
// const solution = num_str => [...num_str].reduce((acc, crr) => acc + Number(crr), 0);

//55. n의 배수
// 문제 설명
// 정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num, n) {
  return num % n ? 0 : 1;
}

//56. 문자열의 뒤의 n글자
// 문제 설명
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, n) {
  return my_string.slice(my_string.length - n, my_string.length);
}

//57. 홀짝 구분하기
// 문제 설명
// 자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  n = Number(input[0]);
  const result = n % 2 ? 'odd' : 'even';
  console.log(`${n} is ${result}`);
});

//58. 공백으로 구분하기 1
// 문제 설명
// 단어가 공백 한 개로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string) {
  let answer = my_string.split(' ');
  return answer;
}

//59. 문자열로 변환
// 문제 설명
// 정수 n이 주어질 때, n을 문자열로 변환하여 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  let answer = n.toString();
  return answer;
}

// function solution(n) {
//     return n+"";
// }

// 문자열의 생성자 String()
// function solution(n) {
//     return String(n);
// }

//60. rny_string
// 문제 설명
// 'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 문자열 rny_string이 주어질 때, rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(rny_string) {
  let answer = rny_string.replaceAll('m', 'rn');
  return answer;
}
