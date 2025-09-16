### LeetCode Problem Link: [1046. Last Stone Weight](https://leetcode.com/problems/last-stone-weight/description)

```java
class Solution {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
        for(int stone: stones) {
            maxHeap.add(stone);
        }

        while(maxHeap.size() > 1) {
            int largest = maxHeap.poll();
            int sLargest = maxHeap.poll();
            if(largest != sLargest) {
                maxHeap.add(largest - sLargest);
            }
        }

        return maxHeap.size() == 1 ? maxHeap.poll() : 0;
    }
}
```

#### Time Complexity: `O(NlogN)`.

#### Space Compelxity: `O(N)`, because we are using (extra space) i.e. MaxHeap to store all the stones.
