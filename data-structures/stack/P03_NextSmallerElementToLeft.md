### Problem Statement:

Given a integer array `nums`, return the next smaller number for every element in `nums`.

The **next smaller number** of a number `x` is the first smaller number to its left in the array. If it doesn't exist, return -1 for this number.

**Example:**

```
Input:
nums = [8, 18, 2, 9, 17, 14, 12, 13, 20]
Output:
[-1, 8, -1, 2, 9, 9, 9, 12, 13]
```

### Unoptimised Code

```java
import java.util.Arrays;

public class NextSmallerElementToTheLeft {

    public static int[] findNextSmallerToLeftUnoptimised(int arr[], int n) {
        int[] ans = new int[n];
        Arrays.fill(ans, -1);
        for (int i = 0; i < n; i++) {
            for (int j = i; j >= 0; j--) {
                if (arr[j] < arr[i]) {
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
        int ans[] = findNextSmallerToLeftUnoptimised(arr, n);

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

public class NextSmallerElementToTheLeft {

    public static int[] findNextSmallerToLeft(int arr[], int n) {
        int[] ans = new int[n];
        Stack<Integer> stack = new Stack<>();
        for (int i = 0; i < n; i++) {
            int curr = arr[i];
            while (!stack.isEmpty() && stack.peek() >= curr) {
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
        int ans[] = findNextSmallerToLeft(arr, n);

        for (int i = 0; i < n; i++) {
            System.out.print(ans[i] + " ");
        }
    }
}
```

#### Time Complexity: `O(N)`, N is the length of the array.

#### Space Complexity: `O(N)`, using stack to store elements.
