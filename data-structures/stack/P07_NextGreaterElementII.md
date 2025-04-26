### LeetCode Problem Link: [503. Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/description/)

### Using Temporary Array

```java
class Solution {
    public int[] nextGreaterElements(int[] nums) {
        int[] tempArr = new int[nums.length * 2];
        for(int i = 0; i < nums.length; i++) {
            tempArr[i] = nums[i];
            tempArr[i + nums.length] = nums[i];
        }

        int[] tempAns = new int[nums.length * 2];
        Stack<Integer> stack = new Stack<>();
        for(int i = tempArr.length - 1; i >= 0; i--) {
            int curr = tempArr[i];
            while(!stack.isEmpty() && stack.peek() <= curr) {
                stack.pop();
            }
            if(stack.isEmpty()) {
                tempAns[i] = -1;
            } else {
                tempAns[i] = stack.peek();
            }
            stack.push(curr);
        }

        int[] ans = new int[nums.length];
        for(int i = 0; i < ans.length; i++) {
            ans[i] = tempAns[i];
        }

        return ans;
    }
}
```

#### Time Complexity: `O(N)`, N is the length of the nums.

#### Space Compelxity: `O(N)`, using stack to store elements.

### Without Using Temporary Array

```java
class Solution {
    public int[] nextGreaterElements(int[] nums) {
        int[] ans = new int[nums.length];
        Stack<Integer> stack = new Stack<>();

        // precomputations
        for(int i = nums.length - 1; i >= 0; i--) {
            int curr = nums[i];
            while(!stack.isEmpty() && stack.peek() <= curr) {
                stack.pop();
            }
            stack.push(curr);
        }

        for(int i = nums.length - 1; i >= 0; i--) {
            int curr = nums[i];
            while(!stack.isEmpty() && stack.peek() <= curr) {
                stack.pop();
            }
            if(stack.isEmpty()) {
                ans[i] = -1;
            } else {
                ans[i] = stack.peek();
            }
            stack.push(curr);
        }
        return ans;
    }
}
```

#### Time Complexity: `O(N)`, N is the length of the nums.

#### Space Compelxity: `O(N)`, using stack to store elements.
