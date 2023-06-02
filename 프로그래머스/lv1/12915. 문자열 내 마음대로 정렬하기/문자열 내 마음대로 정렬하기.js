function solution(strings, n) {
    var answer = [];
    let list = strings.map((item, index) => item[n]+item).sort();
    answer = list.map(x => x = x.slice(1, x.length));
    return answer;
}