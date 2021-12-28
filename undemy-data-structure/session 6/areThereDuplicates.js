
function areThereDuplicates() {
    let arr = [...arguments];
    let obj = {};

    arr.forEach((item) => {
        if(!(obj.hasOwnProperty(item))) obj[item] = 1;
        else obj[item]++;
    })
    return Object.values(obj).includes(2);
}


console.log(areThereDuplicates('a','b','c','a'));