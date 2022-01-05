let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

input.forEach((items) => {
    let sum = 0;
    let cnt = 0;
    items.split(' ').forEach((item, index) => {
        if(index !==0) sum += (item/items[0]);
    })
    items.split(' ').forEach((item) => {
        if(item > sum) cnt++;
    })
    console.log(((cnt / items[0]) * 100).toFixed(3) + '%');
})

//
// const c = Number(input[0]);


// for(let i=1; i<=c; i++){
//     let sum = 0;
//     let count = 0;
    
//     scores = input[i].split(' ').map(Number);
//     const n = scores[0];
    
//     for(let j=1; j<=n; j++){
//         sum += scores[j];
//     }
//     const avg = sum/n;
//     for(let k=1; k<=n; k++){
//        if(scores[k]>avg){
//            count++;
//        }
//    }
//     console.log(((count/n)*100).toFixed(3)+"%");
// }
