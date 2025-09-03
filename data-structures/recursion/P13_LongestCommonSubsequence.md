### LeetCode Problem Link: [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/description/)

```java
class Solution {

    private int solve(String s1, String s2, int i, int j) {

        if(i == s1.length() || j == s2.length()) {
            return 0;
        }

        if(s1.charAt(i) == s2.charAt(j))
            return 1 + solve(s1, s2, i + 1, j + 1);

        int left = solve(s1, s2, i + 1, j);
        int right = solve(s1, s2, i, j + 1);
        return Math.max(left, right);
    }

    public int longestCommonSubsequence(String text1, String text2) {
        return solve(text1, text2, 0, 0);
    }
}
```

#### Time Complexity: `O(2^(max(M, N)))`, where M is the length of text1, and N is the length of text2.

#### Space Compelxity: `O(max(M, N))`, using stack to store activation records while performing recursion.
