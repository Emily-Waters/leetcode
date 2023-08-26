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

    const iTargetComplement = target - iNum;
    const jTargetComplement = target - jNum;

    if (numberIndexDict[iTargetComplement] !== undefined) {
      return [i, numberIndexDict[iTargetComplement]];
    }

    if (numberIndexDict[jTargetComplement] !== undefined) {
      return [j, numberIndexDict[jTargetComplement]];
    }

    numberIndexDict[iNum] = i;
    numberIndexDict[jNum] = j;

    j--;
  }
};
