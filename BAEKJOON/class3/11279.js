const input = require('fs').readFileSync('example.txt').toString().trim().split('\n').map(el => Number(el));
input.shift();
class MaxBinaryHeap{
    constructor(){
        this.values = [];    
    }
    insert(val){
        this.values.push(val);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.values.length-1;
        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            let parentValue = this.values[parentIndex];
            let pushedValue = this.values[index];
            
            if(parentValue >= pushedValue)  break;
            if(pushedValue > parentValue) {
                this.values[parentIndex] = pushedValue;
                this.values[index] = parentValue;
            }
            index = parentIndex;
        }
    }
    extractMax() {
        let max = this.values[0];
        let end = this.values.pop();
        
        if(this.values.length > 0) {
            this.values[0] = end;
            this.trickDown();
        }
        return max;
    }
    
    trickDown() {
        let index = 0;
        let length = this.values.length;
  
        while(true) {
            let element = this.values[index];
            let leftIndex = index * 2 + 1;
            let rightIndex = index * 2 + 2;
            let leftValue, rightValue;
            let swap = null;
            
            if(leftIndex < length) {
                leftValue = this.values[leftIndex];
                if(leftValue > element) {
                    swap = leftIndex;
                }
            }
            if(rightIndex < length) {
                rightValue = this.values[rightIndex];
                if(swap === null && rightValue > element) {
                    swap = rightIndex;
                }
                if(swap !== null && rightValue > leftValue) {
                    swap = rightIndex;
                }
            }
            if(swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

const heap = new MaxBinaryHeap();
let answer = [];
input.forEach((item) => {
    if(item === 0) answer.push(heap.extractMax())
    else heap.insert(item);
})

console.log(answer.join('\n'));