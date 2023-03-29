function solution(my_string) {
    var answer = 0;
    let cal = my_string.split(' ');
    for(let i=0; i<cal.length; i++){
        if(cal[i] === '+'){
            answer;
        } else if (cal[i] === '-'){
            answer = answer - cal[i+1] - cal[i+1]
        } else {
            answer += Number(cal[i])
        }
    }
    
    return answer;
}