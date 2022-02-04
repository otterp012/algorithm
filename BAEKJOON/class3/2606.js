const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const [N, edge] = [input[0], input[1]];
input.shift();
input.shift();

const list = {};
for(let i=1; i<=N; i++) {
    list[i] = [];
}

input.forEach((items) => {
    items = items.split(' ');
    list[items[0]].push(items[1]);
    list[items[1]].push(items[0]);
})


function dfs(list, start) {
    const result = [];
    const vistied = {};

    function helper(vertex) {
        if(!vertex) return;

        result.push(vertex);
        vistied[vertex] = true;

        list[vertex].forEach((neighbor) => {
            if(!vistied[neighbor]) {
                helper(neighbor);
            }
        })
    }

    helper(start);

    return result;
}

console.log(dfs(list, 1).length-1);