function solution(s, skip, index) {
  let answer = "";
  const isNotSkipped = (str) => {
    return !skip.includes(str);
  };

  const alpa = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 97),
  ).filter(isNotSkipped);

  for (const str of s) {
    const tmp = alpa.findIndex((s) => s === str) + index;
    const computed = tmp >= alpa.length ? tmp % alpa.length : tmp;
    answer += alpa[computed];
  }
  return answer;
}
