### LeetCode Problem Link: [692. Top K Frequent Words](https://leetcode.com/problems/sort-characters-by-frequency/)

```cpp
struct Comparator {
    bool operator()(pair<string, int> &p1, pair<string, int> &p2) {
        if(p1.second == p2.second) {
            return p1.first < p2.first;
        }
        return p1.second > p2.second;
    }
};
class Solution {
public:
    vector<string> topKFrequent(vector<string>& words, int k) {
        unordered_map<string, int> freqMap;
        for(string word : words) {
            freqMap[word] += 1;
        }

        priority_queue<pair<string, int>, vector<pair<string, int>>, Comparator> minHeap;
        for(auto pair : freqMap) {
            minHeap.push(pair);
            if(minHeap.size() > k) {
                minHeap.pop();
            }
        }

        vector<string> result;
        while(!minHeap.empty()) {
            result.push_back(minHeap.top().first);
            minHeap.pop();
        }

        reverse(result.begin(), result.end());

        return result;

    }
};
```

#### Time Complexity: `O(NlogK)`.

#### Space Compelxity: `O(N)`, because we are using (extra space) i.e. HashMap to store N elements.
