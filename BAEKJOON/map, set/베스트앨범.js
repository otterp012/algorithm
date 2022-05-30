// programmers

function solution(genres, plays) {
  var answer = [];
  const map = {};

  genres.forEach((v, i) => {
    if (map[v]) {
      map[v].sum = map[v].sum + plays[i];
    } else {
      map[v] = { sum: plays[i], id: [] };
    }
    map[v].id.push([i, plays[i]]);
  });

  const sortedMap = Object.values(map)
    .sort((a, b) => b.sum - a.sum)
    .map((v) => (v.id = v.id.sort((a, b) => b[1] - a[1])))
    .flat();

  for (let genres of sortedMap) {
    console.log(genres);
  }
  console.log(sortedMap);
  return answer;
}

const a = ["classic", "pop", "classic", "classic", "pop"];
const b = [500, 600, 150, 800, 2500];
solution(a, b);
