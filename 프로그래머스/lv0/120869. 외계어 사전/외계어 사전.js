function solution(spell, dic) {
    var answer = 0;
    for(let i = 0; i< dic.length; i++){
        for(let j=0; j< spell.length; j++){
           if(dic[i].includes(spell[j]) === true){
               answer = 1;
           } else {
               answer = 2;
               break;
           }
        }
        if (answer === 1) break;
        }
    return answer;
}

//dic에 요소를 spell의 요소로 검사
//spell의 모든 요소가 통과한다면 answer = 1;
