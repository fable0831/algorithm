function solution(common) {
    var answer = 0;
    let leng = common.length -1;
        if(common[2] - common[1] === common[1] - common[0]){
            answer = common[leng] + common[1] - common[0]
        } else (
            answer = common[leng] * (common[1] / common[0])
        )
    return answer;
}