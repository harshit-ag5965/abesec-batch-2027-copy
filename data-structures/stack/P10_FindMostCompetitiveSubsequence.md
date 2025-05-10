### LeetCode Problem Link: [1673. Find the Most Competitive Subsequence](https://leetcode.com/problems/find-the-most-competitive-subsequence/description/)

```java
class Solution {
    public int[] mostCompetitive(int[] nums, int k) {
        Stack<Integer> stack = new Stack<>();
        int removeable = nums.length - k;

        for(int i = 0; i < nums.length; i++) {
            int curr = nums[i];
            while(!stack.isEmpty() && stack.peek() > curr && removeable > 0) {
                stack.pop();
                removeable -= 1;
            }

            stack.push(curr);
        }

        while(removeable > 0) {
            stack.pop();
            removeable -= 1;
        }

        int[] ans = new int[k];
        for(int i = k - 1; i >= 0; i--) {
            ans[i] = stack.pop();
        }

        return ans;
    }
}
```

#### Time Complexity: `O(N)`, N is the length of the nums array.

#### Space Compelxity: `O(N)`, using stack to store elements.
