### LeetCode Problem Link: [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/)

```java
class Solution {

    public boolean isValidCombination(char open, char close) {
        if(open == '(' && close == ')') {
            return true;
        } else if(open == '[' && close == ']') {
            return true;
        } else if(open == '{' && close == '}') {
            return true;
        }
        return false;
    }

    public boolean isOpenParenthesis(char ch) {
        return ch == '(' || ch == '{' || ch == '[';
    }

    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        for(int i = 0; i < s.length(); i++) {
            char currChar = s.charAt(i);
            if(isOpenParenthesis(currChar)) {
                stack.push(currChar);
            } else {
                if(!stack.isEmpty()) {
                    char eqOpenBracket = stack.pop();
                    if(!isValidCombination(eqOpenBracket, currChar)) {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        }

        if(!stack.isEmpty()) return false;
        return true;
    }
}
```

In the above code, the else part can be replaced as follows:

```java
else if(stack.isEmpty() || !isValidCombination(stack.pop(), currChar)) {
    return false;
}
```

### Complete Code:

```java
class Solution {

    public boolean isValidCombination(char open, char close) {
        if(open == '(' && close == ')') {
            return true;
        } else if(open == '[' && close == ']') {
            return true;
        } else if(open == '{' && close == '}') {
            return true;
        }
        return false;
    }

    public boolean isOpenParenthesis(char ch) {
        return ch == '(' || ch == '{' || ch == '[';
    }

    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        for(int i = 0; i < s.length(); i++) {
            char currChar = s.charAt(i);
            if(isOpenParenthesis(currChar)) {
                stack.push(currChar);
            } else if(stack.isEmpty() || !isValidCombination(stack.pop(), currChar)) {
                return false;
            }
        }

        if(!stack.isEmpty()) return false;
        return true;
    }
}
```

#### Time Complexity: `O(N)`, N is the length of the string.

#### Space Compelxity: `O(N)`, using stack to store the open parenthesis.
