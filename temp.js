class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function isPalindrome(head) {
    if(!head && !head.next) {
        return true;
    }

    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let curr = slow.next;
    while(curr) {
        const NewTemp = curr.next;
        curr.next = prev;
        prev = curr;    
        curr = NewTemp;
    }
    slow.next = prev;
    
    let p1 = head;
    let p2 = slow.next;
    while(p2) {
        if(p1.value !== p2.value) {
            return false;
        }
        p1 = p1.next
        p2 = p2.next
    }
    return true;
}

const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(2);
head1.next.next.next.next = new ListNode(7);

console.log(isPalindrome(head1));