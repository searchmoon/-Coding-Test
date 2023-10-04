//71.n보다 커질 때까지 더하기
// 문제 설명
// 정수 배열 numbers와 정수 n이 매개변수로 주어집니다. numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.

function solution(numbers, n) {
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
    if (answer > n) {
      return answer;
    }
  }
}

// while 을 이용한 풀이
// function solution(numbers, n) {
//   let answer = 0;
//   let i = 0;
//   while(answer <= n) {
//       answer += numbers[i++]
//   }
//   return answer;
// }

//72. 길이에 따른 연산
// 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  let answer = 0;
  if (num_list.length >= 11) {
    answer = num_list.reduce((acc, crr) => acc + crr, 0);
  } else {
    answer = num_list.reduce((acc, crr) => acc * crr, 1);
  }
  return answer;
}

//73. 공배수
// 문제 설명
// 정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.

function solution(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}

//74.flag에 따라 다른 값 반환하기
// 문제 설명
// 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.

function solution(a, b, flag) {
  return flag ? a + b : a - b;
}

//75. 수 조작하기 1
// 문제 설명
// 정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.
//
// "w" : n이 1 커집니다.
// "s" : n이 1 작아집니다.
// "d" : n이 10 커집니다.
// "a" : n이 10 작아집니다.
// 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.

function solution(n, control) {
  let answer = n;

  for (let i = 0; i < control.length; i++) {
    if (control[i] === "w") {
      answer += 1;
    } else if (control[i] === "s") {
      answer -= 1;
    } else if (control[i] === "d") {
      answer += 10;
    } else if (control[i] === "a") {
      answer -= 10;
    }
  }

  return answer;
}
// for of, switch 문을 이용한 풀이
// function solution(n, control) {
//     let answer = n;
//     for(let v of control){
//         switch(v){
//             case 'w': answer ++; break;
//             case 's': answer --; break;
//             case 'd': answer += 10; break;
//             case 'a': answer -= 10; break;
//         }
//     }
//     return answer;
// }

//76. 소문자로 바꾸기
// 문제 설명
// 알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 소문자로 변환하여 return 하는 solution 함수를 완성해 주세요.

function solution(myString) {
  let answer = myString.toLowerCase();
  return answer;
}

//77.정수 찾기
// 문제 설명
// 정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
  let answer = 0;

  for (let i of num_list) {
    if (i === n) {
      answer = 1;
    }
  }

  return answer;
}

//result가 1 또는 0이기 때문에 boolean값을 Number로 변형해주는 풀이
// function solution(num_list, n) {
//   return Number(num_list.includes(n));
// }

// 아니면 이렇게 삼항연산자도 사용 가능
// return num_list.includes(n) ? 1 : 0;

//78.세균 증식
// 문제 설명
// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

function solution(n, t) {
  let answer = n;
  for (let i = 1; i <= t; i++) {
    answer *= 2;
  }
  return answer;
}

// Math.pow() 를 이용한 풀이
// function solution(n, t) {
//     return n * Math.pow(2,t);
// }

//79. 이어 붙인 수
// 문제 설명
// 정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  let answer = 0;
  let a = [];
  let b = [];

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2) {
      a.push(num_list[i]);
    } else {
      b.push(num_list[i]);
    }
    answer = +a.join("") + +b.join("");
    //parseInt나 Number 대신 앞에 + 붙여주면 숫자형으로 형변환 된다.
  }

  return answer;
}

//80.A 강조하기
// 문제 설명
// 문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.

function solution(myString) {
  let answer = myString.toLowerCase().replaceAll("a", "A");
  return answer;
}



