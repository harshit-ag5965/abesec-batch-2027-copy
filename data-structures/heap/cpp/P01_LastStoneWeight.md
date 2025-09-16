### LeetCode Problem Link: [1046. Last Stone Weight](https://leetcode.com/problems/last-stone-weight/description)

```java
class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
        priority_queue<int> maxHeap;
        for(int stone : stones) {
            maxHeap.push(stone);
        }
        while(maxHeap.size() > 1) {
            int largest = maxHeap.top();
            maxHeap.pop();
            int sLargest = maxHeap.top();
            maxHeap.pop();
            if(largest != sLargest) {
                maxHeap.push(largest - sLargest);
            }
        }
        return maxHeap.size() == 1 ? maxHeap.top() : 0;
    }
};
```

#### Time Complexity: `O(NlogN)`.

#### Space Compelxity: `O(N)`, because we are using (extra space) i.e. MaxHeap to store all the stones.
