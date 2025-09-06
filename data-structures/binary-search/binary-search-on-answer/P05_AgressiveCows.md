### GFG Link: [Aggressive Cows](https://www.geeksforgeeks.org/problems/aggressive-cows/1)

```java
class Solution {
    private boolean canBeAssigned(int distance, int[] stalls, int k) {
        int countCows = 1;
        int lastPlacedCow = stalls[0];
        for(int i = 1; i < stalls.length; i++) {
            if(stalls[i] - lastPlacedCow >= distance) {
                countCows += 1;
                lastPlacedCow = stalls[i];
            }
        }

        return countCows >= k;

    }

    public int aggressiveCows(int[] stalls, int k) {
        Arrays.sort(stalls);
        int n = stalls.length;
        int low = 1, high = stalls[n - 1] - stalls[0];

        while(low <= high) {
            int distance = low + (high - low)/2;
            if(canBeAssigned(distance, stalls, k)) {
                low = distance + 1;
            } else {
                high = distance - 1;
            }
        }
        return high;
    }
}
```

#### Time Complexity: `O(NlogN)`.

#### Space Compelxity: `O(1)`
