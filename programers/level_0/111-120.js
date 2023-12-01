//111.배열의 원소 삭제하기
// 문제 설명
// 정수 배열 arr과 delete_list가 있습니다. arr의 원소 중 delete_list의 원소를 모두 삭제하고 남은 원소들은 기존의 arr에 있던 순서를 유지한 배열을 return 하는 solution 함수를 작성해 주세요.

//filter, includes 를 이용한 풀이
function solution(arr, delete_list) {
  const answer = arr.filter((element) => !delete_list.includes(element));
  return answer;
}

//112. 진료 순서 정하기
// 문제 설명
// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(emergency) {
  //원본 배열의 불변성을 유지하기 위해, slice()로 새로운 배열을 생성한 후, sort() 해주기. sort는 원본 배열을 변경시키기 때문
  const sortArr = [...emergency].sort((a, b) => b - a);
  const answer = emergency.map((value) => sortArr.indexOf(value) + 1);

  return answer;
}

// 원본 배열을 변경하지 않고 새로운 배열을 생성하는 방법:
// arr.slice(), 전개연산자 [...arr], arr.concat(), Array.from(arr) 등

//113. 부분 문자열 이어 붙여 문자열 만들기
// 문제 설명
// 길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가 매개변수로 주어집니다. parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다. 각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_strings, parts) {
  let answer = "";
  for (let i = 0; i < my_strings.length; i++) {
    answer += my_strings[i].slice(parts[i][0], parts[i][1] + 1);
  }
  return answer;
}
