### LeetCode Problem Link: [Maximum Value of K Coins From Piles](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/)

```java
class Solution {
    private int solve(List<List<Integer>> piles, int index, int k) {
        if (index == piles.size() || k == 0) {
            return 0;
        }

        int max = solve(piles, index + 1, k);

        int currSum = 0;
        for (int i = 0; i < Math.min(piles.get(index).size(), k); i++) {
            currSum += piles.get(index).get(i);
            max = Math.max(max, currSum + solve(piles, index + 1, k - (i + 1)));
        }

        return max;
    }

    public int maxValueOfCoins(List<List<Integer>> piles, int k) {
        return solve(piles, 0, k);
    }
}
```

#### Time Complexity: `O(2^N)`

#### Space Compelxity: `O(N)`, using stack to store activation records while performing recursion.
