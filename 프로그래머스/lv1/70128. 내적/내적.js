function solution(a, b) {
    var answer = 0;
    
    for(let i=0; i<a.length; i++){
        answer += parseInt(a[i]) * parseInt(b[i]);
    }
    
    return answer;
}