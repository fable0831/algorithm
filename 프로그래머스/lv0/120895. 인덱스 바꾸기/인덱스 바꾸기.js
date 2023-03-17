function solution(my_string, num1, num2) {
    var answer = '';
    for(let i = 0; i<num1; i++){
        answer += [...my_string][i]
    }
    answer += [...my_string][num2]
    
    for(let j = num1+1; j< num2; j++){
        answer += [...my_string][j]
    }
    answer += [...my_string][num1]
    for(let k = num2+1 ; k<my_string.length; k++){
          answer += [...my_string][k]
    }
  
    return answer;
}