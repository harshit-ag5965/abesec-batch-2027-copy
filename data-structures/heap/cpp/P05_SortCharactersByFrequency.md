### LeetCode Problem Link: [451. Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/)

```cpp
class Solution {
public:
    string frequencySort(string s) {
        unordered_map<char, int> freqMap;
        for(char ch : s) {
            freqMap[ch]++;
        }

        priority_queue<pair<int, char>> maxHeap;

        for(auto& entry : freqMap) {
            maxHeap.push({entry.second, entry.first});
        }

        string result = "";
        while(!maxHeap.empty()) {
            auto entry = maxHeap.top();
            maxHeap.pop();
            char ch = entry.second;
            int freq = entry.first;
            for(int i = 0; i < freq; i++) {
                result += ch;
            }
        }

        return result;
    }
};
```

#### Time Complexity: `O(NlogN)`.

#### Space Compelxity: `O(N)`, because we are using (extra space) i.e. HashMap to store N elements.
