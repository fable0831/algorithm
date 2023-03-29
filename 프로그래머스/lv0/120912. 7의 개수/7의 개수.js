function solution(array) {
    var answer = 0;
    let arr = [...array.join('')];
    for(let i=0; i<arr.length; i++){
        arr[i] === '7' ? answer++ : answer
    }
    return answer;
}