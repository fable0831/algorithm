function solution(s1, s2) {
    var answer = 0;
    for(i=0; i<s1.length; i++){
        for(j=0; j<s2.length; j++){
            s1[i] === s2[j] ? answer+=1 : answer
        }
    }
    return answer;
}