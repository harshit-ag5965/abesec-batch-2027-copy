### LeetCode Problem Link: [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/description/)

## Using LCS

```java
class Solution {

    private int lcs(String s1, String s2, int i, int j) {

        if(i == s1.length() || j == s2.length()) {
            return 0;
        }

        if(s1.charAt(i) == s2.charAt(j))
            return 1 + solve(s1, s2, i + 1, j + 1);

        int left = solve(s1, s2, i + 1, j);
        int right = solve(s1, s2, i, j + 1);
        return Math.max(left, right);
    }

    public int minDistance(String word1, String word2) {
        int lcs = lcs(word1, word2, 0, 0);
        return word1.length() + word2.length() - 2 * lcs;
    }
}
```

## Without Using LCS

```java
class Solution {
    private int solve(String s1, String s2, int i, int j) {
        if(i == s1.length()) return s2.length() - j;

        if(j == s2.length()) return s1.length() - i;

        if(s1.charAt(i) == s2.charAt(j))
            return solve(s1, s2, i + 1, j + 1);

        int left = solve(s1, s2, i + 1, j);
        int right = solve(s1, s2, i, j + 1);
        return 1 + Math.min(left, right);
    }

    public int minDistance(String word1, String word2) {
        return solve(word1, word2, 0, 0);
    }
}
```

#### Time Complexity: `O(2^(max(M, N)))`, where M is the length of text1, and N is the length of text2.

#### Space Compelxity: `O(max(M, N))`, using stack to store activation records while performing recursion.
