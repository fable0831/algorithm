function solution(s){
    let p = 0;
    let y = 0;
    
    [...s].map(item => item.toLowerCase() === 'p' ? p++ : p);
    [...s].map(item => item.toLowerCase() === 'y' ? y++ : y);
    return p === y ? true : false;
}