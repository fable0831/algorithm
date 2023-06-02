function solution(s) {
    var answer = '';
    let word = 0;
    s = s.split('');
    
    for(let i = 0; i<s.length; i++){ 
        if(s[i] === ' '){
            answer += s[i];
            word = 0;
        } else if (word % 2 === 0) {
            answer += s[i].toUpperCase();
            word++;
        } else {
            answer += s[i].toLowerCase()
            word++;
            }
    }
    return answer;
}