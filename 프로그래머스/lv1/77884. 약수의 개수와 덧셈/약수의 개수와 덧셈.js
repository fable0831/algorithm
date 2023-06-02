function solution(left, right) {
    var answer = 0;

    for(let x = left; x<=right; x++){
        let list = 0;
        for(let i = 1; i<=x; i++){
            x % i === 0 ? list ++ : list; 
        }
        list % 2 === 0 ? answer += x : answer -= x;
    }
    return answer;
}