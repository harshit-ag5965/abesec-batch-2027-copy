### LeetCode Problem Link: [402. Remove K Digits](https://leetcode.com/problems/remove-k-digits/description/)

```java
class Solution {
    public String removeKdigits(String num, int k) {
        Stack<Character> stack = new Stack<>();
        for(int i = 0; i < num.length(); i++) {
            char curr = num.charAt(i);
            while(!stack.isEmpty() && stack.peek() > curr && k > 0) {
                stack.pop();
                k -= 1;
            }

            stack.push(curr);
        }

        while(k > 0) {
            stack.pop();
            k -= 1;
        }

        StringBuilder str = new StringBuilder();
        while(!stack.isEmpty()) {
            str.append(stack.pop());
        }

        str.reverse();

        int startIndex = -1;
        for(int i = 0; i < str.length(); i++) {
            if(str.charAt(i) != '0') {
                startIndex = i;
                break;
            }
        }

        if(startIndex == -1) return "0";

        return str.substring(startIndex);
    }
}
```

#### Time Complexity: `O(N)`, N is the length of the string.

#### Space Compelxity: `O(N)`, using stack to store characters.
