### GFG Problem Link: [Subset Sum](https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1)

```java
class Solution {

    static Boolean solve(int[] arr, int i, int sum) {

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

    static Boolean isSubsetSum(int arr[], int sum) {
        return solve(arr, 0, sum);
    }
}
```

#### Time Complexity: `O(2^N)`.

#### Space Compelxity: `O(N)`, using stack to store activation records while performing recursion.
