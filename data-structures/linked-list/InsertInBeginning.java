class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
    }
}

public class InsertInBeginning {

    static Node head = null;

    public static void insertAtBeginning(int data) {
        Node node = new Node(data);
        node.next = head;
        head = node;
    }

    public static void printLinkedList() {
        Node curr = head;
        while (curr != null) {
            System.out.print(curr.data + " -> ");
            curr = curr.next;
        }
        System.out.println("null");
    }

    public static void main(String[] args) {
        insertAtBeginning(70);
        insertAtBeginning(10);
        insertAtBeginning(20);
        insertAtBeginning(30);
        insertAtBeginning(40);
        printLinkedList();
    }
}
