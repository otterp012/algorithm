// programmers

const numbers = "1231";

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const set = new Set();

const visited = {};
const dfs = (str, len) => {
  if (len === numbers.length) {
    isPrime(+str) && set.add(+str);
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(str + numbers[i], len + 1);
      dfs(str, len + 1);
      visited[i] = false;
    }
  }
};

dfs("", 0);
console.log(set);
console.log(set.size);
