const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const TC = +input.shift();
let data = input;
const maps = [];

for(let i=0; i<TC; i++) {
    let [M, N, K] = data.shift().split(' ').map(Number);
    let map = Array.from({length: N}).map(row => row = Array.from({length:M}).fill(0));

    for(let i=0; i<K; i++) {
        let [X, Y] = [+data[i].split(' ')[0], +data[i].split(' ')[1]]
        map[Y][X] = 1;
    }
    maps.push(map);
    data.splice(0, K);
}

function solution(arr) {
    const visited = {};
    let answer = 0;
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[0].length; j++) {
            if(arr[i][j] === 1 && !visited[[i,j]]) {
                bfs(i,j);
            }
        }
    }

    function bfs(x, y) {
        const queue = [[x, y]];
        const result = [];
        visited[[x,y]] = true;
    
        let dx = [0, 0, -1, 1];
        let dy = [-1, 1, 0, 0];
    
        while(queue.length) {
            for(let i=0; i<queue.length; i++) {
                const coords = queue.shift();
                if(!visited[[coords[0], coords[1]]]) continue;
                result.push(coords);
                for(let j=0; j<4; j++) {
                    let nx = coords[0] + dx[j];
                    let ny = coords[1] + dy[j];
                    if((nx >= 0 &&
                        ny >= 0 &&
                        nx < arr.length &&
                        ny < arr[0].length) &&
                        (arr[nx][ny] === 1) &&
                        (!visited[[nx,ny]])
                    ) {
                        visited[[nx,ny]] = true;
                        queue.push([nx, ny]);
                    }
                }
            }
        }
        answer++;
    }

    return answer;
}

maps.forEach((farm) => {
    console.log(solution(farm));
})