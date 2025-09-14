### LeetCode Problem Link: [852. Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array)

```java
class Solution {
    public int peakIndexInMountainArray(int[] nums) {
        int n = nums.length;

        int low = 1, high = n - 2;
        while(low <= high) {
            int mid = low + (high - low)/2;
            if(nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
                return mid;
            }
            if(nums[mid] > nums[mid - 1]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    }
}
```

#### Time Complexity: `O(logN)`.

#### Space Compelxity: `O(1)`
