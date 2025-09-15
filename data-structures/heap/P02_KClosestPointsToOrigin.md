### LeetCode Problem Link: [973. K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/description)

```java
class Point {
    int distance;
    int x;
    int y;
    public Point(int distance, int x, int y) {
        this.distance = distance;
        this.x = x;
        this.y = y;
    }
}
class Solution {
    public int[][] kClosest(int[][] points, int k) {
        PriorityQueue<Point> maxHeap =
                new PriorityQueue<>((a, b) -> b.distance - a.distance);

        for(int[] point : points) {
            int x = point[0];
            int y = point[1];
            int distance = x * x + y * y;
            maxHeap.add(new Point(distance, x, y));
            if(maxHeap.size() > k) {
                maxHeap.poll();
            }
        }

        int[][] ans = new int[k][2];
        int i = 0;
        while(!maxHeap.isEmpty()) {
            Point p = maxHeap.poll();
            ans[i] = new int[]{p.x, p.y};
            i += 1;
        }

        return ans;
    }
}
```

#### Time Complexity: `O(NlogK)`.

#### Space Compelxity: `O(K)`, because we are using (extra space) i.e. MaxHeap to store ~K points.
