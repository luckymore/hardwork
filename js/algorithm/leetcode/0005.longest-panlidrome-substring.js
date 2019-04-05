/**
 * Approach 5: Manacher's Algorithm https://en.wikipedia.org/wiki/Longest_palindromic_substring#Manacher's_algorithm
 * @param {string} s
 * @return {string}
 *
 * @example 
 * longestPalindrome("babadda")
 * longestPalindrome("babada")
 */
var longestPalindrome = function(s) {
    if (s == null || s.length < 1) return "";
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i); // 奇数回文
        let len2 = expandAroundCenter(s, i, i + 1); // 偶数回文
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = Math.ceil(i - (len - 1) / 2);
            end = Math.floor(i + len / 2);
        }
        console.log(len1, len2)
    }
    return s.substring(start, end + 1);
}

function expandAroundCenter( s, left, right) {
    let L = left, R = right;
    while (L >= 0 && R < s.length && s[L] == s[R]) {
        L--;
        R++;
    }
    return R - L - 1;
}
