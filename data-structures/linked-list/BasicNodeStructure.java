class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
    }
}

public class BasicNodeStructure {
    public static void main(String[] args) {
        Node node1 = new Node(123);
        Node node2 = new Node(321);
        node1.next = node2;
        System.out.println(node1.data);
        System.out.println(node2.data);
        System.out.println(node1.next.data);
    }
}
