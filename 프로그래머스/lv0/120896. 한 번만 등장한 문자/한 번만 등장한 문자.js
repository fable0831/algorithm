function solution(s) {
    var answer = '';
    let arr = [...s].sort()
    let filter = arr.filter((item, index) => arr.lastIndexOf(item) === index && arr.indexOf(item) === index)
    answer = filter.join('')
    return answer;
}