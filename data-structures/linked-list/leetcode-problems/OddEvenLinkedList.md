### LeetCode Problem Link: [328. Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/description)

```java
class Solution {

    public ListNode oddEvenList(ListNode head) {
        if(head == null) return head;

        ListNode oddHead = head;
        ListNode evenHead = oddHead.next;

        ListNode odd = oddHead;
        ListNode even = evenHead;

        while(even != null && even.next != null) {
            odd.next = odd.next.next;
            even.next = even.next.next;
            odd = odd.next;
            even = even.next;
        }

        odd.next = evenHead;
        return oddHead;

    }
}
```

### Time Complexity: `O(N)`, N is the lengthof the linked list.

### Space Compelxity: `O(1)`
