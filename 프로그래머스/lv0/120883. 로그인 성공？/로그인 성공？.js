function solution(id_pw, db) {
    var answer = '';
    for(let x of db){
        if(id_pw[0] === x[0] && id_pw[1] === x[1]){
            answer = 'login';
            break;
        } else if (id_pw[0] === x[0] && id_pw[1] !== x[1]){
            answer = 'wrong pw'
            break;
        } else {
            answer = 'fail'
        }
    }
    return answer;
}