function solution(people, limit) {
  var answer = 0;
  const map = people.sort((a, b) => a - b);
  let lt = 0;
  let rt = map.length - 1;

  while (lt <= rt) {
    if (lt === rt) {
      answer++;
      break;
    }
    if (map[rt] + map[lt] <= limit) {
      lt++;
      rt--;
    } else {
      rt--;
    }

    answer++;
  }
  return answer;
}

// shift, pop 안쓰고 index만 사용하는 슬라이딩윈도우
