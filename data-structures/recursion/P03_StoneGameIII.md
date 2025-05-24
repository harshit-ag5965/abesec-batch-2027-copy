### LeetCode Problem Link: [1406. Stone Game III](https://leetcode.com/problems/stone-game-iii/description/)

```java
class Solution {
    private int solve(int i, int[] stoneValue) {

        if(i == stoneValue.length) return 0;

        int a, b, c;
        b = c = Integer.MIN_VALUE;
        a = stoneValue[i] - solve(i + 1, stoneValue);
        if(i + 1 < stoneValue.length) {
            b = stoneValue[i] + stoneValue[i + 1] - solve(i + 2, stoneValue);
        }
        if(i + 2 < stoneValue.length) {
            c = stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2] - solve(i + 3, stoneValue);
        }

        return Math.max(a, Math.max(b, c));
    }

    public String stoneGameIII(int[] stoneValue) {
        int score = solve(0, stoneValue);
        if(score > 0) {
            return "Alice";
        } else if(score == 0) {
            return "Tie";
        } else {
            return "Bob";
        }
    }
}
```

#### Time Complexity: `O(2^N)`.

#### Space Compelxity: `O(N)`, using stack to store activation records while performing recursion.
