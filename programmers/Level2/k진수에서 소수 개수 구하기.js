const n = 437674;
const k = 3;

// n을 k 진수로 변환한다.

function solution(n, k) {
  const isPrime = (num) => {
    if (num < 2) return false;
    // 0을 포함하기위해
    if (num === 2) return true;
    for (let i = 2; i < Math.sqrt(num) + 1; i++) {
      if (num % i === 0) return false;
    }

    return true;
  };

  const answer = n
    .toString(k)
    .split("0")
    .map(Number)
    .map(isPrime)
    .filter(Boolean).length;

  return answer;
}

// 211020101011
// 0으로 Split해준다.
// '211', '2', '1', '1', '11',
// 숫자로 변환한다.
// IsPrime 함수를 적용하고,
// true 인것들의 Length를 구한다.
console.log(answer);
