function solution(s) {
    var answer = 0;
    let arr = s.split(" ");
    let arr2 = arr.filter((item, index) => arr[index+1] !== "Z").filter(item => item !== "Z");
    arr2.map(item => (
    answer += Number(item)
    ))
    return answer;
}