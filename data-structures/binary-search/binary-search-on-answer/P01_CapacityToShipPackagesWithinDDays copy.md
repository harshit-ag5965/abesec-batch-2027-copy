### LeetCode Problem Link: [1011. Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/)

```java
class Solution {
    private boolean canBeShipped(int shipCapacity, int[] weights, int days) {
        int sum = 0, d = 1;
        for(int weight : weights) {
            if(sum + weight <= shipCapacity) {
                sum += weight;
            } else {
                d += 1;
                sum = weight;
            }
        }

        return d <= days;
    }
    public int shipWithinDays(int[] weights, int days) {
        int low = 0, high = 0;
        for(int weight : weights) {
            low = Math.max(low, weight);
            high += weight;
        }

        while(low <= high) {
            int shipCapacity = low + (high - low)/2;
            if(canBeShipped(shipCapacity, weights, days)) {
                high = shipCapacity - 1;
            } else {
                low = shipCapacity + 1;
            }
        }

        return low;
    }
}
```

#### Time Complexity: `O(NlogN)`.

#### Space Compelxity: `O(1)`
