

function isPalindrome(str) {
    let arr = str.split('');
    let answer = '';
    let tmp = ''
    function stop(arr) {
        if(arr.length === 0) return;
        // base case

        if(arr.length > 0) {
            tmp = arr.pop();
            answer += tmp;
            // different input
        }
        stop(arr);
        // 여기가 재귀의 포인트
    }

    stop(arr);
    // 여기서는 재귀가 아닌 한번만 호출되는 것- 재귀의 시작점
    return answer === str

}

console.log(reverse('tacocat'));

