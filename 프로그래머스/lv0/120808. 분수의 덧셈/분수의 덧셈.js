function solution(numer1, denom1, numer2, denom2) {
    let answer = []
    let denom = denom1*denom2
    let numer = numer1*denom2 + numer2*denom1
    for (denom > numer? i = numer : i = denom; i>0; i--){
        if(denom % i === 0 && numer%i === 0) {
            return answer = [numer/i, denom/i];
        }
    }
}