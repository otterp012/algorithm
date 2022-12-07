function solution(k, tangerine) {
  var answer = 0;
  const map = new Map();

  tangerine.forEach((value) => {
    if (!map.has(value)) map.set(value, 1);
    else map.set(value, map.get(value) + 1);
  });

  const items = [...map.entries()]
    .sort((a, b) => {
      return a[1] - b[1];
    })
    .map((item) => item[1]);

  let tmp = 0;

  while (tmp < k) {
    tmp += items.pop();
    answer += 1;
  }

  return answer;
}
