/**
 * URL: https://leetcode.com/problems/linked-list-cycle
 * 
 * Unoptimised
 */
public class Solution {

    public boolean hasCycle(ListNode head) {
        Map<ListNode, Boolean> map = new HashMap<>();
        ListNode curr = head;
        while (curr != null) {
            if (map.containsKey(curr)) {
                return true;
            }
            map.put(curr, true);
            curr = curr.next;
        }
        return false;
    }
}

/**
 * Optimised using fast and slow pointer
 */

public class Solution {

    public boolean hasCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                return true;
            }
        }

        return false;
    }
}
