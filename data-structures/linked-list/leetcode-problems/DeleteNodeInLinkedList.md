### LeetCode Problem Link: [237. Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/description/)

```java
class Solution {
    public void deleteNode(ListNode node) {
        node.val = node.next.val;
        node.next = node.next.next;
    }
}
```

#### Time Complexity: `O(1)`

#### Space Complexity: `O(1)`
