//111.배열의 원소 삭제하기
// 문제 설명
// 정수 배열 arr과 delete_list가 있습니다. arr의 원소 중 delete_list의 원소를 모두 삭제하고 남은 원소들은 기존의 arr에 있던 순서를 유지한 배열을 return 하는 solution 함수를 작성해 주세요.

//filter, includes 를 이용한 풀이
function solution(arr, delete_list) {
  const answer = arr.filter((element) => !delete_list.includes(element));
  return answer;
}
