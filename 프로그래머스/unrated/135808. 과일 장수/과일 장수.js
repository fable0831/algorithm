function solution(k, m, score) {
    var answer = 0;
    score = score.sort((a,b) => b-a);
    let max = parseInt(score.length/m);
    
    // for(let i = 1; i<=max; i++){
    //     answer += score[m*i-1] * m;
    // }
    
    score.map((item,index) => (index+1)%m === 0 ? answer += item*m : answer);
    
    
    return answer;
}