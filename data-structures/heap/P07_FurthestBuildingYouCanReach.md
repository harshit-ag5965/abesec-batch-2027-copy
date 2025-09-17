### LeetCode Problem Link: [1642. Furthest Building You Can Reach](https://leetcode.com/problems/furthest-building-you-can-reach/description/)

```java
class Solution {
    public int furthestBuilding(int[] heights, int bricks, int ladders) {
        PriorityQueue<Integer> minHeap =
            new PriorityQueue<>((a, b) -> a - b);

        for(int i = 0; i < heights.length - 1; i++) {
            int diff = heights[i + 1] - heights[i];
            if(diff > 0) {
                minHeap.add(diff);
                if(minHeap.size() > ladders) {
                    if(bricks < minHeap.peek()) {
                        return i;
                    }
                    bricks -= minHeap.poll();
                }
            }
        }

        return heights.length - 1;
    }
}
```

#### Time Complexity: `O(NlogN)`.

#### Space Compelxity: `O(N)`, because we are using (extra space) i.e. MaxHeap to store the difference of heights.
