### LeetCode Problem Link: [973. K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/description)

```java
class Point {
public:
    int distance;
    int x;
    int y;

    Point(int distance, int x, int y) {
        this->distance = distance;
        this->x = x;
        this->y = y;
    }
};

// Comparator for max-heap (larger distance has higher priority)
struct Compare {
    bool operator()(Point const& p1, Point const& p2) {
        return p1.distance < p2.distance; // max-heap based on distance
    }
};

class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
        priority_queue<Point, vector<Point>, Compare> maxHeap;

        for (vector<int> point : points) {
            int x = point[0];
            int y = point[1];
            int distance = x * x + y * y;
            maxHeap.push(Point(distance, x, y));
            if ((int)maxHeap.size() > k) {
                maxHeap.pop();
            }
        }

        vector<vector<int>> ansPoints;
        while (!maxHeap.empty()) {
            Point pt = maxHeap.top();
            ansPoints.push_back({pt.x, pt.y});
            maxHeap.pop();
        }

        return ansPoints;
    }
};
```

#### Time Complexity: `O(NlogK)`.

#### Space Compelxity: `O(K)`, because we are using (extra space) i.e. MaxHeap to store ~K points.
