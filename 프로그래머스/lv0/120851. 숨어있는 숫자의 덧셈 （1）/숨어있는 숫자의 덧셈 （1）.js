function solution(my_string) {
    var answer = 0;
    let arr = Array.from(my_string).filter(item => Number.isNaN(parseInt(item))===false)
    arr.map(item => (
    answer += parseInt(item)
    ))
    return answer;
}