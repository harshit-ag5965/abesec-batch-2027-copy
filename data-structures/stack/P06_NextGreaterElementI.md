### LeetCode Problem Link: [496. Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/description/)

```java
class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        Map<Integer, Integer> map = new HashMap<>();
        Stack<Integer> stack = new Stack<>();
        for(int i = nums2.length - 1; i >= 0; i--) {
            int curr = nums2[i];
            while(!stack.isEmpty() && stack.peek() <= curr) {
                stack.pop();
            }
            if(stack.isEmpty()) {
                map.put(curr, -1);
            } else {
                map.put(curr, stack.peek());
            }
            stack.push(curr);
        }

        int[] ans = new int[nums1.length];
        for(int i = 0; i < nums1.length; i++) {
            ans[i] = map.get(nums1[i]);
        }

        return ans;
    }
}
```

#### Time Complexity: `O(N + M)`, N is the length of the nums2 and M is the length of nums1.

#### Space Compelxity: `O(N)`, using stack and map.
