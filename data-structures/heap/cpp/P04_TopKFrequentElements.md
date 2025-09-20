### LeetCode Problem Link: [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/description)

```cpp
class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> minHeap;
        unordered_map<int, int> freqMap;

        for(int num : nums) {
            freqMap[num]++;
        }

        for(auto& entry : freqMap) {
            minHeap.push({entry.second, entry.first});
            if(minHeap.size() > k) {
                minHeap.pop();
            }
        }

        vector<int> ans(k);
        int i = 0;
        while(!minHeap.empty()) {
            ans[i++] = minHeap.top().second;
            minHeap.pop();
        }

        return ans;
    }
};
```

#### Time Complexity: `O(NlogK)`.

#### Space Compelxity: `O(N)`, because we are using (extra space) i.e. HashMap to store N elements.
