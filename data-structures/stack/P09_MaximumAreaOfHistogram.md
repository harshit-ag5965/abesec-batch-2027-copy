### LeetCode Problem Link: [84. Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/description/)

```java
class Solution {

	private static int[] nextSmallerElementToLeft(int arr[], int n) {
		int[] nselIndex = new int[arr.length];
		Stack<Integer> stack = new Stack<>();

		for(int i = 0; i < n; i++) {
		    while(!stack.empty() && arr[stack.peek()] >= arr[i]) {
    			stack.pop();
    		}
    		if(stack.empty()) {
    		    nselIndex[i] = -1;
    		}
    		else  {
    		    nselIndex[i] = stack.peek();
    		}
			stack.push(i);
		}
		return nselIndex;
	}

	private static int[] nextSmallerElementToRight(int arr[], int n) {
		int[] nserIndex = new int[arr.length];
		Stack<Integer> stack = new Stack<>();

		for(int i = n - 1; i >= 0; i--) {
		    while(!stack.empty() && arr[stack.peek()] >= arr[i]) {
    			stack.pop();
    		}
    		if(stack.empty()) {
    		    nserIndex[i] = arr.length;
    		}
    		else  {
    		    nserIndex[i] = stack.peek();
    		}
			stack.push(i);
		}
		return nserIndex;
	}

	public int largestRectangleArea(int arr[]) {
        int n = arr.length;
        if(n == 0) {
            return 0;
        }
		int[] nsel = nextSmallerElementToLeft(arr, n);
		int[] nser = nextSmallerElementToRight(arr, n);
		int maxArea = Integer.MIN_VALUE;
		for(int i = 0; i < n; i++) {
			int area = (nser[i] - nsel[i] - 1) * arr[i];
			maxArea = Math.max(maxArea, area);
		}
		return maxArea;
	}
}
```

#### Time Complexity: `O(N)`, N is the length of the array.

#### Space Compelxity: `O(N)`, because of stack.
