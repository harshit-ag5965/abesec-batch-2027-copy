### LeetCode Problem Link: [32. Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/description/)

```java
class Solution {
    public int longestValidParentheses(String s) {
        Stack<Integer> stack = new Stack<>();
        stack.push(-1);
        int maxLength = 0;
        for(int i = 0; i < s.length(); i++) {
            char curr = s.charAt(i);
            if(curr == '(') {
                stack.push(i);
            } else {
                stack.pop();
                if(stack.isEmpty()) {
                    stack.push(i);
                } else {
                    maxLength = Math.max(maxLength, i - stack.peek());
                }
            }
        }
        return maxLength;
    }
}
```

#### Time Complexity: `O(N)`, N is the length of the string.

#### Space Compelxity: `O(N)`, using stack to store elements.
