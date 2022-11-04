const gems = [
  "DIA",
  "RUBY",
  "RUBY",
  "DIA",
  "DIA",
  "EMERALD",
  "SAPPHIRE",
  "DIA",
];

function solution(gems) {
  const gemVarietyCounts = new Set(gems).size;
  // 유니트한 보석의 갯수
  const gemMap = new Map();
  const gemLengths = [];
  gems.forEach((gem, i) => {
    //만든 Map객체에 동일한 보석이 있을 경우 이전 것을 지우고 새롭게 들어오는 보석의 인덱스를 추가
    // gemMap.delete(gem);
    gemMap.set(gem, i);
    // 유니크한 보석들이 모두 담겨졌을 경우 그 경우를 gemlengths에 저장한다.
    if (gemMap.size === gemVarietyCounts) {
      gemLengths.push([gemMap.values().next().value + 1, i + 1]);
      console.log(gemMap.values().next());
    }
  });
  console.log(gemMap);
}

solution(gems);
