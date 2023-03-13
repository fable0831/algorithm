function solution(letter) {
    var answer = '';
    let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
};
    let keys = Object.keys(morse);
    let values = Object.values(morse);
    let word = letter.split(" ");
    for(let i = 0; i< word.length; i++){
        for(let j =0; j<keys.length; j++){
            if(word[i] === keys[j]){
                answer += values[j]
            }
        }
    }
    
    return answer;
}