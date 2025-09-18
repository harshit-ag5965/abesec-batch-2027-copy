### LeetCode Problem Link: [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/description)

```java
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        PriorityQueue<Map.Entry<Integer, Integer>> minHeap = new PriorityQueue<>((e1, e2) -> e1.getValue() - e2.getValue());
        Map<Integer, Integer> freqMap = new HashMap<>();

        for(int num : nums) {
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }

        for(Map.Entry<Integer, Integer> entry : freqMap.entrySet()) {
            minHeap.offer(entry);
            if(minHeap.size() > k) {
                minHeap.poll();
            }
        }

        int[] ans = new int[k];
        int i = 0;
        while(!minHeap.isEmpty()) {
            ans[i++] = minHeap.poll().getKey();
        }

        return ans;
    }
}
```

#### Time Complexity: `O(NlogK)`.

#### Space Compelxity: `O(N)`, because we are using (extra space) i.e. HashMap to store N elements.
