### LeetCode Problem Link: [1383. Maximum Performance of a Team](https://leetcode.com/problems/maximum-performance-of-a-team/)

```cpp
class Solution {
public:
    int maxPerformance(int n, vector<int>& speed, vector<int>& efficiency, int k) {
        vector<pair<int, int>> engineers;
        for(int i = 0; i < n; i++) {
            engineers.push_back({speed[i], efficiency[i]});
        }

        sort(engineers.begin(), engineers.end(), [](const pair<int, int>& a, const pair<int, int>& b) {
            return a.second > b.second;
        });

        priority_queue<int, vector<int>, greater<int>> minHeap;

        long long speedSum = 0;
        long long maxPerformance = INT_MIN;
        for(auto& engineer : engineers) {
            int eSpeed = engineer.first;
            int eEfficiency = engineer.second;
            speedSum += eSpeed;
            minHeap.push(eSpeed);
            maxPerformance = max(speedSum * eEfficiency, maxPerformance);
            if(minHeap.size() == k) {
                speedSum -= minHeap.top();
                minHeap.pop();
            }
        }

        return (int) (maxPerformance % 1000000007);
    }
};
```

#### Time Complexity: `O(NlogN)`.

#### Space Compelxity: `O(N)`, because we are using (extra space) i.e. engineers array to store engineer's speed and efficiency.
