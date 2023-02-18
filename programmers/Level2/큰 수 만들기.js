const number = "4321";
let k = 1;

// number에서 k개 만큼의 숫자를 제거한다.
// 19, 24, 92, 94 ... 등의 숫자의 배열이 존재할 수 있다.
// 그 중 가장 큰 숫자를 추출한다.

// 완전탐색으로 풀기 --- 시간초과 날 것 같음. number는 1_000_000 자릿수까지 될 수있음.
// K는 1이상 Number 자릿수 미만 -> 999_999 까지 가능.
// ---> 가장 간단하지만 시간초과 날 것으로 예상.

// 덧붙여, 숫자의 순서는 바꿀 수 없음.
// 1231234 => 3234 가 되는 이유.

// DP?

// 우리가 구해야 하는 숫자의 길이는, number.length - k

// 접근 방법에 대해 검색해보고 stack으로 풀 수 있다는 힌트를 얻었다.
function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    while (true) {
      if (k <= 0) break;
      // 더이상 뺄 수가 없다. 빼는 수는 정해져있음
      if (!stack.length) break;
      // 이걸 안하면 stack.pop() 오류나니까 추가
      if (stack[stack.length - 1] >= number[i]) break;
      // stack의 마지막수가, number[i] 보다 크다면 진행할 필요가 없다.
      stack.pop();
      k -= 1;
    }
    stack.push(number[i]);
  }
  stack.splice(stack.length - k, k);
  return stack.join("");
}
