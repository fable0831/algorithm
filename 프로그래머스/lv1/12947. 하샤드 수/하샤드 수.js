function solution(x) {
    let y = 0;
    
    [...(x+"")].map(item => y += parseInt(item));
    
    return x % y === 0 ? true : false;

}