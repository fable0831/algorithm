function solution(array, height) {
    var answer = 0;
    let arr = array.filter((item) => item>height)
    answer = arr.length
    return answer;
}