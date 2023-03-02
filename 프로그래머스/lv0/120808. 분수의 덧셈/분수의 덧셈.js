function solution(numer1, denom1, numer2, denom2) {
    let denom = denom1*denom2;
    let numer = numer1*denom2 + numer2*denom1;
    let minNum = denom > numer ? numer : denom;
    
    while (true){
        if(denom % minNum === 0 && numer%minNum === 0) {
            return [numer/minNum, denom/minNum]
        } else {
            minNum = minNum -1
        };
    };
}