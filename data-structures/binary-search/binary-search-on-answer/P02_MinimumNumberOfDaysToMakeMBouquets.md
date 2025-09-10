### LeetCode Problem Link: [1482. Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description)

```java
class Solution {
    private boolean canBouqetsBeMade(int days, int[] bloomDay, int m, int k) {
        int bouquets = 0, count = 0;
        for(int f : bloomDay) {
            if(f <= days) {
                count += 1;
            } else {
                bouquets += (count / k);
                count = 0;
            }
        }

        bouquets += (count / k);
        return bouquets >= m;

    }
    public int minDays(int[] bloomDay, int m, int k) {
        if((long)m * k > bloomDay.length) {
            return -1;
        }
        int low = Integer.MAX_VALUE, high = 0;
        for(int flower : bloomDay) {
            low = Math.min(low, flower);
            high = Math.max(high, flower);
        }

        while(low <= high) {
            int days = low + (high - low)/2;
            if(canBouqetsBeMade(days, bloomDay, m, k)) {
                high = days - 1;
            } else {
                low = days + 1;
            }
        }

        return low;
    }
}
```

#### Time Complexity: `O(NlogN)`.

#### Space Compelxity: `O(1)`
