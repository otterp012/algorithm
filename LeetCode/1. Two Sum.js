
var twoSum = function(nums, target) {
    let answer;
    for(let i=0; i<nums.length-1; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if( (nums[i] + nums[j]) === target ) {
                answer = [i, j];
            }
        }
    }
    
    return answer;
};

let nums = [2, 7, 11, 15];
let target = 9;

// 이렇게 bruteforce로 풀면 굉장히 쉬운 문제인데 -> 시간복잡도를 O(N)으로 낮추는 방법에 대해 고민해보기.
