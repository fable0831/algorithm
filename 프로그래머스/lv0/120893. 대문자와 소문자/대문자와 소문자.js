function solution(my_string) {
    var answer = '';
    [...my_string].map(item =>(
        answer += (item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase())
    ))
    return answer;
}