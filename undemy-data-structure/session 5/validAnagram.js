// frequency_counter 연습문제 1
// O(n)으로 중첩되지 않게 풀기.

let str1 = '';
let str2 = '';

function solution(str1, str2) {
    let str1obj = {};
    let str2obj = {};
    for(let x of str1) {
        if(str1obj.hasOwnProperty(x)) {
            str1obj[x]++;
        } else {
            str1obj[x] = 1;
        }
    }

    for(let x of str2) {
        if(str2obj.hasOwnProperty(x)) {
            str2obj[x]++;
        } else {
            str2obj[x] = 1;
        }
    }

    for(let key in str1obj) {
        if(str1obj[key] !== str2obj[key]) return false;
    }

    return true;
}


console.log(solution(str1, str2));

// function validAnagram(first, second) {
//     if (first.length !== second.length) {
//       return false;
//     }
  
//     const lookup = {};
  
//     for (let i = 0; i < first.length; i++) {
//       let letter = first[i];
//       // if letter exists, increment, otherwise set to 1
//       lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }
//     console.log(lookup)
  
//     for (let i = 0; i < second.length; i++) {
//       let letter = second[i];
//       // can't find letter or letter is zero then it's not an anagram
//       if (!lookup[letter]) {
//         return false;
//       } else {
//         lookup[letter] -= 1;
//       }
//     }
  
//     return true;
//   }
  
//   // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
//   validAnagram('anagrams', 'nagaramm')