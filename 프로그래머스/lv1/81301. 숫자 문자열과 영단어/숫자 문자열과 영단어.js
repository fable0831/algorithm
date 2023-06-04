function solution(s) {
    var answer = s;
    let text = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let num = [0,1,2,3,4,5,6,7,8,9];
    for (let i = 0; i<10; i++){
        answer = answer.split(text[i]).join(num[i]);
    }
    return parseInt(answer);
}

//split으로 구분자를 공백으로 대체하면서 배열 생성
//공백으로 대체된 구분자를 num[i]를 넣고 문자열로 변한