const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const [N, M, V] = input[0].split(' ');
input.shift();

const newList = {};
for(let i = 1; i <= N; i++) {
    newList[i] = [];
}

function addEdge(vertex1, vertex2) {
    newList[vertex1].push(vertex2);
    newList[vertex2].push(vertex1);
}

input.sort().map((item) => item.split(' ')).forEach((vertex) => {
    addEdge(vertex[0], vertex[1])
});

// for(let x in newList) {
//     newList[x].sort((a,b) => a-b)
// }
// 위에서 sort한것만으로는, list 각 배열들의 오름차순을 기대할 수 없다.
// 이 문제에서는 list들의 values인 배열들은 무조건 오름차순이여야만 한다.

function dfs(list, V) {
    const result = [];
    const vistied = {};
    
    function helper(vertex) {
        if(!vertex) return;

        result.push(vertex);
        vistied[vertex] = true;

        list[vertex].forEach((neighbor) => {
            if(!vistied[neighbor]) {
                return helper(neighbor);
            }
        })
    }

    helper(V);

    return result;
}

function bfs(list, V) {
    const queue = [V];
    const result = [];
    const vistied = {};

    vistied[V] = true;

    let currentVertex;
    
    while(queue.length) {
        currentVertex = queue.shift();
        result.push(currentVertex);

        list[currentVertex].forEach((neighbor) => {
            if(!vistied[neighbor]) {
                vistied[neighbor] = true;
                queue.push(neighbor);
            }
        })
    }

    return result;
}


let answer = '';

for(let x of dfs(newList, V)) {
    answer += x +' ';
}

answer += '\n'

for(let x of bfs(newList, V)) {
    answer += x + ' ';
}

console.log(answer);

