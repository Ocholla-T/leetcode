/**
 * @param {number[]} nums
 * @return {number}
 */
function findNumbers(nums) {
  let count = 0;

  for (let index = 0; index < nums.length; index++) {
    let digitsInNum = Math.floor(Math.log10(nums[index]) + 1);

    if (!(digitsInNum % 2)) {
      count += 1;
    }
  }

  return count;
}

console.log(findNumbers([12, 345, 2, 6, 7896]));
