function solution(nums) {
    var answer = 0;
    let numsSet = new Set(nums);

    return nums.length/2 <= [...numsSet].length ? nums.length/2 : [...numsSet].length;
}