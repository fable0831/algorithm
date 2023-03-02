function solution(slice, n) {
    var answer = 0;
    
    for(i=1; i<=slice*n; i++){
        if (slice*i / n >= 1){
            return answer = i;
            break;
        } 
    }
    
    return answer;
}

// 1. 최소 한조각 이상이란 말은 조각수(slice)를 사람수(n)로 나눴을 때 1이상이면 됨