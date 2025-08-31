### LeetCode Problem Link: [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/description/)

```java
class Solution {
    private boolean solve(int[] arr, int i, int sum) {

        if(sum == 0) {
            return true;
        }

        if(i >= arr.length || sum < 0) {
            return false;
        }

        boolean left = solve(arr, i + 1, sum - arr[i]);
        boolean right = solve(arr, i + 1, sum);

        return left || right;
    }

    public boolean canPartition(int[] nums) {
        int target = Arrays.stream(nums).sum();
        if(target % 2 != 0) return false;
        return solve(nums, 0, target/2);
    }
}
```

#### Time Complexity: `O(2^N)`.

#### Space Compelxity: `O(N)`, using stack to store activation records while performing recursion.
