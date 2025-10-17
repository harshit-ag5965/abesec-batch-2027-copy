### LeetCode Problem Link: [1383. Maximum Performance of a Team](https://leetcode.com/problems/maximum-performance-of-a-team/)

```java
public class Solution {
    public int maxPerformance(int n, int[] speed, int[] efficiency, int k) {
        int[][] engineers = new int[n][2];
        for(int i = 0; i < n; i++) {
            engineers[i][0] = speed[i];
            engineers[i][1] = efficiency[i];
        }

        Arrays.sort(engineers, (a, b) -> b[1] - a[1]);

        PriorityQueue<Integer> minHeap = new PriorityQueue<>((a, b) -> a - b);

        long speedSum = 0;
        long maxPerformance = Integer.MIN_VALUE;
        for(int[] engineer : engineers) {
            int eSpeed = engineer[0];
            int eEfficiency = engineer[1];
            speedSum += eSpeed;
            minHeap.add(eSpeed);
            maxPerformance = Math.max(speedSum * eEfficiency, maxPerformance);
            if(minHeap.size() == k) {
                speedSum -= minHeap.poll();
            }
        }

        return (int) (maxPerformance % 1000000007);
    }
}
```

#### Time Complexity: `O(NlogN)`.

#### Space Compelxity: `O(N)`, because we are using (extra space) i.e. engineers array to store engineer's speed and efficiency.
