class Node {
    int data;
    Node next, prev;

    public Node(int data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

public class DLL {

    Node head, tail;
    int size;

    public DLL() {
        head = new Node(-1);
        tail = new Node(-1);
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

    public void addLast(Node node) {
        tail.prev.next = node;
        node.prev = tail.prev;
        node.next = tail;
        tail.prev = node;
        size += 1;
    }

    public void removeFirst() {
        if (size == 0) {
            return;
        }
        head.next = head.next.next;
        head.next.prev = head;
        size -= 1;
    }

    public void removeLast() {
        if (size == 0) {
            return;
        }
        tail.prev = tail.prev.prev;
        tail.prev.next = tail;
        size -= 1;
    }

    public void printList() {
        Node current = head.next;
        while (current != tail) {
            System.out.print(current.data + " ");
            current = current.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        DLL dll = new DLL();
        dll.addFirst(new Node(10));
        dll.addFirst(new Node(20));
        dll.addFirst(new Node(30));
        dll.addLast(new Node(40));
        dll.printList();
        dll.removeFirst();
        dll.printList();
        dll.removeLast();
        dll.printList();
    }
}
