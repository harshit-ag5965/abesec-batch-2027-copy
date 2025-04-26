### GFG Problem Link: [The Stock Span Problem](https://www.geeksforgeeks.org/the-stock-span-problem/)

```java
import java.util.Stack;

public class StockSpanProblem {

    public static int[] calculateSpan(int prices[], int n) {
        int[] span = new int[n];
        Stack<Integer> stack = new Stack<>();
        for (int i = 0; i < n; i++) {
            int curr = prices[i];
            while (!stack.isEmpty() && prices[stack.peek()] <= curr) { // get the value of the index
                stack.pop();
            }
            if (stack.isEmpty()) {
                span[i] = i - (-1);
            } else {
                span[i] = i - stack.peek(); // store indices of the elements
            }
            stack.push(i); // store the index of the current element instead of the value
        }
        return span;
    }

    public static void main(String[] args) {
        int arr[] = { 10, 4, 5, 90, 120, 80 };
        int n = arr.length;
        int ans[] = calculateSpan(arr, n);

        for (int i = 0; i < n; i++) {
            System.out.print(ans[i] + " ");
        }
    }
}
```
