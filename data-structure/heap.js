
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
                if( 
                    (swap === null && rightValue > element) ||
                    (swap !== null && rightValue > leftValue) 
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

const minHeap = new MinBinaryHeap();
minHeap.insert(12);
minHeap.insert(15);
minHeap.insert(17);
minHeap.insert(21);
minHeap.insert(26);
minHeap.insert(23);
minHeap.insert(35);
console.log(minHeap.values);
minHeap.insert(13);
console.log(minHeap.values);
minHeap.extractMin();
console.log(minHeap.values);

