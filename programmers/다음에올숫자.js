function solution(common) {
  var answer = 0;
  const isPlus =
    common[2] - common[1] === common[1] - common[0]
      ? common[1] - common[0]
      : false;
  const isMulti =
    common[2] / common[1] === common[1] / common[0]
      ? common[1] / common[0]
      : false;

  if (isPlus) answer = common[common.length - 1] + isPlus;
  else answer = common[common.length - 1] * isMulti;
  return answer;
}
