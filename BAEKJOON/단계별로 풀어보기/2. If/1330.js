
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');


+input[0] > +input[1] ? console.log('>') : +input[0] < +input[1] ? console.log('<') : console.log('==')