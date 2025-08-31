### GFG Problem Link: [Perfect Sum](https://www.geeksforgeeks.org/problems/perfect-sum-problem5633/1)

```java
class Solution {
    static int solve(int[] arr, int i, int sum) {

        if(i == arr.length) {
            return (sum == 0) ? 1 : 0;
        }

        int left = solve(arr, i + 1, sum - arr[i]);
        int right = solve(arr, i + 1, sum);

        return left + right;
    }

    public int perfectSum(int[] nums, int target) {
        return solve(nums, 0, target);
    }
}
```

#### Time Complexity: `O(2^N)`.

#### Space Compelxity: `O(N)`, using stack to store activation records while performing recursion.
