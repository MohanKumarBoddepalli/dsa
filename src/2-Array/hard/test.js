/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/submissions/1205163392/  
 * TODO
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */



var findMedianSortedArrays = function (nums1, nums2) {
  let combinedArray = nums1;
  const temp = [...nums2];
  let num2Key = "";
  let j;
  for (let i = 0; i < temp.length; i++) {
    num2Key = temp[i];
    for (j = 0; j < nums1.length; j++) {
      if (nums1[j] > num2Key) {
        combinedArray.splice(j, 0, num2Key);
        nums2.shift();
        j = j - 1;
        break;
      } else if ( j === nums1.length -1) {
        combinedArray = [...combinedArray, ...nums2]
      }
    }
  }
  const quotient = Math.floor(combinedArray.length / 2);
  console.log(combinedArray);
  return (result =
    combinedArray.length % 2 != 0
      ? combinedArray[quotient]
      : (combinedArray[quotient - 1] + combinedArray[quotient]) / 2);
};

// console.log(findMedianSortedArrays([1,2], [3, 4]));
//console.log(findMedianSortedArrays([1,3], [2]));
 console.log(findMedianSortedArrays([1,3], [2, 7]));
