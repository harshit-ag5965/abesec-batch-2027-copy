### LeetCode Problem Link: [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)

### Solution 1

```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        Arrays.sort(nums);
        return nums[nums.length - k];
    }
}
```

#### Time Complexity: `O(NlogN)`.

#### Space Compelxity: `O(1)`

### Solution 2

```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
        for(int num: nums) {
            maxHeap.add(num);
        }

        int ans = -1;
        while(k != 0) {
            ans = maxHeap.poll();
            k -= 1;
        }

        return ans;
    }
}
```

#### Time Complexity: `O(NlogN + KlogN)`.

#### Space Compelxity: `O(N)`, because we are using (extra space) i.e. MaxHeap to store all the numbers.

### Solution 3

```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>((a, b) -> a - b);
        for(int num : nums) {
            minHeap.add(num);
            if(minHeap.size() > k) {
                minHeap.poll();
            }
        }

        return minHeap.poll();
    }
}
```

#### Time Complexity: `O(NlogK)`.

#### Space Compelxity: `O(K)`, because we are using (extra space) i.e. MinHeap to store ~K elements.
