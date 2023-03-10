function solution(balls, share) {
    var answer = 0;
   
    function factorial(n) {
        return n ? n * factorial(n-1) : 1
    }
    answer = factorial(balls) / (factorial(share) * factorial(balls-share));
    
    return Math.round(answer);
    
}