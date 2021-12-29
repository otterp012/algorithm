function recursiveRange(num) {
    if(num <= 0) return 0;
    return num + Number(recursiveRange(num-1));
}

console.log(recursiveRange(6));