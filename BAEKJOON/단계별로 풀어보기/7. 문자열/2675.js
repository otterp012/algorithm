let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('example.txt').toString().split('\n');



for(let i = 1; i < input.length; i++) {
    let answer = '';
    
    let num = input[i].split(' ')[0];
    console.log(typeof num);
    let str = input[i].split(' ')[1];

    for(let j=0; j < str.length; j++) {

        for(let k=0; k < +num; k++) {
            answer += str[j];
        }
    }
    console.log(answer);
}

// TYPEERROR이 어디서 일어나는건지

// const num1 = input.shift();

// for (let i = 0; i < num1; i++) {
//     let answer = '';
    
//     const [num2, str] = input[i].split(" ");
    
//     for (let j = 0; j < str.length; j++) {
//         for (let c = 0; c < num2; c++) {
//             answer += str[j];
//   	}
//     }
    
//     console.log(answer);
// }
// 검색한 정답인데 크게 다른게 없는데... 왜 내건 틀린거지..?