### LeetCode Problem Link: [2226. Maximum Candies Allocated to K Children](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/)

```java
class Solution {
    private boolean canBeDistributed(long randomCandy, int[] candies, long k) {
        long childrenCount = 0;
        for(int candy : candies) {
            childrenCount += (candy/randomCandy);
        }
        return childrenCount >= k;
    }

    public int maximumCandies(int[] candies, long k) {
        int low = 1, high = 0;
        for(int candy : candies) {
            high = Math.max(high, candy);
        }


        while(low <= high) {
            int randomCandies = low + (high - low)/2;
            if(canBeDistributed(randomCandies, candies, k)) {
                low = randomCandies + 1;
            } else {
                high = randomCandies - 1;
            }
        }

        return high;
    }
}
```

#### Time Complexity: `O(NlogN)`.

#### Space Compelxity: `O(1)`
