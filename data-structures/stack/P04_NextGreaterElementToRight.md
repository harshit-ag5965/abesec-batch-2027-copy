### Problem Statement:

Given a integer array `nums`, return the next greater number for every element in `nums`.

The **next greater number** of a number `x` is the first greater number to its right in the array. If it doesn't exist, return -1 for this number.

**Example:**

```
Input:
nums = [8, 18, 2, 9, 17, 14, 12, 13, 20]
Output:
[18, 20, 9, 17, 20, 20, 13, 20, -1]
```

### Unoptimised Code

```java
import java.util.Arrays;

public class NextGreaterElementToTheRight {

    public static int[] findNextGreaterToRightUnoptimised(int arr[], int n) {
        int[] ans = new int[n];
        Arrays.fill(ans, -1);
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                if (arr[j] > arr[i]) {
                    ans[i] = arr[j];
                    break;
                }
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        int arr[] = { 8, 18, 2, 9, 17, 14, 12, 13, 20 };
        int n = arr.length;
        int ans[] = findNextGreaterToRightUnoptimised(arr, n);

        for (int i = 0; i < n; i++) {
            System.out.print(ans[i] + " ");
        }
    }
}
```

#### Time Complexity: `O(N^2)`, N is the length of the array.

#### Space Complexity: `O(1)`

### Optimised Code

```java
import java.util.Stack;

public class NextGreaterElementToTheRight {

    public static int[] findNextGreaterToRight(int arr[], int n) {
        int[] ans = new int[n];
        Stack<Integer> stack = new Stack<>();
        for (int i = n - 1; i >= 0; i--) {
            int curr = arr[i];
            while (!stack.isEmpty() && stack.peek() <= curr) {
                stack.pop();
            }
            if (stack.isEmpty()) {
                ans[i] = -1;
            } else {
                ans[i] = stack.peek();
            }
            stack.push(curr);
        }
        return ans;
    }

    public static void main(String[] args) {
        int arr[] = { 8, 18, 2, 9, 17, 14, 12, 13, 20 };
        int n = arr.length;
        int ans[] = findNextGreaterToRight(arr, n);

        for (int i = 0; i < n; i++) {
            System.out.print(ans[i] + " ");
        }
    }
}
```

#### Time Complexity: `O(N)`, N is the length of the array.

#### Space Complexity: `O(N)`, using stack to store elements.
