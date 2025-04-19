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

### Time Complexity: `O(N)`, N is the length of the linked list.

### Space Compelxity: `O(N)`, because we created hashmap which stores all the nodes that are there in linked list.

## Optimised Space Solution

```java
class Solution {
    public Node copyRandomList(Node head) {

        if(head == null) return null;

        Node curr = head;
        while(curr != null) {
            Node node = new Node(curr.val);
            node.next = curr.next;
            curr.next = node;
            curr = curr.next.next;
        }

        curr = head;
        while(curr != null) {
            if(curr.random != null) {
                curr.next.random = curr.random.next;
            }
            curr = curr.next.next;
            // curr.next.random = (curr.random == null) ? null : curr.random.next;
        }

        Node oldHead = head;
        Node newHead = head.next;

        Node oldPtr = oldHead;
        Node newPtr = newHead;

        while(oldPtr != null) {
            oldPtr.next = oldPtr.next.next;
            newPtr.next = (newPtr.next == null ) ? null : newPtr.next.next;
            oldPtr = oldPtr.next;
            newPtr = newPtr.next;
        }

        return newHead;

    }
}
```

### Time Complexity: `O(N)`, N is the length of the linked list.

### Space Compelxity: `O(1)`
