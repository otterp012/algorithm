let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let zeroFloor = new Array(14).fill(null).map((item,index) => item = index+1);

let arr = [];
arr.push(zeroFloor);

for(let i=0; i<13; i++) {
    arr.push(new Array(14).fill(null));
    arr[i+1][0] = 1;
}

for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr.length; j++) {
        if(!arr[i][j]) {
            arr[i][j] = arr[i][j-1] + arr[i-1][j];
        }
    }
}

for(let i = 1; i < input.length - 1; ){
    let floor = Number(input[i]);
    let roomNum = Number(input[i+1])-1;
    i+=2; 
    console.log(arr[floor][roomNum]);
}

//

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let number = Number(input[0]);
// input.shift();

// let k;
// let n;
// let array = [];

// for(let i = 0; i < number*2 ; i=i+2){
//     k = Number(input[i]);
//     n = Number(input[i+1]);
//     array.push([k,n]);
// }

// let floor = [];
// let sum = 0;
// for(let i = 0; i < array.length; i++){
//     //k층 n호
//     k = array[i][0];
//     n = array[i][1];
//     for(let j = 0; j <= k; j++){ //0층부터 k층까지
//         floor[j] = [];
//         for(let m = 1; m <= n; m++){ // 1호부터 n호까지
//             if(j === 0){ //0층이라면
//                 floor[j].push(m);
//             }else{ // j가 0이 아닐 때 
//                 sum += floor[j-1][m-1];
//                 floor[j].push(sum);
//                 if(m === n){
//                     sum = 0;
//                 }
//             }
//         }
//     }
//     console.log(floor[k][n-1]);
// }