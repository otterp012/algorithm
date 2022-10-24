function solution(s) {
  var answer = -1;

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    if (stack.length >= 2) {
      if (stack[stack.length - 1] === stack[stack.length - 2]) {
        stack.pop();
        stack.pop();
      }
    }
  }

  return stack.length ? 0 : 1;
}
