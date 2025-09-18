### LeetCode Problem Link: [451. Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/)

```java
class Solution {
    public String frequencySort(String s) {
        Map<Character, Integer> freqMap = new HashMap<>();
        for(char ch : s.toCharArray()) {
            freqMap.put(ch, freqMap.getOrDefault(ch, 0) + 1);
        }

        PriorityQueue<Map.Entry<Character, Integer>> maxHeap
            = new PriorityQueue<>((a, b) -> b.getValue() - a.getValue());

        for(Map.Entry<Character, Integer> entry : freqMap.entrySet()) {
            maxHeap.add(entry);
        }
        // maxHeap.addAll(freqMap.entrySet());

        StringBuilder str = new StringBuilder();
        while(!maxHeap.isEmpty()) {
            Map.Entry<Character, Integer> entry = maxHeap.poll();
            char ch = entry.getKey();
            int freq = entry.getValue();
            for(int i = 0; i < freq; i++) {
                str.append(ch);
            }
        }

        return str.toString();

    }
}
```

#### Time Complexity: `O(NlogN)`.

#### Space Compelxity: `O(N)`, because we are using (extra space) i.e. HashMap to store N elements.
