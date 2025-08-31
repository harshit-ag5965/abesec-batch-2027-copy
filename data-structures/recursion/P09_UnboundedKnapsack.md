### GFG Problem Link: [Knapsack with Duplicate Items](https://www.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1)

```java
class Solution {
    static int solve(int W, int[] val, int[] wt, int i) {

        if(W == 0 || i >= val.length) {
            return 0;
        }

        int left = Integer.MIN_VALUE;
        if(wt[i] <= W) {
            left = val[i] + solve(W - wt[i], val, wt, i);
        }
        int right = solve(W, val, wt, i + 1);

        return Math.max(left, right);
    }

    static int knapSack(int val[], int wt[], int capacity) {
        return solve(capacity, val, wt, 0);
    }
}
```

#### Time Complexity: `O(2^N)`.

#### Space Compelxity: `O(N)`, using stack to store activation records while performing recursion.
