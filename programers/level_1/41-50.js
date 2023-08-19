//41.행렬의 덧셈
// 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

function solution(arr1, arr2) {
    let answer = [];

    for(let i = 0; i < arr1.length; i++){
        let sum = [];

        for(let j = 0; j < arr1[i].length; j++){
            sum.push(arr1[i][j] + arr2[i][j]);
        }

        answer.push(sum);
    }
    return answer;
}

//42. 3진법 뒤집기
// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(n) {
    let answer = 0;
    let reverse = n.toString(3).split('').reverse().join('');

    answer = parseInt(reverse, 3);

    return answer;
}

//43.수박수박수박수박수박수?
// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

function solution(n) {
    let answer = [];
    let watermelon = '수박';

    for(let i = 0; i < n; i++){
        answer.push(watermelon[i % 2]);
    }

    return answer.join('');
}

//44.크기가 작은 부분문자열
// 문제 설명
// 숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.
// 예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.

function solution(t, p) {
    let answer = 0;
    let pLength = p.length;

    for(let i = 0; i <= t.length - p.length; i++){
        if(Number(t.slice(i, i + pLength)) <= p){
            answer ++;
        }
    }

    return answer;
}
