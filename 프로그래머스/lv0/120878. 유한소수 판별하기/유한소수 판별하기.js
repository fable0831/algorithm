function solution(a, b) {
    
    while (b % 2 ===0){
        b = b/2 ;
    }
    while (b % 5 ===0){
        b = b/5;
    }
    
    return a%b === 0 ? 1 : 2;

}