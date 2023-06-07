function solution(array) {
    let arr = array.filter((item, index) => index === array.indexOf(item));
    let indexList = [];
    let numList = [];
    
    for(let i = 0; i<arr.length; i++){
        let num = 0;
        for(let j = 0; j<array.length; j++){
            array[j] === arr[i] ? num ++ : num;
        }
        indexList.push(num)
    }
    
    indexList.map((item, index) => item === Math.max(...indexList) ? numList.push(arr[index]) : numList);
    
    return numList.length === 1 ? numList[0] : -1;
}