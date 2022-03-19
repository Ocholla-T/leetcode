/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums: number[]): number[] {
  const result: number[] = [];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] ** 2 >= nums[right] ** 2) {
      result.unshift(nums[left] ** 2);
      left++;
    } else {
      result.unshift(nums[right] ** 2);
      right--;
    }
  }
  return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
