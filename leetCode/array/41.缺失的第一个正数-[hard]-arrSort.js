/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 *
 * https://leetcode-cn.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (37.27%)
 * Likes:    457
 * Dislikes: 0
 * Total Accepted:    44.8K
 * Total Submissions: 118.2K
 * Testcase Example:  '[1,2,0]'
 *
 * 给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。
 *
 *
 *
 * 示例 1:
 *
 * 输入: [1,2,0]
 * 输出: 3
 *
 *
 * 示例 2:
 *
 * 输入: [3,4,-1,1]
 * 输出: 2
 *
 *
 * 示例 3:
 *
 * 输入: [7,8,9,11,12]
 * 输出: 1
 *
 *
 *
 *
 * 提示：
 *
 * 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的额外空间。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  nums = nums.filter(num => num > 0)
  nums.sort((a, b) => a - b) // 可以优化，没必要全部进行排序，边排边找答案就行
  if (!nums.length || nums[0] !== 1) {
    return 1
  }
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] > 1) {
      return nums[i] + 1
    }
  }
  // return nums[nums.length - 1] + 1 // 等同于↓
  return nums.pop() + 1
}
// @lc code=end

console.log(firstMissingPositive([-1, 4, 2, 1, 9, 10]))
