const s = "}}}";

const rotate = (string) => {
  const remains = string.slice(1, string.length);
  const start = string[0];
  return remains + start;
};

const closeArr = ["]", "}", ")"];
const openArr = ["[", "{", "("];
const isValid = (string) => {
  const stack = [];
  if (closeArr.includes(string[0])) return false;
  for (let i = 0; i < string.length; i++) {
    if (openArr.includes(string[i])) stack.push(string[i]);

    if (string[i] === "]") {
      if (stack[stack.length - 1] === "[") stack.pop();
      else return false;
    }

    if (string[i] === "}") {
      if (stack[stack.length - 1] === "{") stack.pop();
      else return false;
    }

    if (string[i] === ")") {
      if (stack[stack.length - 1] === "(") stack.pop();
      else return false;
    }
  }
  if (stack.length) return false;
  return true;
};

let answer = 0;
let target = s;
for (let i = 0; i < s.length; i++) {
  const tmp = rotate(target);
  target = tmp;
  if (isValid(target)) answer++;
}

console.log(answer);

function solution(s) {
  const rotate = (string) => {
    const remains = string.slice(1, string.length);
    const start = string[0];
    return remains + start;
  };

  const closeArr = ["]", "}", ")"];
  const openArr = ["[", "{", "("];
  const isValid = (string) => {
    const stack = [];
    if (closeArr.includes(string[0])) return false;
    for (let i = 0; i < string.length; i++) {
      if (openArr.includes(string[i])) stack.push(string[i]);

      if (string[i] === "]") {
        if (stack[stack.length - 1] === "[") stack.pop();
        else return false;
      }

      if (string[i] === "}") {
        if (stack[stack.length - 1] === "{") stack.pop();
        else return false;
      }

      if (string[i] === ")") {
        if (stack[stack.length - 1] === "(") stack.pop();
        else return false;
      }
    }
    if (stack.length) return false;
    return true;
  };

  let answer = 0;
  let target = s;
  for (let i = 0; i < s.length; i++) {
    const tmp = rotate(target);
    target = tmp;
    if (isValid(target)) answer++;
  }

  return answer;
}
