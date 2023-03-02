function solution(numbers) {
    var answer = 0;
    let plusNumbers = 0;
    
    for(i=0; i<numbers.length; i++){
        plusNumbers += numbers[i]
    }
    answer= plusNumbers / numbers.length
    return answer;
}