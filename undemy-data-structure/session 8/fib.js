
function fib(num) {
    let arr = [];
    let cnt = 1;
    while(cnt <= num) {
        if(arr.length < 2) {
            arr.push(1);
        }
    
        if(arr.length >= 2) {
            arr.push(arr[cnt-1] + arr[cnt-2]);
        }
        cnt++;
    }

    return arr[arr.length-2];
}


function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
