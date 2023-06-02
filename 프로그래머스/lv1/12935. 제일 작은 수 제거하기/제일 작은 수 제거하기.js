function solution(arr) {
    var answer = [];
    let small = [...arr].sort((a,b) => a-b)[0];
    arr.length >1 ? answer = arr.filter((o) => o !== small) : answer = [-1]; 
    
    return answer;
}