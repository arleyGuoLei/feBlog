/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 *
 * https://leetcode-cn.com/problems/maximum-gap/description/
 *
 * algorithms
 * Hard (52.83%)
 * Likes:    132
 * Dislikes: 0
 * Total Accepted:    12.8K
 * Total Submissions: 23.3K
 * Testcase Example:  '[3,6,9,1]'
 *
 * 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。
 *
 * 如果数组元素个数小于 2，则返回 0。
 *
 * 示例 1:
 *
 * 输入: [3,6,9,1]
 * 输出: 3
 * 解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
 *
 * 示例 2:
 *
 * 输入: [10]
 * 输出: 0
 * 解释: 数组元素个数小于 2，因此返回 0。
 *
 * 说明:
 *
 *
 * 你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
 * 请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  let max = 0
  if (nums.length < 2) { return max }
  for (let i = nums.length, tmp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j + 1] < nums[j]) {
        tmp = nums[j + 1]
        nums[j + 1] = nums[j]
        nums[j] = tmp
      }
    }
    const c = nums[i] - nums[i - 1]
    if (max < c) {
      max = c
    }
  }
  return max
}
// @lc code=end

console.log('log => : maximumGap', maximumGap([1, 10000000]))
