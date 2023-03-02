function solution(n) {
    var answer = 0;
    var slice = 6;
    
    for(i=1; i<=n*6; i++){
        if (slice*i % n ===0) {
            answer = i;
            break;
        }
    }
    
    return answer;
}

// 1. 6과 n의 최대 최소공백수를 구해라
// 2. 최소공백수를 n으로 나누면 anwer! 