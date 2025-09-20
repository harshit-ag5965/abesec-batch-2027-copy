### LeetCode Problem Link: [1642. Furthest Building You Can Reach](https://leetcode.com/problems/furthest-building-you-can-reach/description/)

```cpp
class Solution {
public:
    int furthestBuilding(vector<int>& heights, int bricks, int ladders) {
        priority_queue<int, vector<int>, greater<int>> minHeap;

        for(int i = 0; i < heights.size() - 1; i++) {
            int diff = heights[i + 1] - heights[i];
            if(diff > 0) {
                minHeap.push(diff);
                if(minHeap.size() > ladders) {
                    if(bricks < minHeap.top()) {
                        return i;
                    }
                    bricks -= minHeap.top();
                    minHeap.pop();
                }
            }
        }

        return heights.size() - 1;
    }
};
```

#### Time Complexity: `O(NlogN)`.

#### Space Compelxity: `O(N)`, because we are using (extra space) i.e. MaxHeap to store the difference of heights.
