### LeetCode Problem Link: [1095. Find in Mountain Array](https://leetcode.com/problems/find-in-mountain-array/description)

```java
class Solution {
    private int findPeak(MountainArray mountainArr) {
        int n = mountainArr.length();
        int low = 1, high = n - 2;
        while(low <= high) {
            int mid = low + (high - low)/2;
            int midElement = mountainArr.get(mid);
            int leftElement = mountainArr.get(mid - 1);
            if(midElement > leftElement
                    && midElement > mountainArr.get(mid + 1)) {
                return mid;
            }
            if(midElement > leftElement) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    }

    private int binarySearchAsc(int target, MountainArray mountainArr, int low, int high) {
        while(low <= high) {
            int mid = low + (high - low)/2;
            int midElement = mountainArr.get(mid);
            if(midElement == target) return mid;
            if(midElement > target) high = mid - 1;
            else low = mid + 1;
        }
        return -1;
    }

    private int binarySearchDesc(int target, MountainArray mountainArr, int low, int high) {
        while(low <= high) {
            int mid = low + (high - low)/2;
            int midElement = mountainArr.get(mid);
            if(midElement == target) return mid;
            if(midElement > target) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }

    public int findInMountainArray(int target, MountainArray mountainArr) {
        int peakIndex = findPeak(mountainArr);
        if(mountainArr.get(peakIndex) == target) {
            return peakIndex;
        }

        int index = binarySearchAsc(target, mountainArr, 0, peakIndex - 1);
        if(index != -1) {
            return index;
        }
        index = binarySearchDesc(target, mountainArr, peakIndex + 1, mountainArr.length() - 1);
        return index;
    }
}
```

#### Time Complexity: `O(logN)`.

#### Space Compelxity: `O(1)`
