function solution(price, money, count) {
    var answer = 0;
    for(let i = 1; i<= count; i++){
        answer += i;
    }
    
    return money >= answer * price ? 0 : answer * price - money
}