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

//24.머쓱이보다 키 큰 사람
// 문제 설명
// 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

// function solution(array, height) {
//     let answer = 0;
//     const taller = array.filter(hgt => hgt > height);
//     for(let i = 0; i < taller.length; i++){
//         answer += 1;
//     }
//     return answer;
// }

// answer 에 1씩 더해서 값을 return 해도 되지만,
// for문을 돌리지 않고 그냥 length를 return 하는게 더 빠른방법이다.
function solution(array, height) {
  return array.filter(hgt => hgt > height).length;
}

//25.아이스 아메리카노
// 문제 설명
// 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}

// Math.floor 대신 parseInt를 쓸 수 도 있다. 양수의 경우에는 값이 똑같이 나온다.

//26.피자 나눠 먹기 (3)
// 문제 설명
// 머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

function solution(slice, n) {
  return Math.ceil(n / slice);
}

//27. 피자 나눠 먹기 (1)
// 문제 설명
// 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

function solution(n) {
  return Math.ceil(n / 7);
}

//28.모음 제거
// 문제 설명
// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  return my_string.replace(/[aeiou]/g,'');
}

//29.편지
// 문제 설명
// 머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.

function solution(message) {
  return message.length*2;
}

//30.삼각형의 완성조건 (1)
// 문제 설명
// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
//
// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(sides) {
  const arr = sides.sort((a,b) => a-b);
  if(arr[0] + arr[1] <= arr[2]){
    return 2;
  }else {
    return 1;
  }
}

//sort 로 정렬한다음에, 0, 1번쨰의 합이 2번이 같거나 작으면 2를 리턴
// 삼항연산자를 사용한 풀이

// function solution(sides) {
//     const arr = sides.sort((a,b) => a-b);
//     return arr[0] + arr[1] <= arr[2] ? 2: 1;
// }
