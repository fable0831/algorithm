function solution(arr) {
    var answer = [];
    let small = Math.min(...arr);
    arr.length >1 ? answer = arr.filter((o) => o !== small) : answer = [-1]; 
    
    return answer;
}