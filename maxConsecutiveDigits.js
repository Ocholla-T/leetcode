/**
 * @param {number[]} nums
 * @return {number}
 */
let findMaxConsecutiveOnes = function (nums) {
  let currentMax = 0;
  let lastMax = 0;

  nums.forEach((num) => {
    if (num) {
      currentMax += 1;
    } else {
      lastMax = Math.max(lastMax, currentMax);
      currentMax = 0;
    }
  });

  return Math.max(lastMax, currentMax);
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
