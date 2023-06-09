function solution(n)
{
    var answer = 0;
    
    n = n.toString().split('').map(item => answer += Number(item));

    return answer;
}