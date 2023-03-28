function solution(array, n) {
    var answer = 0;
    let min = Number.MAX_SAFE_INTEGER;
    
    array.map((item, index) => (
    Math.abs(n-item) < min ? min = Math.abs(n-item) : null
    ))
    
    answer = array.filter(item => Math.abs(n-item) === min).sort((a,b) => a-b)[0]
    
    return answer;
}

//1. 최소값 min을 생성
//2. map함수를 활용해 배열 요소 중 n과 가장 가까운 수를 구함
//3. 가장 가까운 요소를 오름차순으로 정렬해서 가장 앞에 값을 구함