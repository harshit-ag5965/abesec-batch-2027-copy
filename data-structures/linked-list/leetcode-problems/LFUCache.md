### LeetCode Problem Link: [460. LFU Cache](https://leetcode.com/problems/lfu-cache/description/)

```java
class Node {
    int key, value, frequency;
    Node next, prev;

    public Node(int key, int value, int frequency) {
        this.key = key;
        this.value = value;
        this.frequency = frequency;
        this.next = null;
        this.prev = null;
    }
}

class DLL {

    Node head, tail;
    int size;

    public DLL() {
        head = new Node(-1, -1, -1);
        tail = new Node(-1, -1, -1);
        head.next = tail;
        tail.prev = head;
        size = 0;
    }

    public void addFirst(Node node) {
        node.next = head.next;
        head.next.prev = node;
        head.next = node;
        node.prev = head;
        size += 1;
    }

    public Node removeLast() {
        if (size == 0) {
            return null;
        }
        Node node = tail.prev;
        tail.prev = tail.prev.prev;
        tail.prev.next = tail;
        size -= 1;
        return node;
    }

    public void removeNode(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        size -= 1;
    }
}

class LFUCache {

    int minimumFrequency;
    int capacity;
    Map<Integer, Node> cache;
    Map<Integer, DLL> frequencyLRU;

    public LFUCache(int capacity) {
        this.capacity = capacity;
        this.minimumFrequency = 1;
        cache = new HashMap<>();
        frequencyLRU = new HashMap<>();
    }

    public void promote(Node node) {
        int currFrequency = node.frequency;
        DLL lruCache = frequencyLRU.get(currFrequency);
        lruCache.removeNode(node);

        if(lruCache.size == 0 && minimumFrequency == currFrequency) {
            minimumFrequency += 1;
        }

        int newFrequency = currFrequency + 1;
        node.frequency = newFrequency;
        if(!frequencyLRU.containsKey(newFrequency)) {
            frequencyLRU.put(newFrequency, new DLL());
        }
        lruCache = frequencyLRU.get(newFrequency);
        lruCache.addFirst(node);
    }

    public int get(int key) {
        if(cache.containsKey(key)) {
            Node node = cache.get(key);
            promote(node);
            return node.value;
        }
        return -1;
    }

    public void put(int key, int value) {
        if(cache.containsKey(key)) {
            Node node = cache.get(key);
            node.value = value;
            promote(node);
            return;

        } else if (cache.size() == capacity) {
            DLL lruCache = frequencyLRU.get(minimumFrequency);
            Node node = lruCache.removeLast();
            cache.remove(node.key);
        }
        Node newNode = new Node(key, value, 1);
        cache.put(key, newNode);
        minimumFrequency = 1;
        if(!frequencyLRU.containsKey(minimumFrequency)) {
            frequencyLRU.put(minimumFrequency, new DLL());
        }
        DLL lruCache = frequencyLRU.get(minimumFrequency);
        lruCache.addFirst(newNode);
    }
}
```

### Time Complexity: `O(1)` for put() and `O(1)` for get()

### Space Compelxity: `O(N)`, where N is the capacity of cache.
