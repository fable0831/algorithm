function solution(array) {
    array.sort(function(a,b){
        if(a>b){
            return 1;
        } else if (a ===b) {
            return 0;
        } else if(a<b) {
            return -1;
        }
    }) ;
    let i = Math.floor(array.length/2);
    return array[i]
}