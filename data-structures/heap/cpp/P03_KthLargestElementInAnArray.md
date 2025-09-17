### LeetCode Problem Link: [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)

```cpp
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        priority_queue<int, vector<int>, greater<int>> minHeap;
        for(int num : nums) {
            minHeap.push(num);
            if(minHeap.size() > k) {
                minHeap.pop();
            }
        }

        return minHeap.top();
    }
};
```

#### Time Complexity: `O(NlogK)`.

#### Space Compelxity: `O(K)`, because we are using (extra space) i.e. MinHeap to store ~K elements.
