

//01. 두 수의 합
function solution1(num1, num2) {
  return num1 + num2;
}

//02. 두 수의 차
function solution2(num1, num2) {
  return num1 + num2;
}

//03. 두 수의 곱
function solution3(num1, num2) {
  return num1 * num2;
}

//04. 두 수의 나눗셈
function solution4(num1, num2) {
  let answer = parseInt((num1/num2) * 1000);
  return answer;
}

//05. 몫 구하기
function solution5(num1, num2) {
  let answer = parseInt(num1/num2);
  return answer;
}

//06. 숫자 비교하기
function solution6(num1, num2) {
  if (num1 === num2) {
    return 1;
  } else {
    return -1;
  }
}

//07. 나머지 구하기
function solution7(num1, num2){
  let answer = num1 % num2;
  return answer;
}

//08. 배열의 평균값
function solution8(numbers){
  let answer = 0;
  for(let i = 0; i < numbers.length; i++){
    answer += numbers[i];
  }
  let average = answer/numbers.length;
  return average;
}

//09. 나이 출력
function solution9(age){
  let answer = 2023 - age;
  return answer;
}

//10. 각도기
function solution10(angle) {
  if(angle < 90) {
    return 1;
  } else if (angle == 90) {
    return 2;
  } else if (angle < 180) {
    return 3;
  } else {
    return 4;
  }
}
