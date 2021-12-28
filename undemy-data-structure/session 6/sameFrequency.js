
function sameFrequency(num1, num2) {

    let num1obj = {};
    for(let num of String(num1)) {
        if(!(num1obj.hasOwnProperty(num))) {
            num1obj[num] = 1;
        } else {
            num1obj[num]++;
        }
    }

    for(let num of String(num2)) {
        if(num1obj[num]) {
            num1obj[num]--;
        } else return false
    }

    return true;
}
console.log(sameFrequency(34,14));