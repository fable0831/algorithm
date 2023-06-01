function solution(seoul) {
    var answer = '';
    let x = 0;
    seoul.filter((item, index) => item === "Kim" ? x = index : x)
    return answer = "김서방은 " + x + "에 있다";
}