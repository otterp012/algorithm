let str1 = 'hello';
let str2 = 'hello world';

function isSubsequence(str1, str2) {

let pointer1 = 0;
let pointer2 = 0;

while(pointer1 < str1.length && pointer2 < str2.length) {

    if(str1[pointer1] === str2[pointer2]) {
        pointer1++;
        pointer2++;
    } else {
        pointer2++;
    }

    if(pointer1 === str1.length) {
        return true;
    }

    if(pointer2 === str2.length) {
        return false;
    }
}
}
