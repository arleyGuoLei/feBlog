/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (46.17%)
 * Likes:    470
 * Dislikes: 0
 * Total Accepted:    133.6K
 * Total Submissions: 282.7K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 *
 *
 *
 * 说明:
 *
 *
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 *
 *
 *
 *
 * 示例:
 *
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 *
 * 输出: [1,2,2,3,5,6]
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
  let length = m + n // 总长度
  while (n > 0) { // nums2的长度 > 0, 直到nums2完全写入
    if (m <= 0) { // 如果数组1的指针已经移到头了，也就是已经排序完数组1了，数组二就全部填剩下的位置
      length--
      n--
      nums1[length] = nums2[n]
      continue
    }
    length-- // 在nums1倒叙填入最大的数字, 谁大写谁, 谁的指针左移
    if (nums1[m - 1] >= nums2[n - 1]) {
      m--
      nums1[length] = nums1[m]
    } else {
      n--
      nums1[length] = nums2[n]
    }
  }
}
// @lc code=end

merge([2, 0], 1, [1], 1)
