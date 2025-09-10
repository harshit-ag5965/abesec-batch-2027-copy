### LeetCode Problem Link: [2187. Minimum Time to Complete Trips](https://leetcode.com/problems/minimum-time-to-complete-trips/description)

```java
class Solution {

    private boolean canTripsBeCompleted(long randomTime, int[] time, int totalTrips) {
        long tripCount = 0;
        for(int tripTime : time) {
            tripCount += (randomTime/tripTime);
        }
        return tripCount >= totalTrips;
    }

    public long minimumTime(int[] time, int totalTrips) {

        long low = Integer.MAX_VALUE, high = 0;
        for(int t : time) {
            low = Math.min(low, t);
        }
        high = low * totalTrips;


        while(low <= high) {
            long randomTime = low + (high - low)/2;
            if(canTripsBeCompleted(randomTime, time, totalTrips)) {
                high = randomTime - 1;
            } else {
                low = randomTime + 1;
            }
        }

        return low;
    }
}
```

#### Time Complexity: `O(NlogN)`.

#### Space Compelxity: `O(1)`
