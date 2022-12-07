const fees = [180, 5000, 10, 600];
const records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];

const getTime = (a, b) => {
  const [h, m] = a.split(":").map(Number);
  const [aftH, aftM] = b.split(":").map(Number);

  return (aftH - h) * 60 + aftM - m;
};

const tempMap = new Map();
const timeMpa = {};
records.forEach((record) => {
  const [time, num, con] = record.split(" ");

  if (!tempMap.has(num)) {
    tempMap.set(num, time);
  } else {
    const recordTime = getTime(tempMap.get(num), time);
    tempMap.delete(num);

    if (!timeMpa[num]) timeMpa[num] = recordTime;
    else timeMpa[num] += recordTime;
  }
});

tempMap.forEach((value, key) => {
  const recordTime = getTime(value, "23:59");
  if (!timeMpa[key]) timeMpa[key] = recordTime;
  else timeMpa[key] += recordTime;
});

const arr = Object.entries(timeMpa)
  .sort((a, b) => {
    return Number(a[0]) - Number(b[0]);
  })
  .map((record) => {
    const time = record[1];
    if (time <= fees[0]) return fees[1];
    return fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3];
  });
console.log(arr);
