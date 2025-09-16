### LeetCode Problem Link: [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array)

```java
class Solution {
    private int findFirstOccurence(int[] nums, int target) {
        int low = 0, high = nums.length - 1;
        int firstOccurence = -1;

        while(low <= high) {
            int mid = low + (high - low)/2;
            if(nums[mid] == target) {
                firstOccurence = mid;
                high = mid - 1;
            } else if(nums[mid] > target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return firstOccurence;
    }

    private int findLastOccurence(int[] nums, int target) {
        int low = 0, high = nums.length - 1;
        int lastOccurence = -1;

        while(low <= high) {
            int mid = low + (high - low)/2;
            if(nums[mid] == target) {
                lastOccurence = mid;
                low = mid + 1;
            } else if(nums[mid] > target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return lastOccurence;
    }
    public int[] searchRange(int[] nums, int target) {
        int firstOccurence = findFirstOccurence(nums, target);
        if(firstOccurence == -1) return new int[]{-1, -1};
        int lastOccurence = findLastOccurence(nums, target);
        return new int[]{firstOccurence, lastOccurence};
    }
}
```

#### Time Complexity: `O(logN)`.

#### Space Compelxity: `O(1)`
