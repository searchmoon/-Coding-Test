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
