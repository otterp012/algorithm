const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const [N, R, C] = input.map(Number);
const func = (n, r, c) => {
  if (n === 0) return 0;
  const half = 2 ** (n - 1);

  if (r < half && c < half) return func(n - 1, r, c);
  if (r < half && c >= half) return half * half + func(n - 1, r, c - half);
  if (r >= half && c < half) return 2 * half * half + func(n - 1, r - half, c);
  if (r >= half && c >= half)
    return 3 * half * half + func(n - 1, r - half, c - half);
};

console.log(func(N, R, C));
