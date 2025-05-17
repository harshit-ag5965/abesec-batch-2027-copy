### LeetCode Problem Link: [735. Asteroid Collision](https://leetcode.com/problems/asteroid-collision/description/)

```java
class Solution {
    public int[] asteroidCollision(int[] asteroids) {
        Stack<Integer> stack = new Stack<>();
        for(int asteroid : asteroids) {
            boolean isExploded = false;
            while(!stack.isEmpty() && stack.peek() > 0 && asteroid < 0) {
                int lastAsteroid = stack.pop();
                if(lastAsteroid > (asteroid * -1)) {
                    stack.push(lastAsteroid);
                    isExploded = true;
                    break;
                } else if(lastAsteroid == (asteroid * -1)) {
                    isExploded = true;
                    break;
                }
            }
            if(!isExploded) stack.push(asteroid);
        }

        int[] ans = new int[stack.size()];
        for(int i = ans.length - 1; i >= 0; i--) {
            ans[i] = stack.pop();
        }

        return ans;
    }
}
```

#### Time Complexity: `O(N)`, N is the length of the array.

#### Space Compelxity: `O(N)`, using stack to store elements.
