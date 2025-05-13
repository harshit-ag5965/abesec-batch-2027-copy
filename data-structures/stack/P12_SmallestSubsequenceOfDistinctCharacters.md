### LeetCode Problem Link: [1081. Smallest Subsequence of Distinct Characters](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/description/)

```java
class Solution {
    public String smallestSubsequence(String s) {
        Map<Character, Integer> lastIndex = new HashMap<>();
        for(int i = 0; i < s.length(); i++) {
            char curr = s.charAt(i);
            lastIndex.put(curr, i);
        }

        Stack<Character> stack = new Stack<>();
        Set<Character> seen = new HashSet<>(); // we could also use map here but we just need to know whether an element has been seen or not (map is useful when we need to store key: value in a pair)

        for(int i = 0; i < s.length(); i++) {
            char curr = s.charAt(i);
            if(seen.contains(curr)) continue;
            while(!stack.isEmpty() && stack.peek() > curr && lastIndex.get(stack.peek()) > i) {
                seen.remove(stack.pop());
            }
            if(!seen.contains(curr)) {
                stack.push(curr);
                seen.add(curr);
            }
        }

        StringBuilder str = new StringBuilder();
        while(!stack.isEmpty()) {
            str.append(stack.pop());
        }

        return str.reverse().toString();
    }
}
```

#### Time Complexity: `O(N)`, N is the length of the string.

#### Space Compelxity: `O(N)`, using stack and set to store characters.
