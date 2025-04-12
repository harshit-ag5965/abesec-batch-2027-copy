### LeetCode Problem Link: [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/description/)

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
}
```

### Time Complexity: `O(N)`

### Space Compelxity: `O(1)`
