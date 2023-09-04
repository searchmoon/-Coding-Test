//51. 숫자 문자열과 영단어
// 문제 설명
// 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.
// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

function solution(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let answer = s;

  for(let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}

//52. 직사각형 별찍기
// 문제 설명
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);

  const star = "*".repeat(a);

  for(let i = 0; i < b; i++){
    console.log(star);
  };
});

//53. 모의고사
// 문제 설명
// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

function solution(answers) {
  let answer = [];
  const s1 = [1, 2, 3, 4, 5];
  const s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (s1[i % s1.length] === answers[i]) {
      score[0]++;
    }
    if (s2[i % s2.length] === answers[i]) {
      score[1]++;
    }
    if (s3[i % s3.length] === answers[i]) {
      score[2]++;
    }
  }

  const max = Math.max(...score);
  for (let j = 0; j < score.length; j++) {
    if (score[j] === max) {
      answer.push(j + 1);
    }
  }

  return answer;
}

//54. 직사각형 좌표 구하기
//문제 설명
// 직사각형을 만드는 데 필요한 4개의 점 중 3개의 좌표가 주어질 때, 나머지 한 점의 좌표를 구하려고 합니다. 점 3개의 좌표가 들어있는 배열 v가 매개변수로 주어질 때, 직사각형을 만드는 데 필요한 나머지 한 점의 좌표를 return 하도록 solution 함수를 완성해주세요. 단, 직사각형의 각 변은 x축, y축에 평행하며, 반드시 직사각형을 만들 수 있는 경우만 입력으로 주어집니다.

// 제한사항
// v는 세 점의 좌표가 들어있는 2차원 배열입니다.
// v의 각 원소는 점의 좌표를 나타내며, 좌표는 [x축 좌표, y축 좌표] 순으로 주어집니다.
// 좌표값은 1 이상 10억 이하의 자연수입니다.
// 직사각형을 만드는 데 필요한 나머지 한 점의 좌표를 [x축 좌표, y축 좌표] 순으로 담아 return 해주세요.

// 입출력 예
// v	result
// [[1, 4], [3, 4], [3, 10]]	[1, 10]
// [[1, 1], [2, 2], [1, 2]]  	[2, 1]

function solution(v) {
  let answer = [];

  answer[0] = v[0][0] ^ v[1][0] ^ v[2][0];
  answer[1] = v[0][1] ^ v[1][1] ^ v[2][1];

  return answer;
}


