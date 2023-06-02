function solution(t, p) {
    var answer = 0;
    
    let list = [];
    
    for(let i = 0; i<=t.length-p.length; i++){
        list.push(t.slice(i, i+p.length));
    }
    
    answer = list.filter(item => item <= p).length;
    
    return answer;
}