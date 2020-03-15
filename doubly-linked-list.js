class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length += 1;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;   
        this.head = newNode;
        this.length += 1;
    }
    // To verify if the prev links are updated properly
    reversePrintList() {
        const array = [];
        let currentNode = this.tail;
        for (let i = 0; i < this.length; i++) {
            array.push(currentNode.value);
            currentNode = currentNode.prev;
        }
        return array;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        for (let i = 0; i < this.length; i++) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index, value) {
        if (index < 0 || index > this.length)
            throw new Error("IndexOutOfBounds");
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        if (index === this.length) {
            this.append(value);
            return this.printList();
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        follower.prev = newNode;
        newNode.next = follower;
        this.length += 1;
        return this.printList();
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter != index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error("IndexOutOfBounds");
        }
        if (index === 0) {
            this.head = this.head.next;
            this.head.prev = null;
            this.length -= 1;
            return this.printList();
        }
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        if (index === this.length - 1) {
            this.tail = this.leader;
        }
        leader.next = follower.next;
        follower.next.prev = leader;
        this.length -= 1;
        return this.printList();
    }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
console.log(myDoublyLinkedList.printList());
console.log(myDoublyLinkedList.reversePrintList());
myDoublyLinkedList.append(5);
console.log(myDoublyLinkedList.printList());
console.log(myDoublyLinkedList.reversePrintList());
myDoublyLinkedList.append(16);
console.log(myDoublyLinkedList.printList());
console.log(myDoublyLinkedList.reversePrintList());
myDoublyLinkedList.prepend(1);
console.log(myDoublyLinkedList.printList());
console.log(myDoublyLinkedList.reversePrintList());
console.log(myDoublyLinkedList.insert(2, 20));
console.log(myDoublyLinkedList.reversePrintList());
console.log(myDoublyLinkedList.remove(3));
console.log(myDoublyLinkedList.reversePrintList());
