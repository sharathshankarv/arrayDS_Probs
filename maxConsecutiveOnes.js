const findMaxConsecutiveOnes = function(nums) {
  let counter = 0;
  let len = nums.length;
  let max = 0;
  for(let i = 0; i <= len; i++){
    debugger
      counter = nums[i] === 1 ? counter++ : 0          
      if(counter > max){
         max = counter
      }
  }
  return max;
};

console.log(findMaxConsecutiveOnes([1,1,1,0,1,1,1]))