class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
        this.length += 1;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;
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
        let currentNode = this.head;
        for (let i = 1; i < index; i++) {
            currentNode = currentNode.next;
        }
        const newNode = new Node(value);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length += 1;
        return this.printList();
    }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList.printList());
myLinkedList.append(5);
console.log(myLinkedList.printList());
myLinkedList.append(16);
console.log(myLinkedList.printList());
myLinkedList.prepend(1);
console.log(myLinkedList.printList());
console.log(myLinkedList.insert(2, 20));
