/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {};

let nums = [0, 1, 0, 3, 2, 3];

const memo = Array.from({ length: nums.length }).fill(1);

// 메모 값 정의하기
// memo[i] = nums[i] 번째까지의 배열의 길이.

// 점화식 세우기

// memo[0] = 1;
// memo[1] = 1;
// memo[2] = 1;
// >> 여기서 값이 올라가야 함
// memo[3] = 2;
// let i = 3;
// for (let j = 0; j < i; j++) {
//   if (nums[j] < nums[i]) {
//     memo[i] = memo[j] + 1;
//   }
// }

for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < i; j++) {
    if (nums[j] < nums[i]) {
      memo[i] = Math.max(memo[j] + 1, memo[i]);
    }
  }
}
console.log(memo);
