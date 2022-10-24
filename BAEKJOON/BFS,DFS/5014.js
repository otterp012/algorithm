const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const [max, start, target, ...buttons] = input.map(Number);

let answer = -1;
const queue = [start];
const visited = {};
visited[start] = 1;
buttons[1] *= -1;

while (queue.length) {
  const current = queue.shift();
  if (current === target) break;

  for (let i = 0; i < buttons.length; i++) {
    const next = current + buttons[i];

    if (next < 1) continue;
    if (next > max) continue;
    if (visited[next]) continue;
    visited[next] = visited[current] + 1;
    queue.push(next);
  }
}

if (visited[target]) {
  answer = visited[target];
} else {
  answer = "use the stairs";
}
console.log(answer);
