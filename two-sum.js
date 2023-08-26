/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const numberIndexDict = {};
  const result = [];

  for (let i = 0; i <= nums.length; i++) {
    const n = nums[i];
    const ii = numberIndexDict[target - n];

    if (ii !== undefined) {
      result.push(i, ii);
      continue;
    }

    numberIndexDict[n] = i;
  }

  return result;
};
