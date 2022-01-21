let input = require('fs').readFileSync('/dev/sdint').toString().trim().split('\n').map(items => items.split(' ').map(item => Number(item)));
input.pop();

function check(arr) {
    arr = arr.map(item => item **2);

    if(arr[0] === arr[1] + arr[2]) return 'right';
    else if(arr[1] === arr[0] + arr[2]) return 'right';
    else if(arr[2] === arr[0] + arr[1]) return 'right';
    else return 'wrong'

}

input.forEach((item) => console.log(check(item)))