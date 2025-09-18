### LeetCode Problem Link: [692. Top K Frequent Words](https://leetcode.com/problems/sort-characters-by-frequency/)

```java
class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        Map<String, Integer> freqMap = new HashMap<>();
        for(String word : words) {
            freqMap.put(word, freqMap.getOrDefault(word, 0) + 1);
        }

        PriorityQueue<Map.Entry<String, Integer>> minHeap
            = new PriorityQueue<>(
                (a, b) -> a.getValue() != b.getValue() ?
                a.getValue() - b.getValue() : b.getKey().compareTo(a.getKey())
            );

        for(Map.Entry<String, Integer> entry : freqMap.entrySet()) {
            minHeap.add(entry);
            if(minHeap.size() > k) {
                minHeap.poll();
            }
        }

        List<String> ans = new ArrayList<>();
        while(!minHeap.isEmpty()) {
            Map.Entry<String, Integer> entry = minHeap.poll();
            ans.add(entry.getKey());
        }

        Collections.reverse(ans);

        return ans;
    }
}
```

#### Time Complexity: `O(NlogK)`.

#### Space Compelxity: `O(N)`, because we are using (extra space) i.e. HashMap to store N elements.
