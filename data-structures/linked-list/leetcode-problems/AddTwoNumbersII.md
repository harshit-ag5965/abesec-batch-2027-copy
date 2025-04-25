### LeetCode Problem Link: [445. Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/description)

```java
class Solution {

    public ListNode reverseList(ListNode head) {
        ListNode prevNode, nextNode, currNode;
        prevNode = nextNode = null;
        currNode = head;

        while(currNode != null) {
            nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }

        return prevNode;
    }

    ListNode head = null;
    ListNode end = null;

    public void insertNode(int val) {
        ListNode node = new ListNode(val);
        if(head == null) {
            head = node;
        } else {
            end.next = node;
        }
        end = node;
    }

    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {

        ListNode curr1 = reverseList(l1);
        ListNode curr2 = reverseList(l2);

        int carry = 0;
        while(curr1 != null || curr2 != null || carry != 0) {
            int sum = 0;
            if(curr1 != null) {
                sum += curr1.val;
                curr1 = curr1.next;
            }
            if(curr2 != null) {
                sum += curr2.val;
                curr2 = curr2.next;
            }
            sum += carry;
            carry = sum / 10;
            int val = sum % 10;
            insertNode(val);
        }

        return reverseList(head);
    }
}
```

### Time Complexity: `O(N)`, N is the max of lengths of both the linked lists.

### Space Compelxity: `O(N)`, because we created a new list to store the sum of two linked lists.
