function isPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n, k) {
    let answer = 0;
    let num = n.toString(k).split("0");
    for(let i = 0; i<num.length; i++){
    if (isPrimeNumber(num[i])) {
      answer++;
    }
    }
    
    return answer;
}
