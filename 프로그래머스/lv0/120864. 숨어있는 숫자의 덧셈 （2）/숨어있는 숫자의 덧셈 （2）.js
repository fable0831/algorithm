function solution(my_string) {
    var answer = 0;
    let str= "";
    for(let i=0; i<my_string.length; i++){
        const check = Number.isInteger(Number(my_string[i]));
        if (check && i === my_string.length-1){
            str += my_string[i];
            answer += Number(str);
        } else if(check) {
            str += my_string[i]
        } else {
            answer += Number(str);
            str = "";
        }

    }
    return answer;
}

// 1. 문자열이 정수인지 판단
// 2. 문자열이 정수라면 변수 str에 더함
// 3. 문자열이 정수가 아니라면 str을 answer에 더하고 str을 초기화
// 4. (중요) 문자열 마지막이 숫자라면 str에 더하고 str을 answer에 더함