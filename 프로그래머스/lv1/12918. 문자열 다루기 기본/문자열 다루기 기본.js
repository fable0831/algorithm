function solution(s) {
    var answer = true;
    let list = [...s].sort().join('');
    
    
    if((list.length === 4 || list.length === 6) && isNaN(list) !== true){
        answer = true;
    } else {
        answer = false;
    }
    
    return answer;
}