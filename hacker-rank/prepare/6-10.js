//6. Mini-Max
// question: https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  arr.sort((a,b) => a-b);
  let mini = 0;
  let max = 0;
  for(let i = 0; i < arr.length-1; i++){
    mini += arr[i];
  }
  for(let j = 1; j < arr.length; j++){
    max += arr[j];
  }
  let result = `${mini} ${max}`;
  console.log(result);
}
