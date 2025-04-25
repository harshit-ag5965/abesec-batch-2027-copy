### LeetCode Problem Link: [146. LRU Cache](https://leetcode.com/problems/lru-cache/description/)

```java
class Node {
    int key, value;
    Node next, prev;

    public Node(int key, int value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DLL {

    Node head, tail;

    public DLL() {
        head = new Node(-1, -1);
        tail = new Node(-1, -1);
        head.next = tail;
        tail.prev = head;
    }

    public void addFirst(Node node) {
        node.next = head.next;
        head.next.prev = node;
        head.next = node;
        node.prev = head;
    }

    public Node removeLast() {
        Node node = tail.prev;
        tail.prev = tail.prev.prev;
        tail.prev.next = tail;
        return node;
    }

    public void removeNode(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
}

class LRUCache {

    DLL dll;
    int capacity;
    Map<Integer, Node> cache;

    public LRUCache(int capacity) {
        dll = new DLL();
        this.capacity = capacity;
        cache = new HashMap<>();
    }

    public int get(int key) {
        if(cache.containsKey(key)) {
            Node node = cache.get(key);
            dll.removeNode(node);
            dll.addFirst(node);
            return node.value;
        }
        return -1;
    }

    public void put(int key, int value) {
        Node node = new Node(key, value);
        if(cache.containsKey(key)) {
            Node currNode = cache.get(key);
            dll.removeNode(currNode);
        } else if(cache.size() == capacity) {
            Node lastNode = dll.removeLast();
            cache.remove(lastNode.key);
        }
        dll.addFirst(node);
        cache.put(key, node);
    }
}
```

### Time Complexity: `O(1)` for put() and `O(1)` for get()

### Space Compelxity: `O(N)`, where N is the capacity of cache.
