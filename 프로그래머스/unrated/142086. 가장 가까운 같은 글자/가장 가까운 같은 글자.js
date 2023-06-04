function solution(s) {
    var answer = [];
     
    for(let i = 0; i<s.length; i++){
        if(s.indexOf(s[i]) === i){ 
            answer.push(-1)
        } else {
            //s[i]가 바뀔때 마다 초기화.
            let num = [];
            //처음 나온게 아닐 때, 동일한 글자들의 인덱스를 배열로 반환.
            s.split('').map((item, index) => item === s[i] ? num.push(index) : num);
            //
            num.map((item,index) => item === i ? answer.push(item - num[index-1]) : item); 
        }
    }
    return answer;
}