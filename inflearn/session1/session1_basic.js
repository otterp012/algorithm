
{   // 세 수 중 최솟값
    function solution(a, b, c) {
        let answer;
        let min = Number.MAX_SAFE_INTEGER;

        if ( a > b ) min = b;
        else if ( b > c ) min = c;
        else min = a;

        answer = min;

        return answer;
    }

    console.log(solution(6, 5, 11));
}

{   // 삼각형 판별하기
    function solution(a, b, c) {
        let answer = "NO"
        let max = Math.max(a, b, c);
        let sum = a + b + c;

        if((sum - max) > max ) answer = "YES";
        return answer;
    }

    console.log(solution(6, 7, 11));
    console.log(solution(13, 33, 17));
}

{   // 연필 개수
    function solution(N) {
        return Math.ceil(N/12);
    }

    console.log(solution(25));
}


{
    // 1부터 N까지의 합
    function solution(n) {
        return (n*(n+1))/2;
    }

    console.log(solution(6));
}

{
    // 최솟값 구하기
    function solution(arr) {
        let answer;
        let min = Number.MAX_SAFE_INTEGER;

        for(let x of arr) {
            if(min > x) min = x;
        }

        answer = min;
        return answer;
    }

    let arr = [5, 3, 7, 11, 2, 15, 17];
    console.log(solution(arr));
}

{
    // 홀수
    function solution(arr) {
        let answer = 0;
        let min = Number.MAX_SAFE_INTEGER;

        for(let x of arr) {
            if(x%2 === 1) {
                answer += x;
                min = Math.min(min, x);
            }
            
        }

        return [answer, min];
    }

    let arr = [12, 77, 38, 41, 53, 92, 85];

    console.log(solution(arr));
}

{
    // 10부제
    function solution(arr, n) {
        let answer = 0;
        arr.forEach((item) => {
            if(item%10 === n) answer++;
        })

        return answer;
    }

    let arr = [25, 23, 11, 47, 53, 17, 33];
    console.log(solution(arr, 3));
}

{
    // 일곱난쟁이
    function solution(arr) {
        let sum = arr.reduce((acc, cur) => acc + cur ,0);
        let answer = arr;
        for(let i = 0; i < arr.length; i++) {
            for(let j = 1; j < arr.length-1; j++) {
                if((sum - (arr[i]+arr[j])) === 100) {
                    arr.splice(j, 1);
                    arr.splice(i, 1);
                }
            }
        }
        
        return answer;
    }
    let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

    console.log(solution(arr));
}

{
    // A를 #으로
    function solution(s) {
        let answer = '';
        for(let x of s) {
            if(x === "A") answer += '#';
            else answer +=x;
        }
        return answer;
    }
    let str = "BANANA";
    console.log(solution(str));
}

{
    // 문자 찾기
    function solution(s) {
        let answer = 0; 
        for(let x of s) {
            if(x === "R") answer++;
        }

        return answer;
    }
    let str = "COMPUTERPROGRAMMING";

    console.log(solution(str));
}

{
    // 대문자 찾기
    function solution(s) {
        let answer = 0;
        for(let x of s) {
            if(x === x.toUpperCase()) answer++;
        }
        return answer;
    }
    let str = "KoreaTimeGood";

    console.log(solution(str));
}

{
    // 대문자 찾기
    function solution(s) {
        let answer = '';
        for(let x of s) {
            if(x === x.toLowerCase()) answer += x.toUpperCase();
            else answer += x;
        }
        return answer;
    }
    let str = "ItisTimeToStudy";

    console.log(solution(str));
}

{
    // 대소문자변환
    function solution(s) {
        let answer = '';
        for(let x of s) {
            if(x === x.toLowerCase()) answer += x.toUpperCase();
            else answer += x.toLowerCase();
        }
        return answer;
    }
    let str = "StuDY";

    console.log(solution(str));
}

{
    // 가장 긴 문자열
    function solution(arr) {
        let answer;
        let max = Number.MIN_SAFE_INTEGER;
        for(let x of arr) {
            if(x.length > max) {
                max = x.length;
                answer = x;
            }
        }

        return answer;
    }
    let arr = ["teacher", "time", "student", "beautiful", "good"];
    console.log(solution(arr));
}

{
    // 가운데 문자 출력
    function solution(s) {
        let answer;
        if(s.length%2 === 1) {
            answer = s[Math.floor(s.length/2)]; 
        } else {
            answer = s[Math.floor(s.length/2)-1]+s[Math.floor(s.length/2)]; 
        }

        return answer;
    }
    let str = "good";

    console.log(solution(str));
}

{
    // 중복 문자 제거
    function solution(s) {
        let answer = "";

        for(let i = 0; i < s.length; i++) {
            if(s.indexOf(s[i]) === i) answer += s[i];
        }

        return answer;
    }
    let str = "ksekkset";

    console.log(solution(str));
}

{
    // 중복 단어 제거
    function solution(s) {
        let answer = []

        for(let i = 0; i < s.length; i++) {
            if(s.indexOf(s[i]) === i) answer.push(s[i]);
        }

        return answer;
    }
    let arr = ["good", "time", "good", "time", "student"];

    console.log(solution(arr));
}