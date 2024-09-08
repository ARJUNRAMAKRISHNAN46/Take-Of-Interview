class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new ListNode(value);
        if(this.head === null) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while(curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
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

     let curr = slow.next;
     let prev = null;

     while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
     }

     slow.next = prev;

     let p1 = head;
     let p2 = slow.next;
     while(p2) {
        if(p1.value !== p2.value) {
            return false;
        }
        p1 = p1.next;
        p2 = p2.next;
     }
     return true;
}

const list = new LinkedList();

list.append(4);
list.append(9);
list.append(6);
list.append(1);
list.append(6);
list.append(9);
list.append(4);

console.log(isPalindrome(list.head)); //returns true;