function solution(my_string) {
    var answer = '';
    [...my_string].map(item =>(
    item === item.toUpperCase() ? answer += item.toLowerCase() : answer += item.toUpperCase()
    ))
    return answer;
}