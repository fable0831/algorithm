function solution(cipher, code) {
    var answer = '';
    [...cipher].filter((item, index)=> (
        (index+1) % code === 0 
    )).map(item => answer+=item)
    return answer;
}