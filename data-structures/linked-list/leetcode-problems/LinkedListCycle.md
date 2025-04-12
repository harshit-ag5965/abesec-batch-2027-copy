### LeetCode Problem Link: [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle)

### Unoptimised Solution

```java
public class Solution {

    public boolean hasCycle(ListNode head) {
        Map<ListNode, Boolean> map = new HashMap<>();
        ListNode curr = head;
        while (curr != null) {
            if (map.containsKey(curr)) {
                return true;
            }
            map.put(curr, true);
            curr = curr.next;
        }
        return false;
    }
}
```

#### Time Complexity: `O(N)`, N is the length of the linked list.

#### Space Compelxity: `O(N)`, we utilised a map where we stored all the nodes in the map.

<hr>

### Optimised using fast and slow pointer

```java
public class Solution {

    public boolean hasCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                return true;
            }
        }

        return false;
    }

}
```

### Time Complexity: `O(N)`, N is the lengthof the linked list.

### Space Compelxity: `O(1)`
