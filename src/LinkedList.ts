import { Sorter } from "./Sorter";

class Node {
    next: Node | null = null;

    constructor(public data: number) {
    } 
}

export class LinkedList extends Sorter {
    head: Node | null = null;

    constructor() {
        super();
    }

    get length(): number {
        if (!this.head) return 0;

        let tail = this.head;
        let len = 1;
        while (tail.next) {
            len++;
            tail = tail.next;
        }

        return len;
    }

    compare(leftIdx: number, rightIdx: number): boolean {
        if (!this.head) throw new Error('list is empty');

        if (rightIdx >= this.length || leftIdx > this.length) {
            throw new Error('index is out of range');
        }


        const leftHand = this.at(leftIdx);
        const rightHand = this.at(rightIdx);

        return leftHand.data > rightHand.data;
    }

    swap(leftIdx: number, rightIdx: number): void {
        if (!this.head) throw new Error('list is empty');

        if (rightIdx >= this.length || leftIdx > this.length) {
            throw new Error('index is out of range');
        }


        const leftHand = this.at(leftIdx);
        const rightHand = this.at(rightIdx);

        const leftHandData = leftHand.data;
        leftHand.data = rightHand.data;
        rightHand.data = leftHandData;
    }

    add(data: number): void {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            return;
        }

        let curr = this.head;

        while (curr.next) {
            curr = curr.next;
        }

        curr.next = node;
    }

    at(index: number): Node {
        if (!this.head) {
            throw new Error('Index out of range');
        }
        let counter = 0;
        let node: Node | null = this.head;

        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }

        throw new Error('Index out of range');
    }

    print(): void {
        if (!this.head) return;

        let node: Node | null = this.head;

        while (node) {
            console.log(`node data ${node.data} \n`);
            node = node.next;
        }
    }
}