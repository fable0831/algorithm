function solution(n) {
    var answer = 0;
    let a=1;
    for(i=0; i<n; i++){
     if(n%(a+i) ===0){
         answer++;
     }
    }
    return answer;
}