//https://leetcode.com/problems/two-sum/
function twoSum(nums: number[], target: number) {
  const arrLength = nums.length
  for (let i = 0; i < arrLength; i++) {
    for (let j = i + 1; j < arrLength; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
}
