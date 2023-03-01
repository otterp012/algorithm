const numbers = [6, 10, 2];

const answer = numbers
  .map(String)
  .sort((a, b) => b + a - (a + b))
  .join("");
console.log(answer);
