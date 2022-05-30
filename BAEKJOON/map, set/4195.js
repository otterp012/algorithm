const input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");

const [startTime, endTime, streamingEndTime] = input
  .shift()
  .split(" ")
  .map((v) => (v = +v.split(":").join("")));

const map = input.map((v) => {
  let [time, id] = v.split(" ");
  time = +time.split(":").join("");
  return (v = [time, id]);
});

const inSet = new Set();
const outSet = new Set();
for (let i = 0; i < map.length; i++) {
  if (map[i][0] <= startTime) inSet.add(map[i][1]);

  if (map[i][0] >= endTime && map[i][0] <= streamingEndTime)
    outSet.add(map[i][1]);
}

inSet.forEach((v) => {
  if (!outSet.has(v)) inSet.delete(v);
});

console.log(inSet.size);
