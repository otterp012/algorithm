const input = require('fs').readFileSync('example.txt').toString().trim().split('\n').map(el => Number(el));
input.shift();

class MinBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length-1;
        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            let parentValue = this.values[parentIndex];
            let inserted = this.values[index];

            if(parentValue > inserted) {
                this.values[parentIndex] = inserted;
                this.values[index] = parentValue;
            } else break;

            index = parentIndex;
        }
    }

    extractMin() {
        if(!this.values.length) return 0;
        let min = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let index = 0;
        let length = this.values.length;

        while(true) {
            let leftIndex = index * 2 + 1;
            let rightIndex = index * 2 + 2;
            let leftValue, rightValue;
            let element = this.values[index];
            let swap = null;
            if(leftIndex < length) {
                leftValue = this.values[leftIndex];

                if(element > leftValue) {
                    swap = leftIndex;
                }
            }

            if(rightIndex < length) {
                rightValue = this.values[rightIndex];
                if( (swap === null && element > rightValue) ||
                    (swap !== null && leftValue > rightValue)
                ) {
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

const heap = new MinBinaryHeap();

let answer = [];
input.forEach((item) => {
    if(item === 0) answer.push(heap.extractMin())
    else heap.insert(item);
})

console.log(answer.join('\n'));