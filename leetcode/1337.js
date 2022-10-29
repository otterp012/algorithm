/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
// var kWeakestRows = function (mat, k) {
//   return mat
//     .map((single) => single.filter((v) => !v))
//     .map((t) => t.length)
//     .map((v, i) => {
//       return {
//         index: i,
//         value: v,
//       };
//     })
//     .sort((a, b) => b.value - a.value)
//     .slice(0, k)
//     .map((v) => v.index);
// };

// 역시 개느림

let mat = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];
const k = 3;

const binarySearch = (arr = [0, 0, 0, 0, 0]) => {
  let start = 0;
  let end = arr.length - 1;
  let tmp = 0;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === 1) {
      tmp = mid + 1;
      start = mid + 1;
    } else {
      tmp = mid;
      end = mid - 1;
    }
  }
  return tmp;
};

mat = mat
  .map((v, i) => {
    return {
      index: i,
      value: binarySearch(v),
    };
  })
  .sort((a, b) => a.value - b.value)
  .slice(0, k)
  .map((v) => v.index);
console.log(mat);
