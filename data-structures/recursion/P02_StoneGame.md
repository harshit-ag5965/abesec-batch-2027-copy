### LeetCode Problem Link: [877. Stone Game](https://leetcode.com/problems/stone-game/description/)

```java
class Solution {

    private int solve(int l, int r, int[] piles) {
        if(l == r) {
            return piles[l];
        }
        int left = piles[l] - solve(l + 1, r, piles);
        int right = piles[r] - solve(l, r - 1, piles);
        return Math.max(left, right);
    }

    public boolean stoneGame(int[] piles) {
        int score = solve(0, piles.length - 1, piles);
        if(score > 0) {
            return true;
        }
        return false;
    }
}
```

#### Time Complexity: `O(2^N)`.

#### Space Compelxity: `O(N)`, using stack to store activation records while performing recursion.
