/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
    var result = [];
    var left = 0;
    var right = nums.length - 1;
    while (left <= right) {
        if (Math.pow(nums[left], 2) >= Math.pow(nums[right], 2)) {
            result.unshift(Math.pow(nums[left], 2));
            left++;
        }
        else {
            result.unshift(Math.pow(nums[right], 2));
            right--;
        }
    }
    return result;
}
console.log(sortedSquares([-4, -1, 0, 3, 10]));
