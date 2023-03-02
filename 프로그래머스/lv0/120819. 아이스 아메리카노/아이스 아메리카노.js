function solution(money) {
    var answer = [];
    
    if(money%5500 === 0) {
        answer = [money/5500, 0]
    } else if (money/5500 < 1){
        answer = [0, money]
    } else {
        answer = [Math.floor(money/5500), money%5500]
    }

    return answer;
}