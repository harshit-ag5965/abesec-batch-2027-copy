### LeetCode Problem Link: [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

```java
class Solution {

    private int solve(int n) {
        if(n == 0 || n == 1) {
            return 1;
        }
        int ways = solve(n - 2) + solve(n - 1);
        return ways;
    }

    public int climbStairs(int n) {
        return solve(n);
    }
}
```

#### Time Complexity: `O(2^N)`.

#### Space Compelxity: `O(N)`, using stack to store activation records while performing recursion.
