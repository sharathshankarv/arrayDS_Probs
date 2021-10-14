const findNumbers = function(nums) {
  return nums.filter((num)=> String(num).length % 2 === 0).length;
};
let nums = [12,345,2,6,7896];
console.log(findNumbers(nums));