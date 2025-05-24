### LeetCode Problem Link: [198. House Robber](https://leetcode.com/problems/house-robber/description/)

```java
class Solution {
    private int solve(int i, int[] nums) {

        if(i >= nums.length) {
            return 0;
        }

        int robbed = nums[i] + solve(i + 2, nums);
        int notRobbed = solve(i + 1, nums);

        return Math.max(robbed, notRobbed);
    }

    public int rob(int[] nums) {
        return solve(0, nums);
    }
}
```

#### Time Complexity: `O(2^N)`.

#### Space Compelxity: `O(N)`, using stack to store activation records while performing recursion.
