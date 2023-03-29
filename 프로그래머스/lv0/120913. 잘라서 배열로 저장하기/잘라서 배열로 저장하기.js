function solution(my_str, n) {
    var answer = [];
    let a = my_str.length/n
    let b = my_str.length%n
    for(let i = 0; i<a; i++){
        if(i === 0){
           answer.push(my_str.slice(i, n))
        } else {
            answer.push(my_str.slice(i*n , n*(i+1)))
        }
    }
    return answer;
}