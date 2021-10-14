const twoSum = (nums, target) => {
    let indices = new Map();
    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        if(indices.has(complement)){
            return [indices.get(complement),i] 
        }
        indices.set(nums[i], i)
    } 
}
const nums = [2,11,15,7];
console.log(twoSum(nums, 9))