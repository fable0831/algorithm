function solution(my_string) {
    var answer = '';
    let long = my_string.length-1;
    
    for(i=0; i<=long; i++){
     answer += my_string[long-i]
    }
    return answer;
}