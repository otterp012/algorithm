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
        const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
        
        
        const [M, N, K] = input.shift().split(' ');
        
        
        // 세로 M, 가로 N 짜리 0으로 채워진 이차원 배열 만들기.
        
        let arr = Array.from({length:M}).map(row => row = Array.from({length:N}).fill(0));
        
        let coords = [];
        input.forEach((item) => {
            item = item.split(' ').map(Number);
            let start = [item[1], item[0]];
            let end = [item[3]-1, item[2]-1];
        
            for(let i = start[0]; i <= end[0]; i++) {
                for(let j = start[1]; j <= end[1]; j++) {
                    arr[i][j] = 1;
                }
            }
        })
        
        // [0, 0, 0, 0, 1, 1, 0],
        // [0, 1, 0, 0, 1, 1, 0],
        // [1, 1, 1, 1, 0, 0, 0],
        // [1, 1, 1, 1, 0, 0, 0],
        // [0, 1, 0, 0, 0, 0, 0];
        // 맵 만들기
        const visitedCoords = {};
        function bfs(x, y) {
            const result = [];
            const queue = [[x,y]];
            const visited = {};
            visited[[x,y]] = true;
            visitedCoords[[x,y]] = true;
            let dx = [0, 0, 1, -1];
            let dy = [-1, 1, 0, 0];
            let cnt = 1;
        
            while(queue.length) {
                for(let i=0; i<queue.length; i++) {
                    let coord = queue.shift();
                    result.push(coord);
                    for(let j=0; j<4; j++) {
                
                        let nx = coord[0] + dx[j];
                        let ny = coord[1] + dy[j];
                        if(( nx >= 0 &&
                            ny >= 0 &&
                            nx < arr.length &&
                            ny < arr[0].length ) &&
                        // 좌표의 유효성 확인 
                            (arr[nx][ny] === 0) &&
                        // 0일 경우에만 탐색 진행
                            (!visited[[nx,ny]])
                        // visited 확인
                            )
                        {   
                            visited[[nx,ny]] = true;
                            visitedCoords[[nx,ny]] = true;
        
                            cnt++;
                            queue.push([nx,ny]);
                        }
                    }
                }
            }
            return result;
        }
        
        const answer = [];
        for(let i=0; i<M; i++) {
            for(let j=0; j<N; j++) {
                if(arr[i][j] === 0 && !visitedCoords[[i,j]]) answer.push(bfs(i,j))
            }
        }
        console.log(answer.length);
        
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