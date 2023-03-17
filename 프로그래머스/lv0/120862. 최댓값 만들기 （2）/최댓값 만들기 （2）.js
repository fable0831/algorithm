function solution(numbers) {
    let answer = Number.MIN_SAFE_INTEGER;
    
    numbers.sort((a,b) => a-b);
    
    answer = Math.max((numbers[0] * numbers[1]), (numbers[numbers.length-2] * numbers[numbers.length-1]))
    
    return answer;
}