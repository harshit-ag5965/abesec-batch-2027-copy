### LeetCode Problem Link: [142. Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii)

### Unoptimised Solution

```java
public class Solution {

    public ListNode detectCycle(ListNode head) {
        Map<ListNode, Boolean> map = new HashMap<>();
        ListNode curr = head;
        while (curr != null) {
            if (map.containsKey(curr)) {
                return curr;
            }
            map.put(curr, true);
            curr = curr.next;
        }
        return null;
    }
}
```

#### Time Complexity: `O(N)`, N is the length of the linked list.

#### Space Compelxity: `O(N)`, we utilised a map where we stored all the nodes in the map.

<hr>

### Optimised using fast and slow pointer (Floyd's Cycle Detection Algorithm)

```java
public class Solution {

    public ListNode detectCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        boolean isLoopFound = false;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                isLoopFound = true;
                slow = head;
                break;
            }
        }

        if (!isLoopFound)
            return null;

        while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }

        return slow;
    }
}
```

### Time Complexity: `O(N)`, N is the lengthof the linked list.

### Space Compelxity: `O(1)`
