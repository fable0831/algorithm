function solution(cards1, cards2, goal) {
    let list1 = [];
    let list2 = [];

    for(let i = 0; i<goal.length; i++){
        cards1.map((item, index) => item === goal[i] ? list1.push(index) : list1);
        cards2.map((item, index) => item === goal[i] ? list2.push(index) : list2);
    }
    
    let newList1 = list1.filter((item,index) => item === index);
    let newList2 = list2.filter((item,index) => item === index);
    
    return list1.length === newList1.length && list2.length === newList2.length ? "Yes" : "No";
    
}