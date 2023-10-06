
//81. 홀짝에 따라 다른 값 반환하기
//문제 설명
//양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

function solution(n) {
    let answer = 0;
    
    if(n % 2 === 1){
        for(let i = 1; i <= n; i += 2){
            answer = (n+1)/2*((n + 1)/2) ;
        }        
    } else {
        for(let i = 2; i <= n; i += 2){
            answer += i ** 2;
        }
    }
    
    return answer;
}

//시간복잡도를 줄이는 코드
function solution(n) {
    if(n%2===1)
      return  ((n+1)/2)**2;
    else
      return   n*(n+1)*(n+2)/6;
}

// n이 홀수일 때는 자연수 거듭 제곱의 합 공식
// n이 짝수일 때는 등차수열의 합 공식. 기본 등차수열의 합 공식은 n*(n+1)/2 인데, 이건 제곱의 합이라 이렇게 된단다.

//82. 조건 문자열
// 문제 설명
// 문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.

// 두 수가 n과 m이라면
// ">", "=" : n >= m
// "<", "=" : n <= m
// ">", "!" : n > m
// "<", "!" : n < m
// 두 문자열 ineq와 eq가 주어집니다. ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.

function solution(ineq, eq, n, m) {
    let answer = 0;

    let str = (n + ineq + eq + m).replace("!","");
    
    let func = new Function('return ' + str);
    answer = func() ? 1 : 0;
    return answer;
}
//eval(str) 이렇게 해서 연산을 할까 했지만, eval함수는 보안상에 좋지 않으므로 사용을 지양한다.

//이렇게 푸는 방법도 있다.

// function solution(ineq, eq, n, m) {
//     if(ineq === '>') {
//         if(eq === '=') return Number(n >= m);
//         else return Number(n > m);
//     }
//     else {
//         if(eq === '=') return  Number(n <= m);
//         else return  Number(n < m);
//     }
// }

//83. 꼬리 문자열
// 문제 설명
// 문자열들이 담긴 리스트가 주어졌을 때, 모든 문자열들을 순서대로 합친 문자열을 꼬리 문자열이라고 합니다. 꼬리 문자열을 만들 때 특정 문자열을 포함한 문자열은 제외시키려고 합니다. 예를 들어 문자열 리스트 ["abc", "def", "ghi"]가 있고 문자열 "ef"를 포함한 문자열은 제외하고 꼬리 문자열을 만들면 "abcghi"가 됩니다.

// 문자열 리스트 str_list와 제외하려는 문자열 ex가 주어질 때, str_list에서 ex를 포함한 문자열을 제외하고 만든 꼬리 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(str_list, ex) {
  let answer = "";

  for (let i = 0; i < str_list.length; i++) {
    if (!str_list[i].includes(ex)) {
      answer += str_list[i];
    }
  }
  return answer;
}
