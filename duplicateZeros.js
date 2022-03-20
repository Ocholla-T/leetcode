/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr) {
    for (var index = 0; index < arr.length; index++) {
        if (arr[index] === 0) {
            arr.splice(index + 1, 0, 0);
            arr.pop();
            index++;
        }
    }
}
console.log(duplicateZeros([1, 2, 3]));
