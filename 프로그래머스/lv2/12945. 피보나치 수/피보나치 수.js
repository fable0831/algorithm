function solution(n) {
    var answer = 0;
    let small = 1;
        let big = 1;
    
    for(let i = 2; i<n; i++){
        answer = (small + big) % 1234567 ;
        small = big % 1234567;
        big = answer % 1234567;
    }
    
    return answer;
}