function solution(numbers) {
    var answer = 0;
    let max = 1;
    for(i=0; i<numbers.length-1; i++){
        numbers[i]*numbers[i+1] > answer ?  answer = numbers[i]*numbers[i+1] : answer
    }
    return answer;
}