
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [vertex, edge] = [...input.shift().split(' ')];

class BFS {
    constructor() {
        this.list = {};
        this.vistiedVertex = {};
    }

    addVertex(val) {
        this.list[val] = [];
    }

    addEdge(vertex1, vertex2) {
        this.list[vertex1].push(vertex2);
        this.list[vertex2].push(vertex1);
    }

    bfs(start) {
        const queue = [start];
        const result = [];
        const vistied = {};
        vistied[start] = true;

        let shifted;
        while(queue.length) {
            shifted = queue.shift();
            result.push(shifted);
            this.list[shifted].forEach((neighbor) => {
                if(!vistied[neighbor]) {
                    vistied[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        result.forEach((item) => this.vistiedVertex[item] = true)
        return result;
    }
}

const b = new BFS();
for(let i=1; i<=vertex; i++) {
    b.addVertex(i)
}

input.forEach((item) => {
    b.addEdge(item.split(' ')[0], item.split(' ')[1]);
})

let answer = 0;
for(let i=1; i<=vertex; i++) {
    if(!b.vistiedVertex[String(i)]) {
        b.bfs(String(i));
        answer++;
    }
}

console.log(answer);