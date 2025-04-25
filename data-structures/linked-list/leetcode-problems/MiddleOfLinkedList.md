### LeetCode Problem Link: [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/description)

### Unoptimised Solution

```java
class Solution {
    public int findLength(ListNode head) {
        ListNode curr = head;
        int count = 0;
        while(curr != null) {
            count += 1;
            curr = curr.next;
        }
        return count;
    }
    public ListNode middleNode(ListNode head) {
        int length = findLength(head);
        ListNode curr = head;
        for(int i = 1; i <= length/2; i++) {
            curr = curr.next;
        }
        return curr;
    }
}
```

#### Time Complexity: `O(N)`, N is the length of the linked list.

#### Space Compelxity: `O(1)`

<hr/>

### Optimised using fast and slow pointer - Single pass

```java
class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}
```

#### Time Complexity: `O(N)`, N is the length of the linked list.

#### Space Compelxity: `O(1)`
