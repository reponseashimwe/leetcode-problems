/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = (s) => {
    let charIndexMap = {};
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        if (s[end] in charIndexMap && charIndexMap[s[end]] >= start) {
            start = charIndexMap[s[end]] + 1;
        }

        charIndexMap[s[end]] = end;
        let currentLength = end - start + 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}