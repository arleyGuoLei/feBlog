/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 *
 * https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/description/
 *
 * algorithms
 * Easy (32.63%)
 * Likes:    73
 * Dislikes: 0
 * Total Accepted:    8.2K
 * Total Submissions: 25.1K
 * Testcase Example:  '[1,2,3,4,4,3,2,1]'
 *
 * 给定一副牌，每张牌上都写着一个整数。
 *
 * 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
 *
 *
 * 每组都有 X 张牌。
 * 组内所有的牌上都写着相同的整数。
 *
 *
 * 仅当你可选的 X >= 2 时返回 true。
 *
 *
 *
 * 示例 1：
 *
 * 输入：[1,2,3,4,4,3,2,1]
 * 输出：true
 * 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
 *
 *
 * 示例 2：
 *
 * 输入：[1,1,1,2,2,2,3,3]
 * 输出：false
 * 解释：没有满足要求的分组。
 *
 *
 * 示例 3：
 *
 * 输入：[1]
 * 输出：false
 * 解释：没有满足要求的分组。
 *
 *
 * 示例 4：
 *
 * 输入：[1,1]
 * 输出：true
 * 解释：可行的分组是 [1,1]
 *
 *
 * 示例 5：
 *
 * 输入：[1,1,2,2,2,2]
 * 输出：true
 * 解释：可行的分组是 [1,1]，[2,2]，[2,2]
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= deck.length <= 10000
 * 0 <= deck[i] < 10000
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  const arr = deck.sort((a, b) => (a - b))
  const str = arr.join('')
  const re = new RegExp([...new Set([...arr])].reduce((str, num) => {
    return `${str}(${num}+)`
  }, '^') + '$')
  const res = str.match(re)
  res.splice(0, 1)
  let minLen = 0

  res.forEach(str => {
    const len = str.length
    if (minLen === 0 || minLen > len) { minLen = len }
  })
  return res.every(str => {
    if (str.length % minLen !== 0 ||
      res.length === 1// [1]
    ) {
      if (res.length === 1 && str.length >= 2) { // [1, 1]
        return true
      }
      return false
    }
    return true
  })
}
// @lc code=end

console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2])) // error
