// let head = [1, 1, 2];
// head.next = [1, 2];
// head.next.next = [2];
// head.val = 1
// head.next.val = 1
// head.next.next.val = 1;

// 배열에 속지말자.. 
// head {
//     val:0 , next : {
//         ...
//     };
// }
// SLL의 이런 구조로 되어 있음.

// let temp;
// while(head) {
//     if(head.val = null) break;
//     if(head.val = head.next.val) {
//         temp = head.next;
//         head.next = null;
//         // 값이 같으면, 현재 head.next는 null로 만들어 연결을 끊어주고
//         head = temp;
//         // head는 temp에 저장해 두었던, head.next 값으로 지정해줌
//     } else {
//         head = head.next;
//     }
// }

// // 값이 같으면, 연결을 끊어야함.

// var deleteDuplicates = function(head) {
//     let temp;
//     while(head) {
//     if(head.next.val) {
//         // temp = head.next;
//         // head.next = null;
//         // // 값이 같으면, 현재 head.next는 null로 만들어 연결을 끊어주고
//         // head = temp;
//         // // head는 temp에 저장해 두었던, head.next 값으로 지정해줌
//         // console.log(head.val);
//         console.log(head.val === head.next.val);
//     }
//         head = head.next;
//     }
//     // console.log(head.val);
//     return head;
// };
// head가 null일 경우.

// Line 15 in solution.js
//     if(head.next.val) {
//                  ^
// TypeError: Cannot read property 'val' of null
//     Line 15: Char 18 in solution.js (deleteDuplicates)
//     Line 39: Char 19 in solution.js (Object.<anonymous>)
//     Line 16: Char 8 in runner.js (Object.runner)
//     Line 30: Char 26 in solution.js (Object.<anonymous>)
//     Line 1251: Char 30 in loader.js (Module._compile)
//     Line 1272: Char 10 in loader.js (Object.Module._extensions..js)
//     Line 1100: Char 32 in loader.js (Module.load)
//     Line 962: Char 14 in loader.js (Function.Module._load)
//     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
//     Line 17: Char 47 in run_main_module.js

// if(!head || !head.next) return head;
// head와, head.next를 비교해야 하는데,
// 둘을 비교할때 계속해서 Cannot read property 'val' of null 오류가 남.

    // while(head.next) {
    //     // 여기서 틀린거였음 while(head)로만 했을경우
    //     // 마지막 분기때 무조건 head.next = null 인데
    //     // val을 참조했을때, null.val이 오류가 났던것
    //     // while(head) => while(head.next)로 수정
    //     // console.log(head.val === head.next.val);
    //     // true // false
    //     // console.log(head.val, head.next.val);
    //     // 1, 1,  // 1, 2
    //     if(head.val === head.next.val) {
    //         temp = head;
    //         head = head.next;
    //         temp.next = null
    //     }
    //     head = head.next
    // }
    // 기본적인 logic은 맞았는데 head = head.next로 계속도니까
    // 결국은 유효한 마지막번째 head.next만 출력됨
    // 새로운 변수 필요함.

    // 
    // var deleteDuplicates = function(head) {
    //     let answer;
    //     let temp;
    //     let node = head;
    //     while(node && node.next) {
    //         // console.log(node.val === node.next.val);
    //         // true / false
    //         if(node.val === node.next.val) {
    //             // 현재 node의 val과 node.next의 value가 같은 경우
    //             node.next = node.next.next;
    //         } else {
    //               node = node.next;   
    //         }
    //     }
    //     return head;
    // };


    var deleteDuplicates = function(head) {
        let answer;
        let temp;
        let node = head;
        while(node && node.next) {
            // console.log(node.val === node.next.val);
            // true / false
            if(node.val === node.next.val) {
                // 현재 node의 val과 node.next의 value가 같은 경우
                node.next = node.next.next;
            } else {
                  node = node.next;   
            }
        }
      
        return head;
    };