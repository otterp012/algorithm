// 0 3
// 1 2
// 2 0
// 3 -4
// 4 2
// 5 0
// 6 -4
// 7 2
// 8 0
// 9 -4
// 10 2
// 11 0
// 12 -4
// 13 2
// 14 0
// 15 -4

// let count = 0;
// while(head) {
//     console.log(count, head.val);
//     head = head.next;
//     count++;
// }

var hasCycle = function(head) {
    const map = new Map();
    while(head) {
        if(!map.has(head.val)) {
            map.set(head.val, 1)
        } else {
            map.set(head.val, map.get(head.val)+1)
        };
        if(map.get(head.val) === 2) return true;
        
        head = head.next;
    }
 
    return false;
};
// 처음 제출한 풀이

// [-21,10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5]
// -1
// output true
// expected false
// 이거
// head.val 써서 틀린걸 이해함.
// head.val 쓰면 map에 head 객체가(next내용을 가지고 있는) 들어가는게 아니고,
// head의 value만 들어감. 숫자 같은 숫자라면 중복된 값으로 인정되어 map 객체에서는 지워버릴거임
// 반면 head 객체는 객체 안에 있는 내용들이 전부 다른 값을 가짐 -> next가 다른 값을 가지니까.
// 따라서 head.val을 하면 true조건에 틀린 값이 생김.
// head.val을 head로 고쳐주고 correct ㅠㅠ
