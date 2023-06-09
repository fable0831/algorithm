function solution(s) {
    var answer = 0;
    if(isNaN(s[0]) === true && s[0] === "+"){
        answer = parseInt(s.slice(1))
    } else if (isNaN(s[0]) === true && s[0] === "-"){
        answer = -parseInt(s.slice(1))
    } else {
        answer = parseInt(s);
    }
    return answer;
    
}