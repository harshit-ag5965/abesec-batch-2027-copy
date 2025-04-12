### LeetCode Problem Link: [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/description)

### Solution 1 - Using separate while loops when one of the linked lists end.

```java
class Solution {

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

        ListNode curr1 = l1;
        ListNode curr2 = l2;

        int carry = 0;
        while(curr1 != null && curr2 != null) {
            int sum = curr1.val + curr2.val + carry;
            carry = sum / 10;
            int val = sum % 10;
            insertNode(val);
            curr1 = curr1.next;
            curr2 = curr2.next;
        }

        while(curr1 != null) {
            int sum = curr1.val + carry;
            carry = sum / 10;
            int val = sum % 10;
            insertNode(val);
            curr1 = curr1.next;
        }

        while(curr2 != null) {
            int sum = curr2.val + carry;
            carry = sum / 10;
            int val = sum % 10;
            insertNode(val);
            curr2 = curr2.next;
        }

        if(carry == 1) {
            insertNode(carry);
        }

        return head;
    }
}
```

### Using `single while-loop`

```java
class Solution {

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

        ListNode curr1 = l1;
        ListNode curr2 = l2;

        int carry = 0;
        while(curr1 != null || curr2 != null) {
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

        if(carry == 1) {
            insertNode(carry);
        }

        return head;
    }
}
```

### Using `carry` condition in while-loop

```java
class Solution {

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

        ListNode curr1 = l1;
        ListNode curr2 = l2;

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

        return head;
    }
}
```

### Time Complexity: `O(N)`, N is the max of lengths of both the linked lists.

### Space Compelxity: `O(N)`, because we created a new list to store the sum of two linked lists.
