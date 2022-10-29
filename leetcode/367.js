/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  return binarySearch(num);
};

const binarySearch = (num) => {
  if (num === 1) return true;
  let start = 1;
  let end = num / 2;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (mid * mid === num) return true;
    if (mid * mid < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
};
