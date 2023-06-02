function solution(phone_number) {
    var answer = '';
    phone_number = phone_number.split('').map((o, i) => i < phone_number.length-4 ? o = '*' : o);
    answer = phone_number.join('');    
    return answer;
}