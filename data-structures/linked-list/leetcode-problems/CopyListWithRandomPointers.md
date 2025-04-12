### LeetCode Problem Link: [138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/description)

```java
class Solution {

    Node newHead = null;
    Node end = null;

    public void insertNode(int val) {
        Node node = new Node(val);
        if(newHead == null) {
            newHead = node;
        } else {
            end.next = node;
        }
        end = node;
    }


    public Node copyRandomList(Node head) {
        Node curr = head;
        Map<Node, Node> map = new HashMap<>();

        while(curr != null) {
            insertNode(curr.val);
            map.put(curr, end);
            curr = curr.next;
        }

        curr = head;
        while(curr != null) {
            if(curr.random != null) {
                map.get(curr).random = map.get(curr.random);
            }
            curr = curr.next;
        }

        return newHead;

    }
}
```

### Time Complexity: `O(N)`, N is the lengthof the linked list.

### Space Compelxity: `O(N)`, because we created hashmap which stores all the nodes that are there in linked list.
