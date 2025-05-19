### LeetCode Problem Link: [155. Min Stack](https://leetcode.com/problems/min-stack/description/)

```java
class MinStack {

    private Stack<Long> stack;
    private long min;

    public MinStack() {
        this.stack = new Stack<>();
    }

    public void push(int val) {
        if (stack.isEmpty()) {
            stack.push(0L);  // difference = 0
            min = val;
        } else {
            long diff = (long) val - min;
            stack.push(diff);
            if (val < min) {
                min = val;
            }
        }
    }

    public void pop() {
        if (stack.isEmpty()) return;

        long diff = stack.pop();
        if (diff < 0) {
            min = min - diff; // Restore previous min
        }
    }

    public int top() {
        long diff = stack.peek();
        if (diff >= 0) {
            return (int) (min + diff);
        } else {
            return (int) min;  // Current min is the top
        }
    }

    public int getMin() {
        return (int) min;
    }
}
```

#### Time Complexity: `O(1)` for all the operations.

#### Space Compelxity: `O(1)`, we're not using any other extra space other than the required stack.
