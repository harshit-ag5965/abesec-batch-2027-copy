### LeetCode Problem Link: [871. Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/)

```java
class Solution {
    public int minRefuelStops(int target, int startFuel, int[][] stations) {
        int currentPosition = startFuel;
        int stops = 0;

        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
        for(int[] station : stations) {
            int position = station[0];
            int fuel = station[1];
            while(currentPosition < position) {
                if(maxHeap.isEmpty()) return -1;
                currentPosition += maxHeap.poll();
                stops += 1;
            }
            maxHeap.add(fuel);
        }
        while(currentPosition < target) {
            if(maxHeap.isEmpty()) return -1;
            currentPosition += maxHeap.poll();
            stops += 1;
        }
        return stops;
    }
}
```

#### Time Complexity: `O(NlogN)`.

#### Space Compelxity: `O(N)`, because we are using (extra space) i.e. MaxHeap to store N elements.
