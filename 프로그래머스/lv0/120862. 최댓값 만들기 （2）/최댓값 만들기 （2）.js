function solution(numbers) {
    let answer = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i<numbers.length; i++){
        for(let j=1; i+j<numbers.length; j++){
            answer = numbers[i] * numbers[i+j] > answer ? numbers[i] * numbers[i+j] : answer
        }
    }
    return answer;
}