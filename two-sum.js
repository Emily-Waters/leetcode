/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let j = nums.length - 1;
  const numberIndexDict = {};

  for (let i = 0; i <= nums.length; i++) {
    const iNum = nums[i];
    const jNum = nums[j];

    const ij = iNum + jNum;

    if (ij === target) {
      return [i, j];
    }

    const ii = numberIndexDict[target - iNum];
    const jj = numberIndexDict[target - jNum];

    if (ii !== undefined) {
      return [i, ii];
    }

    if (jj !== undefined) {
      return [j, jj];
    }

    numberIndexDict[iNum] = i;
    numberIndexDict[jNum] = j;

    j--;
  }
};
