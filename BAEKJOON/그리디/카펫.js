// programmers

// 10, 2
// 가로 세로
// 가로는 세로보다 같거나 크다

// 가로의 최대 길이

function solution(brown, yellow) {
  let total = brown + yellow;

  for (let col = 1; col < total; col++) {
    let row = total / col;
    if ((col - 2) * (row - 2) === yellow) {
      if (row >= col) {
        return [row, col];
      }
    }
  }
}
