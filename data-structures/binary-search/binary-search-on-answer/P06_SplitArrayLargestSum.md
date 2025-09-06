### LeetCode Problem Link: [410. Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/description)

```java
class Solution {
    private boolean canBeSplitted(int sum, int[] nums, int k) {
        int currSum = 0, splits = 1;
        for(int num : nums) {
            if(currSum + num <= sum) {
                currSum += num;
            } else {
                splits += 1;
                currSum = num;
            }
        }

        return splits <= k;
    }
    public int splitArray(int[] nums, int k) {
        int low = 0, high = 0;
        for(int num : nums) {
            low = Math.max(low, num);
            high += num;
        }

        while(low <= high) {
            int sum = low + (high - low)/2;
            if(canBeSplitted(sum, nums, k)) {
                high = sum - 1;
            } else {
                low = sum + 1;
            }
        }

        return low;
    }
}
```

#### Time Complexity: `O(NlogN)`.

#### Space Compelxity: `O(1)`
