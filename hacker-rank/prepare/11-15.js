//11. Number Line Jumps
// https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
  let result = 'NO';

  if (v1 <= v2) {
    return result;
  }

  while(x1 <= x2) {
    x1 += v1;
    x2 += v2;

    if (x1 === x2) {
      result = 'YES';
      break;
    }
  }

  return result;
}

// 삼항연산자를 이용한 풀이
// function kangaroo(x1, v1, x2, v2) {
//   return v2 < v1 && (x2 - x1) % (v1 - v2) == 0 ? "YES" : "NO";
// }

//12. string에서 "AWS" 를 제외한 문자열 반환하기.
// example:
// AWAWSSG => AWSG
// AWSG => G

function getFinalString(s) {
  const stack = [];

  for(let c of s){
    let length = stack.length;

    if(length >= 2 && c === "S" && stack[length - 1] === "W" && stack[length-2] === "A"){
      stack.pop();
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  if(stack.length === 0){
    return -1;
  }
  return stack.join("");
}

//13. 매개변수의 인자로 들어오는 number의 한 숫자만 바꿔서 최대값 - 최소값 결과 반환하기
//example:
// num = 10018
// 한 숫자만 바꿔서 최대값 만들기: 1을 9로 바꿔서 최대값 90098.
// 한 숫자만 바꿔서 최소값 만들기: 1을 0으로 바꾸는 것이 불가능하기 때문에 8을 0으로 바꿔서 10010으로 바꾸기
// num 의 값이 만약 80014 라던지 맨 앞자리 수가 1이 아닌 경우면, 8을 1로 바꿔주기.
// 1일경우에는 제일 앞자리 수를 제외한 제일 높은 자리수의 숫자를 0으로 바꿔주기.

function findRange(num){
  let maxNum = getMaxNum(num);
  let minNum = getMinNum(num);

  return maxNum - minNum;
}

function getMaxNum(num){
  let numArr = num.toString().split('');
  let tempNum = "";

  for(let num of numArr){
    if(num !== "9"){
      tempNum = num;
      break;
    }
  }
  if(tempNum === ""){
    return num;
  }

  for (let i = 0; i < numArr.length; i++) {
    if(tempNum === numArr[i]) {
      numArr[i] = "9";
    }
  }

  return numArr.join("");
}

function getMinNum(num){
  let numArr = num.toString().split('');
  let tempNum = "";
  let flag = true;

  if(numArr[0] !== "1"){
    tempNum = numArr[0];
    flag = false;
  }

  if(flag){
    for(let i = 1; i < numArr.length; i++){
      if(numArr[i] !== "0" && numArr[i] !== "1") {
        tempNum = numArr[i];
        break;
      }
    }
  }

  for (let i = 0; i < numArr.length; i++) {
    if(tempNum === numArr[i]){
      if(!flag){
        numArr[i] = "1";
      } else {
        numArr[i] = "0";
      }
    }
  }

  return numArr.join("");
}

