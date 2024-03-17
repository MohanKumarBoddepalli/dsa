/**
 * https://leetcode.com/problems/two-sum/
 * 1. Two Sum
 * Solved
 * Easy
 * Topics
 * Companies
 * Hint
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0, 1];
 */

var twoSum = function (nums, target) {
  let output;
  for (i = 0; i < nums.length; i++) {
    const secondVariableValue = target - nums[i];
    const secondVariableIndex = nums.indexOf(secondVariableValue, i + 1);
    if (secondVariableIndex > 0) {
      output = [i, secondVariableIndex];
      break;
    }
  }
  return output || [];
};

twoSum([2, 7, 11, 15], 9);

// ================ 2nd way =================

function test(target, value) {
  let x = 1;
  let element;
  for (let i = 0; i < target.length; i++) {
    element = value - target[i];
    for (let j = i + 1; j < target.length; j++) {
      if (element === target[j]) {
        console.log(3);
        console.log(x);
        return [i, j];
      }
      x++;
    }
    x++;
  }
  console.lo(x);
}
console.log(test([1, 2, 3, 4, 5], 9));
