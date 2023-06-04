function solution(numbers) {
    var answer = [];
    const set = new Set();
    for(let i = 0; i<numbers.length-1; i++){
        for(let j = i+1; j<numbers.length; j++){
            answer.push(numbers[i]+numbers[j]);
        }
    }
    answer.sort((a,b) => a-b);
    answer = [... new Set(answer)];
    
    return answer;
}