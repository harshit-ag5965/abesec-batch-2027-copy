### LeetCode Problem Link: [Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/description/)

```java
class Solution {
    private int solve(String[] strs, int index, int m, int n) {
        if (index == strs.length) {
            return 0;
        }

        int zeros = 0, ones = 0;
        for (char c : strs[index].toCharArray()) {
            if (c == '0') zeros++;
            else ones++;
        }

        int skip = solve(strs, index + 1, m, n);

        int take = 0;
        if (m - zeros >= 0 && n - ones >= 0) {
            take = 1 + solve(strs, index + 1, m - zeros, n - ones);
        }

        return Math.max(skip, take);
    }

    public int findMaxForm(String[] strs, int m, int n) {
        return solve(strs, 0, m, n);
    }
}
```

#### Time Complexity: `O(2^(N + M))`, where N is the number of string and M is the max of size of each string.

#### Space Compelxity: `O(N)`, using stack to store activation records while performing recursion.
