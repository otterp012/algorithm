// const N = 5;

// // 최솟값이 8보다 크면 -1을 return 합니다.
// // N을 8개까지만 쓰는 모든 경우의 수 만들기.

// const Lists = Array.from({ length: 9 }, () => []);

// Lists[1] = [5];

// N을 한번만 쓸때의 경우의 수는 무조건 [5] 한가지.

// N을 두번 쓰면 ?
// 5 + 5 , 5 - 5, 5 * 5, 5 / 5, 55
// 5가지 경우의 수 존재. 이를 모두 확인하려면,

// for (let i = 0; i < Lists[1].length; i++) {
//   Lists[2].push(Number(Lists[1][i]) + 5);
//   Lists[2].push(Lists[1][i] - 5);
//   Lists[2].push(Lists[1][i] * 5);
//   Lists[2].push(Lists[1][i] / 5);
// }

// Lists[2].push(55);
// // 이런 식으로 해주면 되지 않을까?

// for (let i = 0; i < Lists[2].length; i++) {
//   Lists[3].push(Number(Lists[2][i]) + 5);
//   Lists[3].push(Lists[2][i] - 5);
//   Lists[3].push(Lists[2][i] * 5);
//   Lists[3].push(Lists[2][i] / 5);
// }

// Lists[3].push(555);

// console.log(Lists);
// [
//     15,   5, 50,   2,   5, -5,   0,
//      0,  30, 20, 125,   5,  6,  -4,
//      5, 0.2, 60,  50, 275, 11, 555
//   ],

const N = 5;

const DP = Array.from({ length: 9 }, (_, index) => [
  N.toString().repeat(index) * 1,
]);
const number = 12;

console.log(DP);

// DP[2] 는 DP[1], DP[1] 의 조합.

for (let i = 2; i <= 8; i++) {
  // DP[i]는, N이 I 번 사용되는 모든 경우의 수를 말함.
  for (let j = 1; j < i; j++) {
    // j는 Dp[i]의 이전 요소들만 체크 해야함.

    // j = 1일때, dp[2]의 값을 가져 와야함.
    for (const a of DP[j]) {
      for (const b of DP[i - j]) {
        // dp[3]이 목표일때, dp[3 -1] 해서 DP[2] 의 값을 가져올 수 있음.
        DP[i].push(a + b);
        DP[i].push(a - b);
        DP[i].push(a * b);
        if (b !== 0) DP[i].push(Math.floor(a / b));
      }
    }
  }
  console.log(DP[i].includes(12), i);
}

function solution(N, number) {
  if (N === number) return 1;
  const DP = Array.from({ length: 9 }, (_, index) => [
    N.toString().repeat(index) * 1,
  ]);

  let answer = -1;
  for (let i = 2; i <= 8; i++) {
    // DP[i]는, N이 I 번 사용되는 모든 경우의 수를 말함.
    for (let j = 1; j < i; j++) {
      // j는 Dp[i]의 이전 요소들만 체크 해야함.

      // j = 1일때, dp[2]의 값을 가져 와야함.
      for (const a of DP[j]) {
        for (const b of DP[i - j]) {
          // dp[3]이 목표일때, dp[3 -1] 해서 DP[2] 의 값을 가져올 수 있음.
          DP[i].push(a + b);
          DP[i].push(a - b);
          DP[i].push(a * b);
          if (b !== 0) DP[i].push(Math.floor(a / b));
        }
      }
    }
    if (DP[i].includes(number)) {
      answer = i;
      break;
    }
  }

  return answer;
}
