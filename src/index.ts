import { CharactersCollections } from "./CharactersCollections";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

const nums = new NumbersCollection([12, 8, 4, 10]);
nums.sort();
console.log(nums.data);

const chars = new CharactersCollections('muhammad');
chars.sort();
console.log(chars);

const linkedlist = new LinkedList();
linkedlist.add(12);
linkedlist.add(8);
linkedlist.add(4);
linkedlist.add(-10);
// const sorter = new Sorter(linkedlist);
linkedlist.sort();
linkedlist.print();