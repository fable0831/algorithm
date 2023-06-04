function solution(n, arr1, arr2) {
    var answer = [];
    
    arr1 = arr1.map(item => item.toString(2).padStart(n,0));
    arr2 = arr2.map(item => item.toString(2).padStart(n,0));
    
    
    for(let i = 0;  i<n; i++){
        let text = '';
        for(let j = 0; j<n; j++){
            (arr1[i][j] === '1' || arr2[i][j] === '1') ? text += '#' : text+= ' ';  
        }
        answer.push(text);
    }
    
    return answer;
}