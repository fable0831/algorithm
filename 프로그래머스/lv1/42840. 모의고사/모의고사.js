function solution(answers) {
    var answer = [];
    let math1 = [1,2,3,4,5];
    let math2 = [2,1,2,3,2,4,2,5];
    let math3 = [3,3,1,1,2,2,4,4,5,5];
    let a = 0;
    let b = 0;
    let c = 0;
    
    for(let i =0; i<answers.length; i++) {
        answers[i] === math1[i%5] ? a ++ : a;
        answers[i] === math2[i%8] ? b ++ : b;
        answers[i] === math3[i%10] ? c ++ : c;
    }
    
    Math.max(a,b,c) === a ? answer.push(1) : answer;
    Math.max(a,b,c) === b ? answer.push(2) : answer;
    Math.max(a,b,c) === c ? answer.push(3) : answer;
    
    return answer;
}