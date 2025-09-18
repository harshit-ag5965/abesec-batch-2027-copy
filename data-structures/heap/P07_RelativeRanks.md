### LeetCode Problem Link: [506. Relative Ranks](https://leetcode.com/problems/relative-ranks/)

```java
class Pair {
    int score;
    int index;
    public Pair(int score, int index) {
        this.score = score;
        this.index = index;
    }
}

class Solution {
    public String[] findRelativeRanks(int[] score) {
        PriorityQueue<Pair> maxHeap =
            new PriorityQueue<>((p1, p2) -> p2.score - p1.score);

        for(int i = 0; i < score.length; i++) {
            maxHeap.add(new Pair(score[i], i));
        }

        String[] ans = new String[score.length];
        for(int rank = 1; rank <= score.length; rank++) {
            Pair pair = maxHeap.poll();
            int index = pair.index;
            if(rank == 1) {
                ans[index] = "Gold Medal";
            } else if(rank == 2) {
                ans[index] = "Silver Medal";
            } else if(rank == 3) {
                ans[index] = "Bronze Medal";
            } else {
                ans[index] = String.valueOf(rank);
            }
        }
        return ans;
    }
}
```

#### Time Complexity: `O(NlogN)`.

#### Space Compelxity: `O(N)`, because we are using (extra space) i.e. MaxHeap to store N elements.
