/**
 * Unoptimised solution using HashMap
 * 
 * URL: https://leetcode.com/problems/linked-list-cycle-ii
 */

public class Solution {

    public ListNode detectCycle(ListNode head) {
        Map<ListNode, Boolean> map = new HashMap<>();
        ListNode curr = head;
        while (curr != null) {
            if (map.containsKey(curr)) {
                return curr;
            }
            map.put(curr, true);
            curr = curr.next;
        }
        return null;
    }
}

/**
 * Optimised using fast and slow pointer (Floyd's Cycle Detection Algorithm)
 */
public class Solution {

    public ListNode detectCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        boolean isLoopFound = false;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                isLoopFound = true;
                slow = head;
                break;
            }
        }

        if (!isLoopFound)
            return null;

        while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }

        return slow;
    }
}