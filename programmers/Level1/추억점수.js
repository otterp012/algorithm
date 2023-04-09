function solution(name, yearning, photo) {
  const map = new Map();
  name.forEach((item, index) => map.set(item, yearning[index]));

  return photo.map((item) =>
    item
      .map((s) => {
        if (map.has(s)) return map.get(s);
        return 0;
      })
      .reduce((acc, cur) => acc + cur),
  );
}
