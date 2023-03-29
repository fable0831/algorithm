function solution(sides) {
    var answer = 0;
    let side = sides.sort((a,b) => a-b);
    for(let i=1; i< side[0]+side[1]; i++){
        if(side[1] > i && side[0] + i > side[1]){
            answer++;
        } else if (side[1] < i && side[0]+side[1] > i){
            answer++;
        } else if (side[1] === i){
            answer++;
        }
    };
    return answer;
}

//1. 가장 큰 수가 side[1] 일 때 side[0] + i > side[1]
//2. 가장 큰 수가 i 일 때 side[0] + side[1] > i