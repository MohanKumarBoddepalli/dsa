/**
 * 14. Longest Common Prefix
 * link: https://leetcode.com/problems/longest-common-prefix/description/
 *
 * Easy
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 */

/**
 * Get the first word of the string in the array
 * loop the first word each letter based on first letter length
 * -> sub loop find with all other words with first loop letter index and find all matches
 * -> if not matches make isMatched to false and exit the loop and
 * -> return the response
 */

const findPrefix = (strings) => {
  let outputPrefix = "";
  let matchedLetter = "";
  let isMatched = true;
  for (let i = 0; i <= strings[0].length; i++) {
    matchedLetter = strings[0][i];
    for (let j = 1; j < strings.length; j++) {
      if (matchedLetter != strings[j][i]) {
        isMatched = false;
        break;
      }
    }
    if (!isMatched) {
      break;
    } else {
      outputPrefix += matchedLetter || '';
    }
  }
  return outputPrefix;
};

findPrefix(["flinger", "flissss", "fliqeqweq"]);
