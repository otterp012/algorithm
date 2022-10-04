function solution(skill, skill_trees) {
  var answer = 0;
  const map = new Map(skill.split("").map((v, i) => [v, i]));

  const trees = skill_trees.map((tree) => {
    tree = tree.split("").map((str) => {
      if (map.has(str)) return map.get(str);
      else return "";
    });
    return tree.filter((v) => v.length !== 0);
  });

  const check = (tree) => {
    for (let i = 0; i < tree.length; i++) {
      if (tree[i] !== i) return false;
    }
    return true;
  };
  for (let i = 0; i < trees.length; i++) {
    if (check(trees[i])) answer++;
  }
  return answer;
}
