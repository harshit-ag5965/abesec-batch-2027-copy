### LeetCode Problem Link: [871. Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/)

```cpp
class Solution {
public:
    int minRefuelStops(int target, int startFuel, vector<vector<int>>& stations) {
        int currentPosition = startFuel;
        int stops = 0;

        priority_queue<int> maxHeap;
        for(auto& station : stations) {
            int position = station[0];
            int fuel = station[1];
            while(currentPosition < position) {
                if(maxHeap.empty()) return -1;
                currentPosition += maxHeap.top();
                maxHeap.pop();
                stops += 1;
            }
            maxHeap.push(fuel);
        }
        while(currentPosition < target) {
            if(maxHeap.empty()) return -1;
            currentPosition += maxHeap.top();
            maxHeap.pop();
            stops += 1;
        }
        return stops;
    }
};
```

#### Time Complexity: `O(NlogN)`.

#### Space Compelxity: `O(N)`, because we are using (extra space) i.e. MaxHeap to store N elements.
