/**
 * URL: https://leetcode.com/problems/middle-of-the-linked-list/description
 * Unoptimised
 */
class Solution {
    public int findLength(ListNode head) {
        ListNode curr = head;
        int count = 0;
        while (curr != null) {
            count += 1;
            curr = curr.next;
        }
        return count;
    }
}

/**
 * 
 * Optimised using fast and slow pointer
 */
class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}