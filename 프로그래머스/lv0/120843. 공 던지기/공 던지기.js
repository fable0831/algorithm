function solution(numbers, k) {
    var answer = 0;
    
    if (k === 1) {
        return numbers[0]
    }
    let index = 2*(k-1) % numbers.length;
    
    answer = numbers[index];
    
    return answer;
}