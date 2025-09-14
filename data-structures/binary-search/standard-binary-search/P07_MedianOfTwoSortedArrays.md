### LeetCode Problem Link: [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/description/)

```java
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int m = nums1.length;
        int n = nums2.length;
        if(m > n) return findMedianSortedArrays(nums2, nums1);

        int low = 0, high = m;
        int partition = (m + n + 1)/2;
        while(low <= high) {
            int mid1 = low + (high - low)/2;
            int mid2 = partition - mid1;

            int l1 = ((mid1 - 1) >= 0) ? nums1[mid1 - 1] : Integer.MIN_VALUE;
            int l2 = ((mid2 - 1) >= 0) ? nums2[mid2 - 1] : Integer.MIN_VALUE;
            int r1 = mid1 < m ? nums1[mid1] : Integer.MAX_VALUE;
            int r2 = mid2 < n ? nums2[mid2] : Integer.MAX_VALUE;

            if(l1 <= r2 && l2 <= r1) {
                if((m + n) % 2 == 1) {
                    return Math.max(l1, l2);
                }
                return (Math.max(l1, l2) + Math.min(r1, r2))/2.0;
            }
            if(l2 > r1) low = mid1 + 1;
            else high = mid1 - 1;
        }

        return -1;

    }
}
```

#### Time Complexity: `O(log(min(m, n)))`.

#### Space Compelxity: `O(1)`
