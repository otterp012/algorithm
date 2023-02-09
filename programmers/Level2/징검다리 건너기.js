const stones = [2, 4, 5, 3, 2, 1, 4, 2, 5, 1];
const k = 3;

// 뭔가 DP처럼 모이지만, 이분탐색인 문제.
// 엄청 유명하다고 하다.
// 예전에 이분탐색으로 풀었던 기억이 떠올라 이분탐색으로 바로 접근.

// k는 건너 뛸 수 있는 징검다리의 숫자이다.

let left = 1;
let right = Number.MAX_SAFE_INTEGER;

// while (left < right) {
//   let mid = (left + right) / 2;
// }

const isValid = (n) => {
  let cnt = 0;

  for (const stone of stones) {
    if (stone < n) {
      cnt += 1;
      // stone이 N보다 작다면, Cnt += 1
    }
    if (cnt === k) return false;
    // cnt가 K에 도달하면 건널 수 없음
    if (stone >= n) cnt = 0;
    // 연속되는 경우가 아니게 되므로, cnt = 0으로 초기화
  }
  return true;
};

let answer = 0;
while (left <= right) {
  let mid = (left + right) / 2;

  if (isValid(mid)) {
    // 유효하다면, 더 건널 수 있다는 뜻임 아직
    left = mid + 1;

    answer = Math.max(answer, mid);
  } else {
    // 유효하지 않다면, 이 수보다 더는 못건너겠다는 거임
    right = mid - 1;
  }
}

console.log(answer);

function solution(stones, k) {
  let left = 1;
  let right = Number.MAX_SAFE_INTEGER;

  const isValid = (n) => {
    let cnt = 0;

    for (const stone of stones) {
      if (stone < n) {
        cnt += 1;
        // stone이 N보다 작다면, Cnt += 1
      }
      if (cnt === k) return false;
      // cnt가 K에 도달하면 건널 수 없음
      if (stone >= n) cnt = 0;
      // 연속되는 경우가 아니게 되므로, cnt = 0으로 초기화
    }
    return true;
  };

  let answer = 0;
  while (left <= right) {
    let mid = (left + right) / 2;

    if (isValid(mid)) {
      // 유효하다면, 더 건널 수 있다는 뜻임 아직
      left = mid + 1;

      answer = Math.max(answer, mid);
    } else {
      // 유효하지 않다면, 이 수보다 더는 못건너겠다는 거임
      right = mid - 1;
    }
  }

  return answer;
}
